import { Post } from '../post/post.model';
export declare class User {
    id: number;
    email: string;
    name?: string;
    posts?: Array<Post>;
}
