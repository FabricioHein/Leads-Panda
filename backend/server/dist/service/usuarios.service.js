"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const modulos_permissao_repository_1 = require("../repositories/modulos-permissao.repository");
const sub_modulos_permissao_repository_1 = require("../repositories/sub-modulos-permissao.repository");
const usuario_repository_1 = require("../repositories/usuario.repository");
const firebase_service_1 = require("./firebase.service");
const configCliente_repository_1 = require("../repositories/configCliente.repository");
const sub_modulos_repository_1 = require("../repositories/sub-modulos.repository");
const modulos_repository_1 = require("../repositories/modulos.repository");
const msg_response_1 = require("../utils/msg.response");
const bcrypt_jwt_module_1 = require("bcrypt-jwt-module");
const jwt = new bcrypt_jwt_module_1.BcryptService();
let UsuariosService = class UsuariosService {
    constructor(usuarioRepositorio, modulosPermissaoRepository, subModulosPermissaoRepository, firebaseService, configClienteRepository, subModulosRepository, modulosRepository) {
        this.usuarioRepositorio = usuarioRepositorio;
        this.modulosPermissaoRepository = modulosPermissaoRepository;
        this.subModulosPermissaoRepository = subModulosPermissaoRepository;
        this.firebaseService = firebaseService;
        this.configClienteRepository = configClienteRepository;
        this.subModulosRepository = subModulosRepository;
        this.modulosRepository = modulosRepository;
    }
    async novaSenhaUsuarioEmail(email) {
        try {
            const usuario = await this.usuarioRepositorio.getByEmailUser(email);
            if (usuario) {
                return await this.firebaseService.sendPasswordResetEmail(email);
            }
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createUsuarioCliente(data) {
        try {
            const cliente = data.cliente;
            const dataUsuario = data.usuario;
            if (!cliente.cnpj_cpf) {
                cliente.cnpj_cpf = dataUsuario.cpf;
            }
            if (cliente && dataUsuario && cliente.cnpj_cpf) {
                const hasCliente = await this.configClienteRepository.getByCnpjCliente(cliente.cnpj_cpf);
                console.log(hasCliente);
                if (!hasCliente) {
                    if (!cliente['nome_empresa']) {
                        cliente['nome_empresa'] = dataUsuario.nome;
                        cliente['nome_fantasia'] = dataUsuario.nome;
                    }
                    const criarCliente = await this.configClienteRepository.createCliente(cliente);
                    if (criarCliente) {
                        const usuario = await this.usuarioRepositorio.getByEmailUser(dataUsuario.email);
                        if (!usuario) {
                            dataUsuario['isAdmin'] = true;
                            dataUsuario['primeiro_acesso'] = true;
                            dataUsuario['gerente_conta'] = true;
                            dataUsuario['clienteId'] = Number(criarCliente.id);
                            const usuarioNovo = await this.createUsuario(dataUsuario);
                            if (usuarioNovo) {
                                return (0, msg_response_1.SucessAceptable)('Usuário Criado com Sucesso');
                            }
                            return (0, msg_response_1.ErroNotAceptable)('Erro para Criar Usuário');
                        }
                    }
                }
                else {
                    return (0, msg_response_1.ErroNotAceptable)('Usuário Já Cadastrado!');
                }
                throw new common_1.NotAcceptableException();
            }
            else if (dataUsuario) {
                const usuario = await this.usuarioRepositorio.getByEmailUser(dataUsuario.email);
                if (!usuario) {
                    const criarCliente = await this.configClienteRepository.createCliente(cliente);
                    if (criarCliente) {
                        dataUsuario['clienteId'] = Number(criarCliente.id);
                        return await this.createUsuario(dataUsuario);
                    }
                }
                else {
                    return (0, msg_response_1.ErroNotAceptable)('Usuário Já Existe');
                }
            }
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarUsuario(data) {
        try {
            const { id } = data;
            if (data.password) {
                data.password = await jwt.hash(data.password);
            }
            const dataUsuario = data;
            return await this.usuarioRepositorio.updateUser(Number(id), dataUsuario);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllUsuario(id) {
        try {
            const getAllUsuarios = await this.usuarioRepositorio.getUserAll(Number(id));
            return getAllUsuarios.map((usuario) => {
                delete usuario['password'];
                return usuario;
            });
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createUsuario(data) {
        try {
            if (data.password) {
                data.password = await jwt.hash(data.password);
            }
            const usuario = await this.usuarioRepositorio.getByEmailUser(data.email);
            let usuarioInfo = data;
            delete usuarioInfo['modulos'];
            delete usuarioInfo['sub'];
            if (!usuario) {
                const novoUsuario = await this.usuarioRepositorio.createUser(Object.assign({}, usuarioInfo));
                if (novoUsuario) {
                    if (data.clienteId) {
                        if (data.modulos && data.sub) {
                            data['id'] = Number(novoUsuario.id);
                            await this.atualizarPermissoesModulos(data);
                            return (0, msg_response_1.ErroNotAceptable)('Usuário Criado com Sucesso');
                        }
                        else {
                            data['id'] = Number(novoUsuario.id);
                            const permissaoAdmin = await this.permissaoAdmin(data);
                            return permissaoAdmin
                                ? (0, msg_response_1.SucessAceptable)('Usuário Criado com Sucesso')
                                : (0, msg_response_1.ErroNotAceptable)('Erro para Criar Permissão');
                        }
                    }
                    return (0, msg_response_1.ErroNotAceptable)('Erro para Criar Permissão');
                }
                else {
                    return (0, msg_response_1.ErroNotAceptable)('Usuário Já Existe');
                }
            }
            else {
                return (0, msg_response_1.ErroNotAceptable)('Usuário Já Existe');
            }
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async permissaoAdmin(data) {
        const modulos = await this.modulosRepository.getAllModulos();
        const subModulos = await this.subModulosRepository.getAllSubModulos();
        const userId = Number(data.id);
        if (userId) {
            let permissaoModulos = modulos.map((m) => {
                return {
                    userId: userId,
                    moduloId: Number(m.id),
                    ver: true,
                };
            });
            let permissaoSubModulos = subModulos.map((s) => {
                return {
                    userId: userId,
                    subModuloId: Number(s.id),
                    editar: true,
                    ver: true,
                    deletar: true,
                };
            });
            const moduloPerm = await this.modulosPermissaoRepository.createManyModulosUsuario(permissaoModulos);
            const moduloSubPermi = await this.subModulosPermissaoRepository.createManySubModulosUsuario(permissaoSubModulos);
            if (moduloSubPermi && moduloPerm) {
                return {
                    msg: 'Criado com Sucesso',
                    error: false,
                };
            }
        }
        return {
            msg: 'Não Criado Permissão ao Usuário',
            error: true,
        };
    }
    async deleteUsuario(data) {
        try {
            const id = data.id;
            return await this.usuarioRepositorio.deleteUser(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async salvarFotoPerfil(data) {
        try {
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarPermissoesModulos(data) {
        try {
            const id = Number(data.id);
            if (id) {
                const modulos = data.modulos;
                const subModulos = data.sub;
                await this.modulosPermissaoRepository.deleteManyModulosUsuario(id);
                await this.modulosPermissaoRepository.createManyModulosUsuario(modulos);
                await this.subModulosPermissaoRepository.deleteManySubModulosUsuario(id);
                return await this.subModulosPermissaoRepository.createManySubModulosUsuario(subModulos);
            }
            else {
                return {
                    msg: 'Não Atualizado Usuário',
                    error: true,
                };
            }
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_repository_1.UsuarioRepository,
        modulos_permissao_repository_1.ModulosPermissaoRepository,
        sub_modulos_permissao_repository_1.SubModulosPermissaoRepository,
        firebase_service_1.FirebaseService,
        configCliente_repository_1.ConfigClienteRepository,
        sub_modulos_repository_1.SubModulosRepository,
        modulos_repository_1.ModulosRepository])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map