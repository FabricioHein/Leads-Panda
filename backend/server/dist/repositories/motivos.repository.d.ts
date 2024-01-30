import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class MotivosRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getMotivosAll(clienteId: any): Promise<{
        id: number;
        descricao: string;
        configuracaoClienteId: number;
        codigo: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getByIdMotivos(id: any): Promise<{
        id: number;
        descricao: string;
        configuracaoClienteId: number;
        codigo: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
    }>;
    createMotivos(data: any): Promise<{
        id: number;
        descricao: string;
        configuracaoClienteId: number;
        codigo: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
    }>;
    updateMotivos(id: any, data: any): Promise<{
        id: number;
        descricao: string;
        configuracaoClienteId: number;
        codigo: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteMotivos(id: any): Promise<{
        id: number;
        descricao: string;
        configuracaoClienteId: number;
        codigo: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
    }>;
    createManyMotivos(data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteManyMotivosProcesso(id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
