import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class SubModulosPermissaoRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createManySubModulosUsuario(data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteManySubModulosUsuario(id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
