import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ModulosPermissaoRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createManyModulosUsuario(data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteManyModulosUsuario(id: any): Promise<import(".prisma/client").Prisma.BatchPayload | "usuario sem id">;
}
