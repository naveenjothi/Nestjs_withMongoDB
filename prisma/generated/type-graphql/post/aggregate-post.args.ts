import { ArgsType, Field, Int } from '@nestjs/graphql';
import { PostAvgAggregateInput } from './post-avg-aggregate.input';
import { PostMaxAggregateInput } from './post-max-aggregate.input';
import { PostMinAggregateInput } from './post-min-aggregate.input';
import { PostOrderByInput } from './post-order-by.input';
import { PostSumAggregateInput } from './post-sum-aggregate.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostWhereInput } from './post-where.input';

@ArgsType()
export class AggregatePostArgs {

    @Field(() => PostWhereInput, {
            nullable: true,
        })
    where?: PostWhereInput;

    @Field(() => [PostOrderByInput], {
            nullable: true,
        })
    orderBy?: Array<PostOrderByInput> | PostOrderByInput;

    @Field(() => PostWhereUniqueInput, {
            nullable: true,
        })
    cursor?: PostWhereUniqueInput;

    @Field(() => Int, {
            nullable: true,
        })
    take?: number;

    @Field(() => Int, {
            nullable: true,
        })
    skip?: number;

    @Field(() => Boolean, {
            nullable: true,
        })
    count?: true;

    @Field(() => PostAvgAggregateInput, {
            nullable: true,
        })
    avg?: PostAvgAggregateInput;

    @Field(() => PostSumAggregateInput, {
            nullable: true,
        })
    sum?: PostSumAggregateInput;

    @Field(() => PostMinAggregateInput, {
            nullable: true,
        })
    min?: PostMinAggregateInput;

    @Field(() => PostMaxAggregateInput, {
            nullable: true,
        })
    max?: PostMaxAggregateInput;
}
