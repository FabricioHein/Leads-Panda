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
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
const produtos_repository_1 = require("../repositories/produtos.repository");
const file_helper_1 = require("../helper/file.helper");
const msg_response_1 = require("../utils/msg.response");
let ProdutoService = class ProdutoService {
    constructor(produtoRepositorio, fileHelper) {
        this.produtoRepositorio = produtoRepositorio;
        this.fileHelper = fileHelper;
    }
    async imageProduto(data) {
        try {
            const { fileBase64, caminho, fileName } = data;
            return 'file';
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarProduto(data) {
        try {
            const { id } = data;
            const dataProduto = data;
            return await this.produtoRepositorio.updateProduto(Number(id), dataProduto);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllProduto(empresa_configId) {
        try {
            return await this.produtoRepositorio.getProdutoAll(Number(empresa_configId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createProduto(data) {
        try {
            return await this.produtoRepositorio.createProduto(data);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deleteProduto(data) {
        try {
            const id = data.id;
            return await this.produtoRepositorio.deleteProduto(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
ProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [produtos_repository_1.ProdutoRepository,
        file_helper_1.FileHelper])
], ProdutoService);
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produtos.service.js.map