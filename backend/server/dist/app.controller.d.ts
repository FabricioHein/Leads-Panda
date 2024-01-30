import { AuthService } from './service/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
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
