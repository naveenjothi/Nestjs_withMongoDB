import { Field, InputType } from "@nestjs/graphql";
import { BooleanFilter } from "../prisma/boolean-filter.input";
import { IntFilter } from "../prisma/int-filter.input";
import { StringFilter } from "../prisma/string-filter.input";
import { UserRelationFilter } from "../user/user-relation-filter.input";
import { UserWhereInput } from "../user/user-where.input";

@InputType()
export class PostWhereInput {
  @Field(() => [PostWhereInput], {
    nullable: true,
  })
  AND?: PostWhereInput | Array<PostWhereInput>;

  @Field(() => [PostWhereInput], {
    nullable: true,
  })
  OR?: PostWhereInput | Array<PostWhereInput>;

  @Field(() => [PostWhereInput], {
    nullable: true,
  })
  NOT?: PostWhereInput | Array<PostWhereInput>;

  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | number;

  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter | string;

  @Field(() => StringFilter, {
    nullable: true,
  })
  content?: StringFilter | string;

  @Field(() => BooleanFilter, {
    nullable: true,
  })
  published?: BooleanFilter | boolean;

  @Field(() => UserWhereInput, {
    nullable: true,
  })
  author?: UserRelationFilter | UserWhereInput;

  @Field(() => IntFilter, {
    nullable: true,
  })
  authorId?: IntFilter | number;
}
