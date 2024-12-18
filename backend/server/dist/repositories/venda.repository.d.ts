import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class VendaRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getVendaAll(taskId: any): Promise<{
        id: number;
        valor_total: import("@prisma/client/runtime/library").Decimal;
        status: string;
        empresa_configId: number;
        taskId: number;
        usersId: number;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getByIdVenda(id: any): Promise<{
        id: number;
        valor_total: import("@prisma/client/runtime/library").Decimal;
        status: string;
        empresa_configId: number;
        taskId: number;
        usersId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    createVenda(data: any): Promise<{
        id: number;
        valor_total: import("@prisma/client/runtime/library").Decimal;
        status: string;
        empresa_configId: number;
        taskId: number;
        usersId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    updateVenda(id: any, data: any): Promise<{
        id: number;
        valor_total: import("@prisma/client/runtime/library").Decimal;
        status: string;
        empresa_configId: number;
        taskId: number;
        usersId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteVenda(id: any): Promise<{
        id: number;
        valor_total: import("@prisma/client/runtime/library").Decimal;
        status: string;
        empresa_configId: number;
        taskId: number;
        usersId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    createManyVenda(data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteManyTaskSubSub(id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
