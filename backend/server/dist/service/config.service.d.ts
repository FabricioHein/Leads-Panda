import { ConfigRepository } from '../repositories/config.repository';
import { EnumRepository } from 'src/repositories/enum.repository';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
import { ClientesRepository } from 'src/repositories/clientes.repository';
import { TaskRepository } from 'src/repositories/task.repository';
import { ChatRepository } from 'src/repositories/chat.repository';
export declare class ConfigService {
    private configRepository;
    private configClienteRepository;
    private enumRepository;
    private clientesRepository;
    private taskRepository;
    private chatRepository;
    constructor(configRepository: ConfigRepository, configClienteRepository: ConfigClienteRepository, enumRepository: EnumRepository, clientesRepository: ClientesRepository, taskRepository: TaskRepository, chatRepository: ChatRepository);
    getDashboard(empresa_configId: any): Promise<{
        totalCliente: number;
        totalLeads: number;
        totalPotencialNegocioInicial: number | import("@prisma/client/runtime/library").Decimal;
        totalPotencialNegocioFinal: number | import("@prisma/client/runtime/library").Decimal;
        chatAtivos: number;
        naochatsAtivos: number;
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
        currentPlanId: number;
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
