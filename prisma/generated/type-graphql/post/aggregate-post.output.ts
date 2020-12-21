import { Field, ObjectType } from '@nestjs/graphql';
import { PostAvgAggregate } from './post-avg-aggregate.output';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';
import { PostSumAggregate } from './post-sum-aggregate.output';

@ObjectType()
export class AggregatePost {

    @Field(() => PostCountAggregate, {
            nullable: true,
        })
    count?: PostCountAggregate;

    @Field(() => PostAvgAggregate, {
            nullable: true,
        })
    avg?: PostAvgAggregate;

    @Field(() => PostSumAggregate, {
            nullable: true,
        })
    sum?: PostSumAggregate;

    @Field(() => PostMinAggregate, {
            nullable: true,
        })
    min?: PostMinAggregate;

    @Field(() => PostMaxAggregate, {
            nullable: true,
        })
    max?: PostMaxAggregate;
}
