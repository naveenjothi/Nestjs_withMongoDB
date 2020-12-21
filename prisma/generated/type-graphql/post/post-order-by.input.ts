import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PostOrderByInput {

    @Field(() => SortOrder, {
            nullable: true,
        })
    id?: SortOrder;

    @Field(() => SortOrder, {
            nullable: true,
        })
    title?: SortOrder;

    @Field(() => SortOrder, {
            nullable: true,
        })
    content?: SortOrder;

    @Field(() => SortOrder, {
            nullable: true,
        })
    published?: SortOrder;

    @Field(() => SortOrder, {
            nullable: true,
        })
    authorId?: SortOrder;
}
