import { Field, InputType } from "@nestjs/graphql";
import { PostCreateWithoutAuthorInput } from "./post-create-without-author.input";
import { PostWhereUniqueInput } from "./post-where-unique.input";

@InputType()
export class PostCreateOrConnectWithoutauthorInput {
  @Field(() => PostWhereUniqueInput, {
    nullable: true,
  })
  where?: PostWhereUniqueInput;

  @Field(() => PostCreateWithoutAuthorInput, {
    nullable: true,
  })
  create?: PostCreateWithoutAuthorInput;
}
