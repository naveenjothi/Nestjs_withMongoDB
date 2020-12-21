import { Field, InputType } from "@nestjs/graphql";
import { PostListRelationFilter } from "../post/post-list-relation-filter.input";
import { IntFilter } from "../prisma/int-filter.input";
import { StringFilter } from "../prisma/string-filter.input";

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput | Array<UserWhereInput>;

  @Field(() => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput | Array<UserWhereInput>;

  @Field(() => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput | Array<UserWhereInput>;

  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | number;

  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter | string;

  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | string;

  @Field(() => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter;
}
