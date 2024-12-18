import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class FormularioAskRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getFormularioAskAll(formulario_dinamicoId: any): Promise<{
        id: number;
        formulario_dinamicoId: number;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getByIdFormularioAsk(id: any): Promise<{
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
    updateFormularioAsk(id: any, data: any): Promise<{
        id: number;
        formulario_dinamicoId: number;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteFormularioAsk(id: any): Promise<{
        id: number;
        formulario_dinamicoId: number;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
    }>;
}
