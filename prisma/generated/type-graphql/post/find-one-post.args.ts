import { ArgsType, Field } from "@nestjs/graphql";
import { PostWhereUniqueInput } from "./post-where-unique.input";

@ArgsType()
export class FindOnePostArgs {
  @Field(() => PostWhereUniqueInput, {
    nullable: true,
  })
  where?: PostWhereUniqueInput;
}
