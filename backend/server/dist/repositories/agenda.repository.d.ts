import { PrismaService } from 'src/base/relacional/PrismaService';
import AgendaRetornoModel from 'src/infra/DTO/agenda-dto';
export declare class AgendaRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAgendaByDataUsuario(atendimentoId: any, date: any): Promise<AgendaRetornoModel[]>;
    getAgendaAll(empresa_configId: any): Promise<AgendaRetornoModel[]>;
    getByIdAgenda(id: any): Promise<{
        id: number;
        title: string;
        description: string;
        className: string;
        status: string;
        date_start: Date;
        date_end: Date;
        created_at: Date;
        updated_at: Date;
    }>;
    crearAgendamentoExterno(data: any): Promise<{
        id: number;
        title: string;
        description: string;
        className: string;
        status: string;
        date_start: Date;
        date_end: Date;
        created_at: Date;
        updated_at: Date;
    }>;
    createAgenda(data: any): Promise<{
        id: number;
        title: string;
        description: string;
        className: string;
        status: string;
        date_start: Date;
        date_end: Date;
        created_at: Date;
        updated_at: Date;
    }>;
    updateAgenda(id: any, data: any): Promise<{
        Users: {
            id: number;
            userId: number;
            agendaId: number;
        }[];
    } & {
        id: number;
        title: string;
        description: string;
        className: string;
        status: string;
        date_start: Date;
        date_end: Date;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteAgenda(id: any): Promise<{
        id: number;
        title: string;
        description: string;
        className: string;
        status: string;
        date_start: Date;
        date_end: Date;
        created_at: Date;
        updated_at: Date;
    }>;
    createManyAgenda(data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteManyTaskSubSub(id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
