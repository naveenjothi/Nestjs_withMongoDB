import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateUserCommand } from "./command/impl/create.user.command";

import { GetUserQuery, GetMultipleUserQuery } from "./query/impl/index";
import { UserCreateInput } from "../../prisma/generated/type-graphql/user/user-create.input";
import { UserWhereInput } from "../../prisma/generated/type-graphql/user/user-where.input";
import { UserWhereUniqueInput } from "../../prisma/generated/type-graphql/user/user-where-unique.input";
import { User } from "../../prisma/generated/type-graphql/user/user.model";

@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async createUser(data: UserCreateInput, ctx: string | any): Promise<User> {
    return this.commandBus.execute(new CreateUserCommand(data, ctx));
  }

  async getMultipleUsers(
    data: UserWhereInput,
    ctx: string | any
  ): Promise<User[]> {
    return this.queryBus.execute(new GetMultipleUserQuery(data, ctx));
  }

  async getSingleUser(
    data: UserWhereUniqueInput,
    ctx: string | any
  ): Promise<User> {
    return this.queryBus.execute(new GetUserQuery(data, ctx));
  }
}
