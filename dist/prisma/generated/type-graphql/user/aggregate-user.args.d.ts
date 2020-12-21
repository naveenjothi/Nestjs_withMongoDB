import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserOrderByInput } from './user-order-by.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserWhereInput } from './user-where.input';
export declare class AggregateUserArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByInput> | UserOrderByInput;
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    count?: true;
    avg?: UserAvgAggregateInput;
    sum?: UserSumAggregateInput;
    min?: UserMinAggregateInput;
    max?: UserMaxAggregateInput;
}
