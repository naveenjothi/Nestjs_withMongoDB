import { PostOrderByInput } from './post-order-by.input';
import { PostScalarFieldEnum } from './post-scalar-field.enum';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostWhereInput } from './post-where.input';
export declare class FindManyPostArgs {
    where?: PostWhereInput;
    orderBy?: Array<PostOrderByInput> | PostOrderByInput;
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<PostScalarFieldEnum>;
}
