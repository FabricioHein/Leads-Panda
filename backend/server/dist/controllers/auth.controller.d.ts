import { UsuariosService } from '../service/usuarios.service';
import { AuthService } from '../service/auth.service';
export declare class AuthController {
    private readonly usuariosService;
    private readonly authService;
    constructor(usuariosService: UsuariosService, authService: AuthService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any, res: any): Promise<void>;
    getCurrentUser(req: any): Promise<{
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
    logout(req: any, res: any): void;
}
