import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ServicoRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getServicoAll(): Promise<{
        id: number;
        codigo: string;
        nome: string;
        detalhamento: string;
        valor_hora: import("@prisma/client/runtime/library").Decimal;
        ativo: boolean;
        operador: string;
        empresa_configId: number;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getByIdServico(id: any): Promise<{
        id: number;
        codigo: string;
        nome: string;
        detalhamento: string;
        valor_hora: import("@prisma/client/runtime/library").Decimal;
        ativo: boolean;
        operador: string;
        empresa_configId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    createServico(data: any): Promise<{
        id: number;
        codigo: string;
        nome: string;
        detalhamento: string;
        valor_hora: import("@prisma/client/runtime/library").Decimal;
        ativo: boolean;
        operador: string;
        empresa_configId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    updateServico(id: any, data: any): Promise<{
        id: number;
        codigo: string;
        nome: string;
        detalhamento: string;
        valor_hora: import("@prisma/client/runtime/library").Decimal;
        ativo: boolean;
        operador: string;
        empresa_configId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteServico(id: any): Promise<{
        id: number;
        codigo: string;
        nome: string;
        detalhamento: string;
        valor_hora: import("@prisma/client/runtime/library").Decimal;
        ativo: boolean;
        operador: string;
        empresa_configId: number;
        created_at: Date;
        updated_at: Date;
    }>;
}
