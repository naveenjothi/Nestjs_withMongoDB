import { UserOrderByInput } from "./user-order-by.input";
import { UserScalarFieldEnum } from "./user-scalar-field.enum";
import { UserWhereUniqueInput } from "./user-where-unique.input";
import { UserWhereInput } from "./user-where.input";
export declare class FindManyUserArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByInput> | UserOrderByInput;
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<UserScalarFieldEnum>;
}
