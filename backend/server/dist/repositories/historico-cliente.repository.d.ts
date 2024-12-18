import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class HistoricoClienteRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getHistoricoCliente(): Promise<{
        id: number;
        chave: string;
        valor: string;
        operador: string;
        created_at: Date;
        updated_at: Date;
        empresa_configId: number;
    }>;
    getByIdHistoricoCliente(id: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        operador: string;
        created_at: Date;
        updated_at: Date;
        empresa_configId: number;
    }>;
    createHistoricoCliente(data: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        operador: string;
        created_at: Date;
        updated_at: Date;
        empresa_configId: number;
    }>;
    updateHistoricoCliente(id: any, data: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        operador: string;
        created_at: Date;
        updated_at: Date;
        empresa_configId: number;
    }>;
    deleteHistoricoCliente(id: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        operador: string;
        created_at: Date;
        updated_at: Date;
        empresa_configId: number;
    }>;
}
