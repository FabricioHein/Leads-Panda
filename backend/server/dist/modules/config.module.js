"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../service/config.service");
const config_controller_1 = require("../controllers/config.controller");
const config_repository_1 = require("../repositories/config.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const users_module_1 = require("./users.module");
const enum_repository_1 = require("../repositories/enum.repository");
const usuarios_module_1 = require("./usuarios.module");
const configCliente_repository_1 = require("../repositories/configCliente.repository");
const importar_module_1 = require("./importar.module");
const clientes_repository_1 = require("../repositories/clientes.repository");
const chat_repository_1 = require("../repositories/chat.repository");
const task_repository_1 = require("../repositories/task.repository");
let ConfigModule = class ConfigModule {
};
ConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, usuarios_module_1.UsuariosModule, importar_module_1.ImportarModule],
        controllers: [config_controller_1.ConfigController],
        providers: [
            config_service_1.ConfigService,
            config_repository_1.ConfigRepository,
            enum_repository_1.EnumRepository,
            PrismaService_1.PrismaService,
            configCliente_repository_1.ConfigClienteRepository,
            clientes_repository_1.ClientesRepository,
            chat_repository_1.ChatRepository,
            task_repository_1.TaskRepository
        ],
        exports: [config_service_1.ConfigService],
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;
//# sourceMappingURL=config.module.js.map