import { Field, InputType } from "@nestjs/graphql";
import { PostScalarWhereInput } from "./post-scalar-where.input";
import { PostUpdateManyMutationInput } from "./post-update-many-mutation.input";

@InputType()
export class PostUpdateManyWithWhereWithoutAuthorInput {
  @Field(() => PostScalarWhereInput, {
    nullable: true,
  })
  where?: PostScalarWhereInput;

  @Field(() => PostUpdateManyMutationInput, {
    nullable: true,
  })
  data?: PostUpdateManyMutationInput;
}
