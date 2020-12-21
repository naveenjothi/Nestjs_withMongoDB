import { UserCreateInput } from "../../prisma/generated/type-graphql/user/user-create.input";
import { UserWhereInput } from "../../prisma/generated/type-graphql/user/user-where.input";
import { UserWhereUniqueInput } from "../../prisma/generated/type-graphql/user/user-where-unique.input";
import { User } from "../../prisma/generated/type-graphql/user/user.model";
import { UserService } from "./user.service";
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    createUser(data: UserCreateInput, ctx: string | any): Promise<User>;
    getMultipleUsers(data: UserWhereInput, ctx: string | any): Promise<User[]>;
    getSingleUser(data: UserWhereUniqueInput, ctx: string | any): Promise<User>;
}
