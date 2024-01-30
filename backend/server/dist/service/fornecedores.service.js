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
exports.FornecedorService = void 0;
const common_1 = require("@nestjs/common");
const fornecedor_repository_1 = require("../repositories/fornecedor.repository");
const msg_response_1 = require("../utils/msg.response");
let FornecedorService = class FornecedorService {
    constructor(fornecedorRepositorio) {
        this.fornecedorRepositorio = fornecedorRepositorio;
    }
    async atualizarFornecedor(data) {
        try {
            const { id } = data;
            const dataFornecedor = data;
            return await this.fornecedorRepositorio.updateFornecedor(Number(id), dataFornecedor);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllFornecedor() {
        try {
            return await this.fornecedorRepositorio.getFornecedorAll();
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createFornecedor(data) {
        try {
            return await this.fornecedorRepositorio.createFornecedor(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteFornecedor(data) {
        try {
            const id = data.id;
            return await this.fornecedorRepositorio.deleteFornecedor(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
FornecedorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fornecedor_repository_1.FornecedorRepository])
], FornecedorService);
exports.FornecedorService = FornecedorService;
//# sourceMappingURL=fornecedores.service.js.map