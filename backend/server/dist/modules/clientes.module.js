"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesModule = void 0;
const common_1 = require("@nestjs/common");
const clientes_service_1 = require("../service/clientes.service");
const clientes_controller_1 = require("../controllers/clientes.controller");
const clientes_repository_1 = require("../repositories/clientes.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const historico_cliente_repository_1 = require("../repositories/historico-cliente.repository");
let ClientesModule = class ClientesModule {
};
ClientesModule = __decorate([
    (0, common_1.Module)({
        controllers: [clientes_controller_1.ClientesController],
        providers: [
            clientes_repository_1.ClientesRepository,
            historico_cliente_repository_1.HistoricoClienteRepository,
            clientes_service_1.ClientesService,
            PrismaService_1.PrismaService,
        ],
        imports: [],
    })
], ClientesModule);
exports.ClientesModule = ClientesModule;
//# sourceMappingURL=clientes.module.js.map