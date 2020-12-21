import { SortOrder } from '../prisma/sort-order.enum';
export declare class PostOrderByInput {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    published?: SortOrder;
    authorId?: SortOrder;
}
