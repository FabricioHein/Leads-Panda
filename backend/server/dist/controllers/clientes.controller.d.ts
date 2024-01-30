import { ClientesService } from '../service/clientes.service';
export declare class ClientesController {
    private readonly clienteService;
    constructor(clienteService: ClientesService);
    getAllClientes(clienteId: any): Promise<any>;
    deleteClientes(req: any): Promise<any>;
    createClientes(req: any): Promise<any>;
    createHistoricoClientes(req: any): Promise<any>;
    atualizarClientes(req: any): Promise<any>;
}
