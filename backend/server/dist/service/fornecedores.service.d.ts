import { FornecedorRepository } from 'src/repositories/fornecedor.repository';
export declare class FornecedorService {
    private fornecedorRepositorio;
    constructor(fornecedorRepositorio: FornecedorRepository);
    atualizarFornecedor(data: any): Promise<{
        id: number;
        link_img: string;
        nome_responsavel: string;
        email: string;
        empresa: string;
        cnpj: string;
        telefone: string;
        celular: string;
        foto: string;
        ativo: boolean;
        created_at: Date;
        updated_at: Date;
        operador: string;
        empresa_configId: number;
    }>;
    getAllFornecedor(): Promise<{
        id: number;
        link_img: string;
        nome_responsavel: string;
        email: string;
        empresa: string;
        cnpj: string;
        telefone: string;
        celular: string;
        foto: string;
        ativo: boolean;
        created_at: Date;
        updated_at: Date;
        operador: string;
        empresa_configId: number;
    }[]>;
    createFornecedor(data: any): Promise<{
        id: number;
        link_img: string;
        nome_responsavel: string;
        email: string;
        empresa: string;
        cnpj: string;
        telefone: string;
        celular: string;
        foto: string;
        ativo: boolean;
        created_at: Date;
        updated_at: Date;
        operador: string;
        empresa_configId: number;
    }>;
    deleteFornecedor(data: any): Promise<{
        id: number;
        link_img: string;
        nome_responsavel: string;
        email: string;
        empresa: string;
        cnpj: string;
        telefone: string;
        celular: string;
        foto: string;
        ativo: boolean;
        created_at: Date;
        updated_at: Date;
        operador: string;
        empresa_configId: number;
    }>;
}
