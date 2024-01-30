import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class LogTasksRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getLogTasksAll(taskId: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }[]>;
    getByIdLogTasks(id: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    createLogTasks(data: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    updateLogTasks(id: any, data: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    deleteLogTasks(id: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    createManyLogTasks(data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteManyTaskSubSub(id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
