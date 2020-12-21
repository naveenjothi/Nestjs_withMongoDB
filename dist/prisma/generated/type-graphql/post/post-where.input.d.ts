import { BooleanFilter } from "../prisma/boolean-filter.input";
import { IntFilter } from "../prisma/int-filter.input";
import { StringFilter } from "../prisma/string-filter.input";
import { UserRelationFilter } from "../user/user-relation-filter.input";
import { UserWhereInput } from "../user/user-where.input";
export declare class PostWhereInput {
    AND?: PostWhereInput | Array<PostWhereInput>;
    OR?: PostWhereInput | Array<PostWhereInput>;
    NOT?: PostWhereInput | Array<PostWhereInput>;
    id?: IntFilter | number;
    title?: StringFilter | string;
    content?: StringFilter | string;
    published?: BooleanFilter | boolean;
    author?: UserRelationFilter | UserWhereInput;
    authorId?: IntFilter | number;
}
