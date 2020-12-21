import { Field, Float, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PostAvgAggregate {
  @Field(() => Float, {
    nullable: true,
  })
  id?: number;

  @Field(() => Float, {
    nullable: true,
  })
  authorId?: number;
}
