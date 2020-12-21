import { Field, InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutPostsInput } from '../user/user-update-one-without-posts.input';

@InputType()
export class PostUpdateInput {

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

    @Field(() => UserUpdateOneWithoutPostsInput, {
            nullable: true,
        })
    author?: UserUpdateOneWithoutPostsInput;
}
