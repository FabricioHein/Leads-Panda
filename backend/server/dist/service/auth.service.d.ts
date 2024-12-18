import { ConfigService } from 'src/service/config.service';
import { JwtService } from '@nestjs/jwt';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
export declare class AuthService {
    private usuarioRepository;
    private configService;
    private jwtService;
    constructor(usuarioRepository: UsuarioRepository, configService: ConfigService, jwtService: JwtService);
    getGoogleCalendarEvents(accessToken: string): Promise<any>;
    validateUser(username: string, pass: string): Promise<any>;
    validarTokenGoogle(token: string): Promise<boolean>;
    validaEmail(uuid: any): Promise<{
        msg: string;
        status: number;
    }>;
    loginAcessoGoogle(data: any): Promise<{
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
    } | {
        msg: string;
        status: number;
    }>;
    loginAcesso(data: any): Promise<{
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
    } | {
        msg: string;
        status: number;
    }>;
}
