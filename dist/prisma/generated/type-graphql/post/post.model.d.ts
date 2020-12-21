import { User } from '../user/user.model';
export declare class Post {
    id: number;
    title: string;
    content?: string;
    published?: boolean;
    author?: User;
    readonly authorId?: number;
}
