import { ServicoService } from '../service/servicos.service';
export declare class ServicoController {
    private readonly servicoService;
    constructor(servicoService: ServicoService);
    getAllProduto(): Promise<any>;
    deleteProduto(req: any): Promise<any>;
    createProduto(req: any): Promise<any>;
    atualizarProduto(req: any): Promise<any>;
}
