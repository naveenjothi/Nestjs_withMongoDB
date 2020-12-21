import { PostCreateOrConnectWithoutauthorInput } from './post-create-or-connect-withoutauthor.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostScalarWhereInput } from './post-scalar-where.input';
import { PostUpdateManyWithWhereWithoutAuthorInput } from './post-update-many-with-where-without-author.input';
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from './post-update-with-where-unique-without-author.input';
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from './post-upsert-with-where-unique-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
export declare class PostUpdateManyWithoutAuthorInput {
    create?: PostCreateWithoutAuthorInput | Array<PostCreateWithoutAuthorInput>;
    connect?: PostWhereUniqueInput | Array<PostWhereUniqueInput>;
    set?: PostWhereUniqueInput | Array<PostWhereUniqueInput>;
    disconnect?: PostWhereUniqueInput | Array<PostWhereUniqueInput>;
    delete?: PostWhereUniqueInput | Array<PostWhereUniqueInput>;
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: PostScalarWhereInput | Array<PostScalarWhereInput>;
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    connectOrCreate?: PostCreateOrConnectWithoutauthorInput | Array<PostCreateOrConnectWithoutauthorInput>;
}
