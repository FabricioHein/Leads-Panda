import { ConfigRepository } from '../repositories/config.repository';
import { EnumRepository } from 'src/repositories/enum.repository';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
export declare class ConfigService {
    private configRepository;
    private configClienteRepository;
    private enumRepository;
    constructor(configRepository: ConfigRepository, configClienteRepository: ConfigClienteRepository, enumRepository: EnumRepository);
    getDashboard(clienteId: any): Promise<{
        totalContatos: number;
        totalCliente: number;
        totalProdutos: number;
        totalLeads: number;
        tarefas: {
            abertas: number;
            pendentes: number;
            concluidas: number;
        };
        totalPotencialNegocio: number;
        totalNegocioAberto: number;
        totalNegocioPendentes: number;
        ultimasVendas: {
            id: number;
            valor: number;
            title: string;
        }[];
    }>;
    atualizarConfig(data: any): Promise<{
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
    }>;
    getConfig(id: Number, token: string): Promise<{
        token: string;
        usuario: any;
        sistema: {
            permissao: any[];
            modulos: ({
                subModulo: {
                    id: number;
                    nome: string;
                    url: string;
                    ativo: boolean;
                    icon: string;
                    ordem: number;
                    moduloId: number;
                    created_at: Date;
                    updated_at: Date;
                }[];
            } & {
                id: number;
                nome: string;
                url: string;
                ativo: boolean;
                ordem: number;
                icon: string;
                created_at: Date;
                updated_at: Date;
            })[];
            enum: {
                opcao: {
                    id: number;
                    descricao: string;
                    Opcao: boolean;
                    created_at: Date;
                    updated_at: Date;
                }[];
                sexo: {
                    id: number;
                    descricao: string;
                    created_at: Date;
                    updated_at: Date;
                }[];
                tipoUsuario: {
                    id: number;
                    descricao: string;
                    created_at: Date;
                    updated_at: Date;
                }[];
            };
        };
        cliente: any;
        erro?: undefined;
    } | {
        erro: string;
        token?: undefined;
        usuario?: undefined;
        sistema?: undefined;
        cliente?: undefined;
    }>;
}
