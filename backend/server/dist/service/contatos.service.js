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
exports.ContatosService = void 0;
const common_1 = require("@nestjs/common");
const contatos_repository_1 = require("../repositories/contatos.repository");
const msg_response_1 = require("../utils/msg.response");
let ContatosService = class ContatosService {
    constructor(contatosRepositorio) {
        this.contatosRepositorio = contatosRepositorio;
    }
    async atualizarContatos(data) {
        try {
            const { id } = data;
            const dataContatos = data;
            return await this.contatosRepositorio.updateContatos(Number(id), dataContatos);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByIdContatosChat(id) {
        try {
            const contatoChat = await this.contatosRepositorio.getByIdContatosChat(Number(id));
            return contatoChat;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByIdNumber(number) {
        try {
            const contatoNumber = await this.contatosRepositorio.getByIdNumber(number);
            return contatoNumber;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getByIdName(name) {
        try {
            const contatoName = await this.contatosRepositorio.getByIdName(name);
            return contatoName;
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllContatos(id) {
        try {
            return await this.contatosRepositorio.getContatosAll(Number(id));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createContatos(data) {
        try {
            return await this.contatosRepositorio.createContatos(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteContatos(data) {
        try {
            const id = data.id;
            return await this.contatosRepositorio.deleteContatos(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
ContatosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contatos_repository_1.ContatosRepository])
], ContatosService);
exports.ContatosService = ContatosService;
//# sourceMappingURL=contatos.service.js.map