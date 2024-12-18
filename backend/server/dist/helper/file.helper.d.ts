/// <reference types="node" />
export declare class FileHelper {
    static bufferToStream(binary: any): any;
    static base64ToBuffer(fileBase64: any): Buffer;
    static gravarFileStorage(bufferFile: any, empresa_configId: any, path: any): Promise<{
        message: string;
        name: string;
        type: string;
        downloadURL: string;
    }>;
    static salvarArquivoTemp(data: any, nome: any): any;
    static salvarBufferTemp(data: any, nome: any): any;
    static convertCsvToJson(file: any, separator: any, hasHeader: any): {
        headers: any[];
        registros: any[];
        json: {}[];
    };
}
