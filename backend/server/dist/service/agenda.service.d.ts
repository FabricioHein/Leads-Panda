import { AgendaRepository } from 'src/repositories/agenda.repository';
export declare class AgendaService {
    private agenda;
    constructor(agenda: AgendaRepository);
    atualizarAgenda(data: any): Promise<{
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
    getAllAgenda(id: any): Promise<import("../infra/DTO/agenda-dto").default[]>;
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
    deleteAgenda(data: any): Promise<{
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
}
