import { InternalServerErrorException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { User as UserAlais } from "../../../../prisma/generated/type-graphql/user/user.model";
import { PrismaService } from "src/user/prisma.service";
import { CreateUserCommand } from "../impl/create.user.command";

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand> {
  constructor(private prisma: PrismaService) {}
  async execute(command: CreateUserCommand): Promise<UserAlais> {
    try {
      const values = {
        ...command.data,
      };
      const result = await this.prisma.user.create({
        data: {
          email: values.email,
          name: values.name,
        },
      });
      return result;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
