import { ContatosService } from '../service/contatos.service';
export declare class ContatosController {
    private readonly contatoService;
    constructor(contatoService: ContatosService);
    getByIdContatosChat(id: any, req: any): Promise<any>;
    getByIdNumber(number: any, req: any): Promise<any>;
    getByIdName(name: any, req: any): Promise<any>;
    getAllContatos(empresa_configId: any): Promise<any>;
    deleteContatos(req: any): Promise<any>;
    createContatos(req: any): Promise<any>;
    atualizarContatos(req: any): Promise<any>;
}
