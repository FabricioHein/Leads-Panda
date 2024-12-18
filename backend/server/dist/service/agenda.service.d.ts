import { AgendaRepository } from 'src/repositories/agenda.repository';
import { ClientesRepository } from 'src/repositories/clientes.repository';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
export declare class AgendaService {
    private agenda;
    private clientesRepository;
    private usuarioRepository;
    constructor(agenda: AgendaRepository, clientesRepository: ClientesRepository, usuarioRepository: UsuarioRepository);
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
    getAgendaByDataUsuario(data: any): Promise<any[]>;
    getAvailableTimes(date_day: any, empresa_configId: any, atendimentoId: any): Promise<void>;
    generateTimes(existingTimes: any): any[];
    getAllClienteAngendaUser(data: any): Promise<{
        usuario: {
            id: number;
            nome: string;
            cpf: string;
        };
        works: {
            id: number;
            nome: string;
        }[];
    }>;
    getAllAgendaAtendimentoUsuario(empresa_configId: any): Promise<import("../infra/DTO/agenda-dto").default[]>;
    getAllAgenda(empresa_configId: any): Promise<import("../infra/DTO/agenda-dto").default[]>;
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
