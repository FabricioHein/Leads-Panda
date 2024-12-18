import { FormularioDinamicoRepository } from 'src/repositories/formulario-dinamico.repository';
import { FormularioAskRepository } from 'src/repositories/formulario-ask.repository';
import { TaskRepository } from 'src/repositories/task.repository';
export declare class FormularioService {
    private taskRepository;
    private formularioDinamicoRepository;
    private formularioAskRepository;
    constructor(taskRepository: TaskRepository, formularioDinamicoRepository: FormularioDinamicoRepository, formularioAskRepository: FormularioAskRepository);
    atualizarFormularioDinamico(data: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
    getAllFormularioDinamico(empresa_configId: any): Promise<({
        form_ask: {
            id: number;
            formulario_dinamicoId: number;
            json: import("@prisma/client/runtime/library").JsonValue;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    })[]>;
    createFormularioDinamico(data: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
    deleteFormularioDinamico(data: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
    updateFormularioAsk(data: any): Promise<{
        id: number;
        formulario_dinamicoId: number;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
    }>;
    getByURLFormularioDinamico(url: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
    getByURLFormularioDinamicoOpen(url: any): Promise<{
        form: boolean;
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    } | {
        form: boolean;
    }>;
    getByIdFormularioAsk(empresa_configId: any): Promise<{
        id: number;
        formulario_dinamicoId: number;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
    }>;
    createFormularioAsk(data: any): Promise<{
        id: number;
        formulario_dinamicoId: number;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteFormularioAsk(data: any): Promise<{
        id: number;
        formulario_dinamicoId: number;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
    }>;
}
