import { UserCreateInput } from "../../../../prisma/generated/type-graphql/user/user-create.input";
export declare class CreateUserCommand {
    readonly data: UserCreateInput;
    readonly ctx: string | any;
    constructor(data: UserCreateInput, ctx: string | any);
}
