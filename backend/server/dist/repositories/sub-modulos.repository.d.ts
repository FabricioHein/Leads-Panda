import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class SubModulosRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAllSubModulos(): Promise<{
        id: number;
        nome: string;
        url: string;
        ativo: boolean;
        icon: string;
        ordem: number;
        moduloId: number;
        created_at: Date;
        updated_at: Date;
    }[]>;
}
