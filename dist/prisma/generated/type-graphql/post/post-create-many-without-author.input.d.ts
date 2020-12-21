import { PostCreateOrConnectWithoutauthorInput } from './post-create-or-connect-withoutauthor.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
export declare class PostCreateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput | Array<PostCreateWithoutAuthorInput>;
    connect?: PostWhereUniqueInput | Array<PostWhereUniqueInput>;
    connectOrCreate?: PostCreateOrConnectWithoutauthorInput | Array<PostCreateOrConnectWithoutauthorInput>;
}
