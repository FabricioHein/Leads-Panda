import { ConfigService } from '../service/config.service';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    atualizarConfig(req: any): Promise<{
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
    getDashboard(empresa_configId: any): Promise<any>;
}
