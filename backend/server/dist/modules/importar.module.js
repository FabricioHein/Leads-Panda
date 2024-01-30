"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportarModule = void 0;
const common_1 = require("@nestjs/common");
const importar_service_1 = require("../service/importar.service");
const importar_controller_1 = require("../controllers/importar.controller");
const file_helper_1 = require("../helper/file.helper");
let ImportarModule = class ImportarModule {
};
ImportarModule = __decorate([
    (0, common_1.Module)({
        controllers: [importar_controller_1.ImportarController],
        providers: [importar_service_1.ImportarService, file_helper_1.FileHelper],
    })
], ImportarModule);
exports.ImportarModule = ImportarModule;
//# sourceMappingURL=importar.module.js.map