import { UserCreateOrConnectWithoutpostsInput } from './user-create-or-connect-withoutposts.input';
import { UserCreateWithoutPostsInput } from './user-create-without-posts.input';
import { UserUpdateWithoutPostsInput } from './user-update-without-posts.input';
import { UserUpsertWithoutPostsInput } from './user-upsert-without-posts.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserUpdateOneWithoutPostsInput {
    create?: UserCreateWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: UserUpdateWithoutPostsInput;
    upsert?: UserUpsertWithoutPostsInput;
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput;
}
