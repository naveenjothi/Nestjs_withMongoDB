import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {
            nullable: true,
        })
    id?: number;

    @Field(() => Int, {
            nullable: true,
        })
    email?: number;

    @Field(() => Int, {
            nullable: true,
        })
    name?: number;

    @Field(() => Int, {
            nullable: true,
        })
    _all?: number;
}
