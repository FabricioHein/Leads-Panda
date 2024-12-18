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
exports.PageLinkService = void 0;
const common_1 = require("@nestjs/common");
const file_helper_1 = require("../helper/file.helper");
const msg_response_1 = require("../utils/msg.response");
const pageLink_repository_1 = require("../repositories/pageLink.repository");
let PageLinkService = class PageLinkService {
    constructor(pageLinkRepository, fileHelper) {
        this.pageLinkRepository = pageLinkRepository;
        this.fileHelper = fileHelper;
    }
    async imagePageLink(data) {
        try {
            const { fileBase64, caminho, fileName } = data;
            return 'file';
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async atualizarPageLink(data) {
        try {
            const dataPageLink = data;
            const atualizarPageLink = await this.pageLinkRepository.updatePageLink(dataPageLink);
            if (atualizarPageLink.id) {
                return this.getPageLinkById(atualizarPageLink.id);
            }
            return (0, msg_response_1.ErroBadRequest)('error');
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getNomeLInkExiste(nome_link) {
        try {
            const linkCompany = await this.pageLinkRepository.getByIdPageNome(nome_link);
            if (linkCompany) {
                return {
                    msg: 'Nome Já Existe. Escolha outro nome.',
                    error: true
                };
            }
            return {
                msg: 'Nome para URL Ok!.',
                error: false
            };
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getPageLinkByNome_link(nome_link) {
        try {
            return await this.pageLinkRepository.getByIdPageNome(nome_link);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getPageLinkById(id) {
        try {
            return await this.pageLinkRepository.getByIdPageLink(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async getAllPageLink(empresa_configId) {
        try {
            return await this.pageLinkRepository.getPageLinkAll(Number(empresa_configId));
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async createPageLink(data) {
        try {
            const createPageLink = await this.pageLinkRepository.createPageLink(data);
            if (createPageLink.id) {
                return this.getPageLinkById(createPageLink.id);
            }
            return (0, msg_response_1.ErroBadRequest)('error');
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async deletePageLink(data) {
        try {
            const id = data.id;
            return await this.pageLinkRepository.deletePageLink(id);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
PageLinkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pageLink_repository_1.PageLinkRepository,
        file_helper_1.FileHelper])
], PageLinkService);
exports.PageLinkService = PageLinkService;
//# sourceMappingURL=pageLink.service.js.map