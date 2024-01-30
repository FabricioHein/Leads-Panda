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
        created_at: Date;
        updated_at: Date;
        operador: string;
        clienteId: number;
    }[]>;
    getByIdServico(id: any): Promise<{
        id: number;
        codigo: string;
        nome: string;
        detalhamento: string;
        valor_hora: import("@prisma/client/runtime/library").Decimal;
        ativo: boolean;
        created_at: Date;
        updated_at: Date;
        operador: string;
        clienteId: number;
    }>;
    createServico(data: any): Promise<{
        id: number;
        codigo: string;
        nome: string;
        detalhamento: string;
        valor_hora: import("@prisma/client/runtime/library").Decimal;
        ativo: boolean;
        created_at: Date;
        updated_at: Date;
        operador: string;
        clienteId: number;
    }>;
    updateServico(id: any, data: any): Promise<{
        id: number;
        codigo: string;
        nome: string;
        detalhamento: string;
        valor_hora: import("@prisma/client/runtime/library").Decimal;
        ativo: boolean;
        created_at: Date;
        updated_at: Date;
        operador: string;
        clienteId: number;
    }>;
    deleteServico(id: any): Promise<{
        id: number;
        codigo: string;
        nome: string;
        detalhamento: string;
        valor_hora: import("@prisma/client/runtime/library").Decimal;
        ativo: boolean;
        created_at: Date;
        updated_at: Date;
        operador: string;
        clienteId: number;
    }>;
}
