import { ServicoRepository } from 'src/repositories/servicos.repository';
export declare class ServicoService {
    private servicoRepository;
    constructor(servicoRepository: ServicoRepository);
    atualizarServico(data: any): Promise<{
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
    getAllServico(): Promise<{
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
    deleteServico(data: any): Promise<{
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
