import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/base/relacional/PrismaService';
import { ErroBadRequest } from 'src/utils/msg.response';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            nome: username,
          },
          {
            email: username,
          },
        ],
      },
    });

    if (user) return user;
  }
}
