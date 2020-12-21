import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
export declare class AggregateUser {
    count?: UserCountAggregate;
    avg?: UserAvgAggregate;
    sum?: UserSumAggregate;
    min?: UserMinAggregate;
    max?: UserMaxAggregate;
}
