import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ModulosRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAllModulos(): Promise<{
        id: number;
        nome: string;
        url: string;
        ativo: boolean;
        ordem: number;
        icon: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
}
