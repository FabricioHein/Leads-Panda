import { PageLinkService } from 'src/service/pageLink.service';
export declare class PageLinkController {
    private readonly pageLinkService;
    constructor(pageLinkService: PageLinkService);
    getAllPageLink(empresa_configId: any): Promise<any>;
    getNomeLInkExiste(nome_link: any): Promise<any>;
    getPageLinkById(id: any): Promise<any>;
    getPageLinkByNome_link(name: any): Promise<any>;
    deletePageLink(req: any): Promise<any>;
    createPageLink(req: any): Promise<any>;
    atualizarPageLink(req: any): Promise<any>;
}
