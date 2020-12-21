import { UserWhereUniqueInput } from "../../../../prisma/generated/type-graphql/user/user-where-unique.input";

export class GetUserQuery {
  constructor(
    public readonly data: UserWhereUniqueInput,
    public readonly ctx: string | any
  ) {}
}
