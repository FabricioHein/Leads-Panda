import { ModulosPermissaoRepository } from 'src/repositories/modulos-permissao.repository';
import { SubModulosPermissaoRepository } from 'src/repositories/sub-modulos-permissao.repository';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { FirebaseService } from './firebase.service';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
import { SubModulosRepository } from 'src/repositories/sub-modulos.repository';
import { ModulosRepository } from 'src/repositories/modulos.repository';
import { SendgridService } from 'src/mail/sendgrid/sendgrid.service';
export declare class UsuariosService {
    private mailService;
    private usuarioRepositorio;
    private modulosPermissaoRepository;
    private subModulosPermissaoRepository;
    private firebaseService;
    private configClienteRepository;
    private subModulosRepository;
    private modulosRepository;
    constructor(mailService: SendgridService, usuarioRepositorio: UsuarioRepository, modulosPermissaoRepository: ModulosPermissaoRepository, subModulosPermissaoRepository: SubModulosPermissaoRepository, firebaseService: FirebaseService, configClienteRepository: ConfigClienteRepository, subModulosRepository: SubModulosRepository, modulosRepository: ModulosRepository);
    forgotPassword(email: any): Promise<{
        msg: string;
        status: boolean;
        linkToLoginPage?: undefined;
    } | {
        msg: string;
        linkToLoginPage: string;
        status: boolean;
    }>;
    recoverPassword(password: string, token: string): Promise<boolean>;
    sendWelcomeEmail(newUser: any): Promise<boolean>;
    verifyTokenRecoverPassword(token: string): Promise<boolean>;
    novaSenhaUsuarioEmail(email: any): Promise<any>;
    createUsuarioCliente(data: any): Promise<true | {
        msg: string;
        status: boolean;
    }>;
    atualizarUsuario(data: any): Promise<{
        id: number;
        nome: string;
        sobrenome: string;
        empresa: string;
        cpf: string;
        telefone: string;
        linkFoto: string;
        isAdmin: boolean;
        themeDark: boolean;
        operador: string;
        sexoId: number;
        clienteId: number;
        email: string;
        profile: string;
        created_at: Date;
        updated_at: Date;
        last_login: Date;
        verifiedAt: Date;
        timesId: number;
        cep: string;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        primeiro_acesso: boolean;
        gerente_conta: boolean;
        termos: boolean;
        password: string;
    }>;
    getAllUsuario(id: any): Promise<({
        permissao_modulos: ({
            modulo: {
                subModulo: {
                    permissao_sub_modulos: {
                        ver: boolean;
                        editar: boolean;
                        deletar: boolean;
                    }[];
                    id: number;
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
            };
        } & {
            id: number;
            ver: boolean;
            created_at: Date;
            updated_at: Date;
            userId: number;
            moduloId: number;
        })[];
    } & {
        id: number;
        nome: string;
        sobrenome: string;
        empresa: string;
        cpf: string;
        telefone: string;
        linkFoto: string;
        isAdmin: boolean;
        themeDark: boolean;
        operador: string;
        sexoId: number;
        clienteId: number;
        email: string;
        profile: string;
        created_at: Date;
        updated_at: Date;
        last_login: Date;
        verifiedAt: Date;
        timesId: number;
        cep: string;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        primeiro_acesso: boolean;
        gerente_conta: boolean;
        termos: boolean;
        password: string;
    })[]>;
    createUsuario(data: any): Promise<{
        msg: string;
        error: boolean;
        status?: undefined;
    } | {
        msg: string;
        status: boolean;
        error?: undefined;
    }>;
    permissaoAdmin(data: any): Promise<{
        msg: string;
        error: boolean;
    }>;
    deleteUsuario(data: any): Promise<{
        id: number;
        nome: string;
        sobrenome: string;
        empresa: string;
        cpf: string;
        telefone: string;
        linkFoto: string;
        isAdmin: boolean;
        themeDark: boolean;
        operador: string;
        sexoId: number;
        clienteId: number;
        email: string;
        profile: string;
        created_at: Date;
        updated_at: Date;
        last_login: Date;
        verifiedAt: Date;
        timesId: number;
        cep: string;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        primeiro_acesso: boolean;
        gerente_conta: boolean;
        termos: boolean;
        password: string;
    }>;
    salvarFotoPerfil(data: any): Promise<never>;
    atualizarPermissoesModulos(data: any): Promise<import(".prisma/client").Prisma.BatchPayload | {
        msg: string;
        error: boolean;
    }>;
}
