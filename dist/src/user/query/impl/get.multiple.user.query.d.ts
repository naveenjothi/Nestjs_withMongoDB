import { UserWhereInput } from "../../../../prisma/generated/type-graphql/user/user-where.input";
export declare class GetMultipleUserQuery {
    readonly data: UserWhereInput;
    readonly ctx: string | any;
    constructor(data: UserWhereInput, ctx: string | any);
}
