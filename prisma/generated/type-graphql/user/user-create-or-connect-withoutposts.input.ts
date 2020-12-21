import { Field, InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutpostsInput {

    @Field(() => UserWhereUniqueInput, {
            nullable: true,
        })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPostsInput, {
            nullable: true,
        })
    create?: UserCreateWithoutPostsInput;
}
