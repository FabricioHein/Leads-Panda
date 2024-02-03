import { AuthenticatorService } from '../service/authenticator.service';
import { UsuariosService } from '../service/usuarios.service';
export declare class AuthenticatorController {
    private readonly authenticatorService;
    private readonly usuariosService;
    constructor(authenticatorService: AuthenticatorService, usuariosService: UsuariosService);
    criarNovoCliente(req: any): Promise<any>;
    novaSenhaUsuarioEmail(email: any): Promise<any>;
    validaTokenSenha(code: any): Promise<any>;
}
