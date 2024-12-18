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
exports.ConfigService = void 0;
const config_repository_1 = require("../repositories/config.repository");
const common_1 = require("@nestjs/common");
const enum_repository_1 = require("../repositories/enum.repository");
const configCliente_repository_1 = require("../repositories/configCliente.repository");
const clientes_repository_1 = require("../repositories/clientes.repository");
const task_repository_1 = require("../repositories/task.repository");
const chat_repository_1 = require("../repositories/chat.repository");
const msg_response_1 = require("../utils/msg.response");
let ConfigService = class ConfigService {
    constructor(configRepository, configClienteRepository, enumRepository, clientesRepository, taskRepository, chatRepository) {
        this.configRepository = configRepository;
        this.configClienteRepository = configClienteRepository;
        this.enumRepository = enumRepository;
        this.clientesRepository = clientesRepository;
        this.taskRepository = taskRepository;
        this.chatRepository = chatRepository;
    }
    async getDashboard(empresa_configId) {
        try {
            let empresaId = Number(empresa_configId);
            const contatos = await this.clientesRepository.countClientesByEmpresa(empresaId);
            const leads = await this.taskRepository.countTasksByEmpresa(empresaId);
            const sumTasksByEmpresaValorInicial = await this.taskRepository.sumTasksByEmpresaValorInicial(empresaId);
            const sumTasksByEmpresaValorFinal = await this.taskRepository.sumTasksByEmpresaValorFinal(empresaId);
            const chatsAtivos = await this.chatRepository.countChatsByEmpresaAtivo(empresaId);
            const naochatsAtivos = await this.chatRepository.countChatsByEmpresaNaoAtivo(empresaId);
            const dashBoard = {
                totalCliente: contatos ? contatos : 0,
                totalLeads: leads ? leads : 0,
                totalPotencialNegocioInicial: sumTasksByEmpresaValorInicial ? sumTasksByEmpresaValorInicial : 0,
                totalPotencialNegocioFinal: sumTasksByEmpresaValorFinal ? sumTasksByEmpresaValorFinal : 0,
                chatAtivos: chatsAtivos ? chatsAtivos : 0,
                naochatsAtivos: naochatsAtivos ? naochatsAtivos : 0
            };
            return dashBoard;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarConfig(data) {
        try {
            const { id } = data;
            const configCliente = data;
            return await this.configClienteRepository.updateCliente(id, configCliente);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getConfig(id, token) {
        try {
            const permissaoModulos = await this.configRepository.getPermissaoModulos(Number(id));
            const permissaoSubModulos = await this.configRepository.getPermissaoSubModulos(Number(id));
            const getModulosSistema = await this.configRepository.getModulosSistema();
            const usuario = await this.configRepository.getByIdUserConfig(Number(id));
            const empresa = await this.configRepository.getByIdUserEmpresa(Number(id));
            const sexoEnum = await this.enumRepository.getSexo();
            const opcaoEnum = await this.enumRepository.getOpcao();
            const tipoUsuario = await this.enumRepository.getUsuario();
            const permissaoMod = [];
            permissaoModulos.forEach((i) => {
                i.permissao_modulos.forEach((j) => {
                    let hasModulo = permissaoMod.filter((n) => n.id === i.id);
                    if (hasModulo.length === 0) {
                        const modulos = {
                            id: i.id,
                            modulo: i.nome,
                            url_modulo: i.url,
                            ativo_modulo: i.ativo,
                            icon_modulo: i.icon,
                            ver_modulo: j.ver,
                            ordem: i.ordem,
                            submodulos: [],
                        };
                        permissaoMod.push(modulos);
                        permissaoSubModulos.forEach((p) => {
                            if (p.moduloId === i.id) {
                                p.permissao_sub_modulos.forEach((m) => {
                                    let hassubModulo = modulos.submodulos.filter((s) => s.id === p.id);
                                    if (hassubModulo.length === 0) {
                                        modulos.submodulos.push({
                                            id: p.id,
                                            nome: p.nome,
                                            url: p.url,
                                            ativo: p.ativo,
                                            icon: p.icon,
                                            ver: m.ver,
                                            editar: m.editar,
                                            deletar: m.deletar,
                                            ordem: p.ordem,
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            });
            if (empresa && usuario && token) {
                return {
                    token: token,
                    usuario: usuario,
                    sistema: {
                        permissao: permissaoMod,
                        modulos: getModulosSistema,
                        enum: {
                            opcao: opcaoEnum,
                            sexo: sexoEnum,
                            tipoUsuario: tipoUsuario,
                        },
                    },
                    cliente: empresa,
                };
            }
            else {
                return {
                    erro: 'Usuario Não existe na Base Ou Vínculo com a Empresa Config',
                };
            }
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_repository_1.ConfigRepository,
        configCliente_repository_1.ConfigClienteRepository,
        enum_repository_1.EnumRepository,
        clientes_repository_1.ClientesRepository,
        task_repository_1.TaskRepository,
        chat_repository_1.ChatRepository])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map