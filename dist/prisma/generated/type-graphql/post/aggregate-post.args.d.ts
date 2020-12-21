import { PostAvgAggregateInput } from './post-avg-aggregate.input';
import { PostMaxAggregateInput } from './post-max-aggregate.input';
import { PostMinAggregateInput } from './post-min-aggregate.input';
import { PostOrderByInput } from './post-order-by.input';
import { PostSumAggregateInput } from './post-sum-aggregate.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostWhereInput } from './post-where.input';
export declare class AggregatePostArgs {
    where?: PostWhereInput;
    orderBy?: Array<PostOrderByInput> | PostOrderByInput;
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    count?: true;
    avg?: PostAvgAggregateInput;
    sum?: PostSumAggregateInput;
    min?: PostMinAggregateInput;
    max?: PostMaxAggregateInput;
}
