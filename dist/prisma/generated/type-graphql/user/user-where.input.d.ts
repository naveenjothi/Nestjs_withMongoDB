import { PostListRelationFilter } from "../post/post-list-relation-filter.input";
import { IntFilter } from "../prisma/int-filter.input";
import { StringFilter } from "../prisma/string-filter.input";
export declare class UserWhereInput {
    AND?: UserWhereInput | Array<UserWhereInput>;
    OR?: UserWhereInput | Array<UserWhereInput>;
    NOT?: UserWhereInput | Array<UserWhereInput>;
    id?: IntFilter | number;
    email?: StringFilter | string;
    name?: StringFilter | string;
    posts?: PostListRelationFilter;
}
