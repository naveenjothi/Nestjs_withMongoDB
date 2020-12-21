import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input';
export declare class UserUpdateInput {
    email?: string;
    name?: string;
    posts?: PostUpdateManyWithoutAuthorInput;
}
