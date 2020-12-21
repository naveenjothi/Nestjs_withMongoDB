import { UserCreateOrConnectWithoutpostsInput } from './user-create-or-connect-withoutposts.input';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput;
}
