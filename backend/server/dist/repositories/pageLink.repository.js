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
exports.PageLinkRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let PageLinkRepository = class PageLinkRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPageLinkAll(empresa_configId) {
        return await this.prisma.page_link.findMany({
            where: {
                clientId: empresa_configId,
            }
        });
    }
    async getNomeLInkExiste(nome_link) {
        return await this.prisma.page_link.findFirst({
            where: {
                nome_link: {
                    equals: nome_link
                }
            },
            include: {
                links: true
            }
        });
    }
    async getByIdPageNome(nome_link) {
        return await this.prisma.page_link.findFirst({
            where: {
                nome_link: nome_link
            },
            include: {
                links: true
            }
        });
    }
    async getByIdPageLink(id) {
        return await this.prisma.page_link.findFirst({
            where: {
                id: id,
            },
            include: {
                links: true
            }
        });
    }
    async createPageLink(data) {
        console.log(data);
        return await this.prisma.page_link.create({
            data: {
                nome_link: data.nome_link,
                backgroundColor1: data.backgroundColor1,
                backgroundColor2: data.backgroundColor2,
                backgroundImage: data.backgroundImage,
                buttonColor: data.buttonColor,
                showProfilePicture: data.showProfilePicture,
                showShareLink: data.showShareLink,
                clientId: Number(data.clientId),
                linkProfile: data.linkProfile,
                links: {
                    create: data.links.map(link => ({
                        label: link.label,
                        href: link.href,
                        icon: link.icon,
                    })),
                },
            }
        });
    }
    async updatePageLink(data) {
        console.log(data);
        return await this.prisma.page_link.update({
            where: {
                id: data.id
            },
            data: {
                nome_link: data.nome_link,
                backgroundColor1: data.backgroundColor1,
                backgroundColor2: data.backgroundColor2,
                backgroundImage: data.backgroundImage,
                buttonColor: data.buttonColor,
                showProfilePicture: data.showProfilePicture,
                showShareLink: data.showShareLink,
                clientId: Number(data.clientId),
                linkProfile: data.linkProfile,
                links: {
                    deleteMany: {
                        page_linkId: data.id
                    },
                    create: data.links.map(link => ({
                        label: link.label,
                        href: link.href,
                        icon: link.icon,
                    })),
                },
            },
        });
    }
    async deletePageLink(id) {
        await this.prisma.linkCompany.deleteMany({
            where: {
                page_linkId: id
            }
        });
        return await this.prisma.page_link.delete({
            where: {
                id: id,
            }
        });
    }
};
PageLinkRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], PageLinkRepository);
exports.PageLinkRepository = PageLinkRepository;
//# sourceMappingURL=pageLink.repository.js.map