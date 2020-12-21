import { Field, InputType } from '@nestjs/graphql';
import { PostCreateOrConnectWithoutauthorInput } from './post-create-or-connect-withoutauthor.input';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { PostScalarWhereInput } from './post-scalar-where.input';
import { PostUpdateManyWithWhereWithoutAuthorInput } from './post-update-many-with-where-without-author.input';
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from './post-update-with-where-unique-without-author.input';
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from './post-upsert-with-where-unique-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUpdateManyWithoutAuthorInput {

    @Field(() => [PostCreateWithoutAuthorInput], {
            nullable: true,
        })
    create?: PostCreateWithoutAuthorInput | Array<PostCreateWithoutAuthorInput>;

    @Field(() => [PostWhereUniqueInput], {
            nullable: true,
        })
    connect?: PostWhereUniqueInput | Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {
            nullable: true,
        })
    set?: PostWhereUniqueInput | Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {
            nullable: true,
        })
    disconnect?: PostWhereUniqueInput | Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {
            nullable: true,
        })
    delete?: PostWhereUniqueInput | Array<PostWhereUniqueInput>;

    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {
            nullable: true,
        })
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {
            nullable: true,
        })
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | Array<PostUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [PostScalarWhereInput], {
            nullable: true,
        })
    deleteMany?: PostScalarWhereInput | Array<PostScalarWhereInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {
            nullable: true,
        })
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [PostCreateOrConnectWithoutauthorInput], {
            nullable: true,
        })
    connectOrCreate?: PostCreateOrConnectWithoutauthorInput | Array<PostCreateOrConnectWithoutauthorInput>;
}
