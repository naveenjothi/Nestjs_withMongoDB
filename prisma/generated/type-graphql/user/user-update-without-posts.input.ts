import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserUpdateWithoutPostsInput {

    @Field(() => String, {
            nullable: true,
        })
    email?: string;

    @Field(() => String, {
            nullable: true,
        })
    name?: string;
}
