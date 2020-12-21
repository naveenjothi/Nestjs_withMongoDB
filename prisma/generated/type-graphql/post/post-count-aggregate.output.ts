import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PostCountAggregate {
  @Field(() => Int, {
    nullable: true,
  })
  id?: number;

  @Field(() => Int, {
    nullable: true,
  })
  title?: number;

  @Field(() => Int, {
    nullable: true,
  })
  content?: number;

  @Field(() => Int, {
    nullable: true,
  })
  published?: number;

  @Field(() => Int, {
    nullable: true,
  })
  authorId?: number;

  @Field(() => Int, {
    nullable: true,
  })
  _all?: number;
}
