import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostMaxAggregate {

    @Field(() => Int, {
            nullable: true,
        })
    id?: number;

    @Field(() => String, {
            nullable: true,
        })
    title?: string;

    @Field(() => String, {
            nullable: true,
        })
    content?: string;

    @Field(() => Boolean, {
            nullable: true,
        })
    published?: boolean;

    @Field(() => Int, {
            nullable: true,
        })
    authorId?: number;
}
