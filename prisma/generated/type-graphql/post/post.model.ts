import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Post {

    @Field(() => ID, {
            nullable: false,
        })
    id!: number;

    @Field(() => String, {
            nullable: false,
        })
    title!: string;

    @Field(() => String, {
            nullable: true,
        })
    content?: string;

    @Field(() => Boolean, {
            nullable: true,
            defaultValue: false,
        })
    published?: boolean;

    @Field(() => User, {
            nullable: true,
        })
    author?: User;

    @Field(() => Int, {
            nullable: true,
        })
    readonly authorId?: number;
}
