import { ProdutoService } from '../service/produtos.service';
export declare class ProdutosController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    getAllProduto(empresa_configId: any): Promise<any>;
    deleteProduto(req: any): Promise<any>;
    imageProduto(req: any): Promise<any>;
    createProduto(req: any): Promise<any>;
    atualizarProduto(req: any): Promise<any>;
}
