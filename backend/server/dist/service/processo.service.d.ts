import { ProcessoRepository } from 'src/repositories/processo.repository';
import { TaskRepository } from 'src/repositories/task.repository';
export declare class ProcessoService {
    private processoRepository;
    private taskRepository;
    constructor(processoRepository: ProcessoRepository, taskRepository: TaskRepository);
    atualizarProcesso(data: any): Promise<{
        id: number;
        title: string;
        color: string;
        etapa: number;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        operador: string;
    }>;
    getAllProcesso(id: any): Promise<{
        task: {
            id: number;
            contato_nome: string;
            contato_numero: string;
            title: string;
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
    deleteProcesso(data: any): Promise<{
        id: number;
        title: string;
        color: string;
        etapa: number;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        operador: string;
    }>;
}
