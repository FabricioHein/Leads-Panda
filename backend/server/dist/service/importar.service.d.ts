export declare class ImportarService {
    constructor();
    importarArquivo(file: any, id: any): Promise<{
        message: string;
        name: string;
        type: string;
        downloadURL: string;
    }>;
    importarDados(params: any, req: any): Promise<string>;
}
