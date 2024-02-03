import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ProcessoRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getProcessoAll(id: any): Promise<{
        task: {
            id: number;
            contato_nome: string;
            contato_numero: string;
            title: string;
            cpf: string;
            description: string;
            processoId: number;
            valor_Inicial: import("@prisma/client/runtime/library").Decimal;
            valor_Final: import("@prisma/client/runtime/library").Decimal;
            marcar_venda: boolean;
            desconto: import("@prisma/client/runtime/library").Decimal;
            previsao_fechamento: Date;
            status: string;
            emailId: number;
            anotacoesId: number;
            contactsId: number;
            usersId: number;
            operador: string;
            created_at: Date;
            updated_at: Date;
            metasId: number;
            vendaId: number;
            empresa: string;
            motivosId: number;
            produtoId: number;
            arquivado: boolean;
        }[];
        id: number;
        title: string;
        color: string;
        etapa: number;
    }[]>;
    getByIdProcesso(id: any): Promise<{
        id: number;
        title: string;
        color: string;
        etapa: number;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        operador: string;
    }>;
    createProcesso(data: any): Promise<{
        id: number;
        title: string;
        color: string;
        etapa: number;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        operador: string;
    }>;
    updateProcesso(id: any, data: any): Promise<{
        id: number;
        title: string;
        color: string;
        etapa: number;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        operador: string;
    }>;
    deleteProcesso(id: any): Promise<{
        id: number;
        title: string;
        color: string;
        etapa: number;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        operador: string;
    }>;
    createManyProcesso(data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteManyProcesso(id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
