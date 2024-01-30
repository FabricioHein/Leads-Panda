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
        created_at: Date;
        updated_at: Date;
        operador: string;
        clienteId: number;
    }>;
    getAllServico(): Promise<{
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
    deleteServico(data: any): Promise<{
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
