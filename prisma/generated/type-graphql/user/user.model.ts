import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from '../post/post.model';

@ObjectType()
export class User {

    @Field(() => ID, {
            nullable: false,
        })
    id!: number;

    @Field(() => String, {
            nullable: false,
        })
    email!: string;

    @Field(() => String, {
            nullable: true,
        })
    name?: string;

    @Field(() => [Post], {
            nullable: true,
        })
    posts?: Array<Post>;
}
