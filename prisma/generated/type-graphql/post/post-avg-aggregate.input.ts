import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostAvgAggregateInput {

    @Field(() => Boolean, {
            nullable: true,
        })
    id?: true;

    @Field(() => Boolean, {
            nullable: true,
        })
    authorId?: true;
}
