import { Field, InputType } from "@nestjs/graphql";
import { BooleanFilter } from "../prisma/boolean-filter.input";
import { IntFilter } from "../prisma/int-filter.input";
import { StringFilter } from "../prisma/string-filter.input";

@InputType()
export class PostScalarWhereInput {
  @Field(() => [PostScalarWhereInput], {
    nullable: true,
  })
  AND?: PostScalarWhereInput | Array<PostScalarWhereInput>;

  @Field(() => [PostScalarWhereInput], {
    nullable: true,
  })
  OR?: PostScalarWhereInput | Array<PostScalarWhereInput>;

  @Field(() => [PostScalarWhereInput], {
    nullable: true,
  })
  NOT?: PostScalarWhereInput | Array<PostScalarWhereInput>;

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

  @Field(() => IntFilter, {
    nullable: true,
  })
  authorId?: IntFilter | number;
}
