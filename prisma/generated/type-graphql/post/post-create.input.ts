import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOneWithoutPostsInput } from "../user/user-create-one-without-posts.input";

@InputType()
export class PostCreateInput {
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

  @Field(() => UserCreateOneWithoutPostsInput, {
    nullable: true,
  })
  author?: UserCreateOneWithoutPostsInput;
}
