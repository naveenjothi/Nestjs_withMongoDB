import { Field, InputType } from "@nestjs/graphql";
import { PostCreateManyWithoutAuthorInput } from "../post/post-create-many-without-author.input";

@InputType()
export class UserCreateInput {
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @Field(() => PostCreateManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostCreateManyWithoutAuthorInput;
}
