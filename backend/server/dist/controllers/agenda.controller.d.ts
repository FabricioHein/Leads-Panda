import { AgendaService } from '../service/agenda.service';
export declare class AgendaController {
    private readonly agendaService;
    constructor(agendaService: AgendaService);
    getAgendaByDataUsuario(req: any): Promise<any>;
    crearAgendamentoExterno(req: any): Promise<any>;
    getAllClienteAngendaUser(req: any): Promise<any>;
    getAllagenda(id: any): Promise<any>;
    getAllagendaById(id: any): Promise<any>;
    deleteagenda(req: any): Promise<any>;
    createagenda(req: any): Promise<any>;
    atualizarAgenda(req: any): Promise<any>;
}
