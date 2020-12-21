import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { UserCreateInput } from "../../prisma/generated/type-graphql/user/user-create.input";
import { UserWhereInput } from "../../prisma/generated/type-graphql/user/user-where.input";
import { UserWhereUniqueInput } from "../../prisma/generated/type-graphql/user/user-where-unique.input";
import { User } from "../../prisma/generated/type-graphql/user/user.model";
export declare class UserService {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    createUser(data: UserCreateInput, ctx: string | any): Promise<User>;
    getMultipleUsers(data: UserWhereInput, ctx: string | any): Promise<User[]>;
    getSingleUser(data: UserWhereUniqueInput, ctx: string | any): Promise<User>;
}
