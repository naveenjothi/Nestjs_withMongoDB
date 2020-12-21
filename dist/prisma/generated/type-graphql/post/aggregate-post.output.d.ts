import { PostAvgAggregate } from './post-avg-aggregate.output';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';
import { PostSumAggregate } from './post-sum-aggregate.output';
export declare class AggregatePost {
    count?: PostCountAggregate;
    avg?: PostAvgAggregate;
    sum?: PostSumAggregate;
    min?: PostMinAggregate;
    max?: PostMaxAggregate;
}
