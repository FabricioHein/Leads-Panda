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
exports.ImportarService = void 0;
const common_1 = require("@nestjs/common");
const file_helper_1 = require("../helper/file.helper");
const msg_response_1 = require("../utils/msg.response");
let ImportarService = class ImportarService {
    constructor() { }
    async importarArquivo(file, id) {
        try {
            return await file_helper_1.FileHelper.gravarFileStorage(file.buffer, id, file.originalname);
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
    async importarDados(params, req) {
        try {
            return 'data';
        }
        catch (error) {
            return (0, msg_response_1.ErroBadRequest)(error);
        }
    }
};
ImportarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ImportarService);
exports.ImportarService = ImportarService;
//# sourceMappingURL=importar.service.js.map