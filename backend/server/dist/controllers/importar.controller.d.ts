import { ImportarService } from '../service/importar.service';
export declare class ImportarController {
    private readonly importarService;
    constructor(importarService: ImportarService);
    uploadFile(file: any, id: any): Promise<{
        message: string;
        name: string;
        type: string;
        downloadURL: string;
    }>;
    importarDados(tabela: any, req: any): Promise<any>;
}
