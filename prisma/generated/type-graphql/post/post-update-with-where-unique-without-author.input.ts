import { Field, InputType } from '@nestjs/graphql';
import { PostUpdateWithoutAuthorInput } from './post-update-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => PostWhereUniqueInput, {
            nullable: true,
        })
    where?: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutAuthorInput, {
            nullable: true,
        })
    data?: PostUpdateWithoutAuthorInput;
}
