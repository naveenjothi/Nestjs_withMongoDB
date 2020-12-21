import { PostCreateManyWithoutAuthorInput } from "../post/post-create-many-without-author.input";
export declare class UserCreateInput {
    email?: string;
    name?: string;
    posts?: PostCreateManyWithoutAuthorInput;
}
