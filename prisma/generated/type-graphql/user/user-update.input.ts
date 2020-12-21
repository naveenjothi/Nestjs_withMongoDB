import { Field, InputType } from '@nestjs/graphql';
import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input';

@InputType()
export class UserUpdateInput {

    @Field(() => String, {
            nullable: true,
        })
    email?: string;

    @Field(() => String, {
            nullable: true,
        })
    name?: string;

    @Field(() => PostUpdateManyWithoutAuthorInput, {
            nullable: true,
        })
    posts?: PostUpdateManyWithoutAuthorInput;
}
