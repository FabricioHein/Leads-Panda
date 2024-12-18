import { ProjetoRepository } from 'src/repositories/projeto.repository';
import { TaskRepository } from 'src/repositories/task.repository';
export declare class ProjetoService {
    private projetoRepository;
    private taskRepository;
    constructor(projetoRepository: ProjetoRepository, taskRepository: TaskRepository);
    atualizarProjeto(data: any): Promise<{
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        empresa_configId: number;
    }>;
    getAllProjeto(id: any): Promise<{
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        empresa_configId: number;
    }[]>;
    getAllProjetoById(id: any): Promise<{
        processo: {
            id: number;
            title: string;
        }[];
    } & {
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        empresa_configId: number;
    }>;
    createProjeto(data: any): Promise<{
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        empresa_configId: number;
    }>;
    deleteProjeto(data: any): Promise<{
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        empresa_configId: number;
    }>;
}
