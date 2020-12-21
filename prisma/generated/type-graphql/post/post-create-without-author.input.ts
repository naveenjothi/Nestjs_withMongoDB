import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PostCreateWithoutAuthorInput {
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
}
