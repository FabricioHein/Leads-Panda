import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ConfigClienteRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getCliente(): Promise<{
        id: number;
        logo_link: string;
        cover_link: string;
        nome_empresa: string;
        nome_fantasia: string;
        cnpj_cpf: string;
        telefone: string;
        responsavel: string;
        email: string;
        departamento: string;
        setor: string;
        created_at: Date;
        updated_at: Date;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        cep: string;
        numero: string;
        currentPlanId: number;
    }>;
    getByIdCliente(id: any): Promise<{
        id: number;
        logo_link: string;
        cover_link: string;
        nome_empresa: string;
        nome_fantasia: string;
        cnpj_cpf: string;
        telefone: string;
        responsavel: string;
        email: string;
        departamento: string;
        setor: string;
        created_at: Date;
        updated_at: Date;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        cep: string;
        numero: string;
        currentPlanId: number;
    }>;
    createCliente(data: any): Promise<{
        id: number;
        logo_link: string;
        cover_link: string;
        nome_empresa: string;
        nome_fantasia: string;
        cnpj_cpf: string;
        telefone: string;
        responsavel: string;
        email: string;
        departamento: string;
        setor: string;
        created_at: Date;
        updated_at: Date;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        cep: string;
        numero: string;
        currentPlanId: number;
    }>;
    updateCliente(id: any, data: any): Promise<{
        id: number;
        logo_link: string;
        cover_link: string;
        nome_empresa: string;
        nome_fantasia: string;
        cnpj_cpf: string;
        telefone: string;
        responsavel: string;
        email: string;
        departamento: string;
        setor: string;
        created_at: Date;
        updated_at: Date;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        cep: string;
        numero: string;
        currentPlanId: number;
    }>;
    deleteCliente(id: any): Promise<{
        id: number;
        logo_link: string;
        cover_link: string;
        nome_empresa: string;
        nome_fantasia: string;
        cnpj_cpf: string;
        telefone: string;
        responsavel: string;
        email: string;
        departamento: string;
        setor: string;
        created_at: Date;
        updated_at: Date;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        cep: string;
        numero: string;
        currentPlanId: number;
    }>;
}
