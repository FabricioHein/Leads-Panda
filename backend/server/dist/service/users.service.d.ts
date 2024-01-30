import { PrismaService } from 'src/base/relacional/PrismaService';
export type User = any;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(username: string): Promise<User | undefined>;
}
