import { BooleanFilter } from '../prisma/boolean-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
export declare class PostScalarWhereInput {
    AND?: PostScalarWhereInput | Array<PostScalarWhereInput>;
    OR?: PostScalarWhereInput | Array<PostScalarWhereInput>;
    NOT?: PostScalarWhereInput | Array<PostScalarWhereInput>;
    id?: IntFilter | number;
    title?: StringFilter | string;
    content?: StringFilter | string;
    published?: BooleanFilter | boolean;
    authorId?: IntFilter | number;
}
