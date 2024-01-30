import { FornecedorService } from '../service/fornecedores.service';
export declare class FornecedorsController {
    private readonly fornecedorService;
    constructor(fornecedorService: FornecedorService);
    getAllFornecedor(): Promise<any>;
    deleteFornecedor(req: any): Promise<any>;
    createFornecedor(req: any): Promise<any>;
    atualizarFornecedor(req: any): Promise<any>;
}
