import { Field, InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserUpdateWithoutPostsInput } from './user-update-without-posts.input';

@InputType()
export class UserUpsertWithoutPostsInput {

    @Field(() => UserUpdateWithoutPostsInput, {
            nullable: true,
        })
    update?: UserUpdateWithoutPostsInput;

    @Field(() => UserCreateWithoutPostsInput, {
            nullable: true,
        })
    create?: UserCreateWithoutPostsInput;
}
