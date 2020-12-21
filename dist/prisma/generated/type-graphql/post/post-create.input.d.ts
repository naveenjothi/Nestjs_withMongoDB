import { UserCreateOneWithoutPostsInput } from '../user/user-create-one-without-posts.input';
export declare class PostCreateInput {
    title?: string;
    content?: string;
    published?: boolean;
    author?: UserCreateOneWithoutPostsInput;
}
