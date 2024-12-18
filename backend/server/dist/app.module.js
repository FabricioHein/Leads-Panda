"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const app_controller_1 = require("./app.controller");
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth.module");
const users_module_1 = require("./modules/users.module");
const config_module_1 = require("./modules/config.module");
const produtos_module_1 = require("./modules/produtos.module");
const fornecedores_module_1 = require("./modules/fornecedores.module");
const processo_module_1 = require("./modules/processo.module");
const task_module_1 = require("./modules/task.module");
const contatos_module_1 = require("./modules/contatos.module");
const clientes_module_1 = require("./modules/clientes.module");
const projeto_module_1 = require("./modules/projeto.module");
const firebase_module_1 = require("./modules/firebase.module");
const firebase_service_1 = require("./service/firebase.service");
const chat_module_1 = require("./modules/chat.module");
const agenda_module_1 = require("./modules/agenda.module");
const pageLink_module_1 = require("./modules/pageLink.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            pageLink_module_1.PageLinkModule,
            agenda_module_1.AgendaModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            config_module_1.ConfigModule,
            produtos_module_1.ProdutoModule,
            fornecedores_module_1.FornecedorModule,
            processo_module_1.ProcessoModule,
            task_module_1.TaskModule,
            contatos_module_1.ContatosModule,
            clientes_module_1.ClientesModule,
            projeto_module_1.ProjetoModule,
            firebase_module_1.FirebaseModule,
            chat_module_1.ChatModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [firebase_service_1.FirebaseService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map