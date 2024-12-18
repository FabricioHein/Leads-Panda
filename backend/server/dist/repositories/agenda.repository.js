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
exports.AgendaRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const agenda_dto_1 = require("../infra/DTO/agenda-dto");
const common_1 = require("@nestjs/common");
let AgendaRepository = class AgendaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAgendaByDataUsuario(atendimentoId, date) {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        console.log(atendimentoId, startOfDay, endOfDay);
        const userAgendas = await this.prisma.agenda.findMany({
            where: {
                AND: [
                    {
                        date_start: {
                            gte: startOfDay,
                            lte: endOfDay
                        }
                    },
                    {
                        Users: {
                            some: {
                                id: atendimentoId
                            }
                        }
                    }
                ]
            },
            include: {
                Users: true
            }
        });
        const formattedAgendas = userAgendas.map(agendaData => {
            const formattedData = new agenda_dto_1.default(Object.assign(Object.assign({}, agendaData), { date_start: new Date(agendaData.date_start), date_end: new Date(agendaData.date_end), userIds: agendaData.Users.map(user => user.userId) }));
            return formattedData;
        });
        return formattedAgendas;
    }
    ;
    async getAgendaAll(empresa_configId) {
        const userAgendas = await this.prisma.agenda.findMany({
            where: {
                Users: {
                    some: {
                        Users: {
                            empresa_configId: empresa_configId
                        }
                    }
                }
            },
            include: {
                Users: true
            }
        });
        const formattedAgendas = userAgendas.map(agendaData => {
            const formattedData = new agenda_dto_1.default(Object.assign(Object.assign({}, agendaData), { date_start: new Date(agendaData.date_start), date_end: new Date(agendaData.date_end), userIds: agendaData.Users.map(user => user.userId) }));
            return formattedData;
        });
        return formattedAgendas;
    }
    async getByIdAgenda(id) {
        return await this.prisma.agenda.findFirst({
            where: {
                id: id,
            },
        });
    }
    async crearAgendamentoExterno(data) {
        return await this.prisma.agenda.create({
            data: Object.assign(Object.assign({}, data), { date_end: data.date_end, cliente: {
                    connect: data.clientIds.map(clientId => ({
                        id: clientId
                    }))
                }, users: {
                    connect: data.users.map(userId => ({
                        id: userId
                    }))
                } })
        });
    }
    async createAgenda(data) {
        const newAgenda = await this.prisma.agenda.create({
            data: {
                title: data.title,
                description: data.description,
                className: data.className,
                status: data.status,
                date_start: data.date_start,
                date_end: data.date_end
            }
        });
        await Promise.all((data.clientIds || []).map(async (id) => {
            const validempresa_configIds = await this.prisma.cliente.findMany({
                where: {
                    id: { in: data.cliente }
                },
                select: {
                    id: true
                }
            });
            if (validempresa_configIds) {
                await this.prisma.agenda_cliente.create({
                    data: {
                        agendaId: newAgenda.id,
                        empresa_configId: id
                    },
                });
            }
        }));
        await Promise.all(data.userIds.map(async (userId) => {
            await this.prisma.agenda_user.create({
                data: {
                    agendaId: newAgenda.id,
                    userId: userId
                },
            });
        }));
        return newAgenda;
    }
    async updateAgenda(id, data) {
        const updatedAgenda = await this.prisma.agenda.update({
            where: { id: id },
            data: {
                title: data.title,
                description: data.description,
                className: data.className,
                status: data.status,
                date_start: data.date_start,
                date_end: data.date_end,
                Users: {
                    deleteMany: {
                        agendaId: id
                    },
                    create: data.userIds.map(userId => ({
                        Users: {
                            connect: { id: userId }
                        }
                    }))
                }
            },
            include: {
                Users: true
            }
        });
        return updatedAgenda;
    }
    async deleteAgenda(id) {
        await this.prisma.agenda.update({
            where: { id: id },
            data: {
                Users: {
                    deleteMany: {
                        agendaId: id
                    }
                }
            }
        });
        return await this.prisma.agenda.delete({
            where: {
                id: id,
            },
        });
    }
    async createManyAgenda(data) {
        return await this.prisma.agenda.createMany({
            data: data,
        });
    }
    async deleteManyTaskSubSub(id) {
        return await this.prisma.agenda.deleteMany({
            where: {
                id: id,
            },
        });
    }
};
AgendaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], AgendaRepository);
exports.AgendaRepository = AgendaRepository;
//# sourceMappingURL=agenda.repository.js.map