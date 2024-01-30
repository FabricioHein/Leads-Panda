import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class AnotacaoRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAnotacaoAll(taskId: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }[]>;
    getByIdAnotacao(id: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    createAnotacao(data: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    updateAnotacao(id: any, data: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    deleteAnotacao(id: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    createManyAnotacao(data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteManyTaskSubSub(id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
