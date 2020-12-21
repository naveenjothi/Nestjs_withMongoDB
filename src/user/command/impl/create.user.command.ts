import { UserCreateInput } from "../../../../prisma/generated/type-graphql/user/user-create.input";

export class CreateUserCommand {
  constructor(
    public readonly data: UserCreateInput,
    public readonly ctx: string | any
  ) {}
}
