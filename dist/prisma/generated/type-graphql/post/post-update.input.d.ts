import { UserUpdateOneWithoutPostsInput } from '../user/user-update-one-without-posts.input';
export declare class PostUpdateInput {
    title?: string;
    content?: string;
    published?: boolean;
    author?: UserUpdateOneWithoutPostsInput;
}
