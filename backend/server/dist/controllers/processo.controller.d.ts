import { ProcessoService } from '../service/processo.service';
export declare class ProcessoController {
    private readonly processoService;
    constructor(processoService: ProcessoService);
    getAllProcesso(id: any, req: any): Promise<any>;
    deleteProcesso(req: any): Promise<any>;
    createProcesso(req: any): Promise<any>;
    atualizarProcesso(req: any): Promise<any>;
}
