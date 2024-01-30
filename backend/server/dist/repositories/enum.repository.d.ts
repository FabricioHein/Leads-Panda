import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class EnumRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getSexo(): Promise<{
        id: number;
        descricao: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getOpcao(): Promise<{
        id: number;
        descricao: string;
        Opcao: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getUsuario(): Promise<{
        id: number;
        descricao: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getProcessosCrmLista(): Promise<{
        id: number;
        title: string;
        color: string;
        etapa: number;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        operador: string;
    }[]>;
}
