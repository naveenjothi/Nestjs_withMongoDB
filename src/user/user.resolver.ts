import { Args, Mutation, Query, Resolver, Context } from "@nestjs/graphql";
import { UserCreateInput } from "../../prisma/generated/type-graphql/user/user-create.input";
import { UserWhereInput } from "../../prisma/generated/type-graphql/user/user-where.input";
import { UserWhereUniqueInput } from "../../prisma/generated/type-graphql/user/user-where-unique.input";
import { User } from "../../prisma/generated/type-graphql/user/user.model";
// import { GetUserQueryInput } from "./query/input/get.user.query.input";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User, {
    name: "CreateUser",
    description: "Create Author Field",
  })
  async createUser(
    @Args("data") data: UserCreateInput,
    @Context() ctx: string | any
  ): Promise<User> {
    return await this.userService.createUser(data, ctx);
  }

  @Query(() => [User])
  async getMultipleUsers(
    @Args("data")
    data: UserWhereInput,
    @Context() ctx: string | any
  ): Promise<User[]> {
    return await this.userService.getMultipleUsers(data, ctx);
  }

  @Query(() => User)
  async getSingleUser(
    @Args("data") data: UserWhereUniqueInput,
    @Context() ctx: string | any
  ): Promise<User> {
    return await this.userService.getSingleUser(data, ctx);
  }
}
