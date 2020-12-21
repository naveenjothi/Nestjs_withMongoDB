import { UserWhereUniqueInput } from "../../../../prisma/generated/type-graphql/user/user-where-unique.input";
export declare class GetUserQuery {
    readonly data: UserWhereUniqueInput;
    readonly ctx: string | any;
    constructor(data: UserWhereUniqueInput, ctx: string | any);
}
