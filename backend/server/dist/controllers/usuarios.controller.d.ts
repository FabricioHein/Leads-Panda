import { UsuariosService } from '../service/usuarios.service';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    criarNovoCliente(req: any): Promise<any>;
    getAllUsuario(empresa_configId: any): Promise<any>;
    novaSenhaUsuarioEmail(email: any): Promise<any>;
    deleteUsuario(req: any): Promise<any>;
    salvarFotoPerfil(req: any): Promise<any>;
    atualizarPermissaoModulos(req: any): Promise<any>;
    createUsuario(req: any): Promise<any>;
    atualizarUsuario(req: any): Promise<any>;
}
