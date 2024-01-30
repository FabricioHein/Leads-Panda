import { ProjetoService } from '../service/projeto.service';
export declare class ProjetoController {
    private readonly projetoService;
    constructor(projetoService: ProjetoService);
    getAllProjeto(id: any): Promise<any>;
    getAllProjetoById(id: any): Promise<any>;
    deleteProjeto(req: any): Promise<any>;
    createProjeto(req: any): Promise<any>;
    atualizarProjeto(req: any): Promise<any>;
}
