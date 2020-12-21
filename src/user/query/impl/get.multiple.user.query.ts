import { UserWhereInput } from "../../../../prisma/generated/type-graphql/user/user-where.input";

export class GetMultipleUserQuery {
  constructor(
    public readonly data: UserWhereInput,
    public readonly ctx: string | any
  ) {}
}
