import { InternalServerErrorException } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { User as UserAlais } from "../../../../prisma/generated/type-graphql/user/user.model";
// import { UserSchema as UserAlais } from "../../model/user.model";
import { PrismaService } from "src/user/prisma.service";
import { GetUserQuery } from "../impl/get.user.query";

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(private prisma: PrismaService) {}
  async execute(command: GetUserQuery): Promise<UserAlais> {
    try {
      const result = await this.prisma.user.findUnique({
        where: {
          email: command.data.email,
          id: command.data.id,
        },
      });
      return result;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
