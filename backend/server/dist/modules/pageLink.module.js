"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLinkModule = void 0;
const common_1 = require("@nestjs/common");
const file_helper_1 = require("../helper/file.helper");
const PrismaService_1 = require("../base/relacional/PrismaService");
const pageLink_service_1 = require("../service/pageLink.service");
const pageLink_repository_1 = require("../repositories/pageLink.repository");
const pageLink_controller_1 = require("../controllers/pageLink.controller");
let PageLinkModule = class PageLinkModule {
};
PageLinkModule = __decorate([
    (0, common_1.Module)({
        controllers: [pageLink_controller_1.PageLinkController],
        providers: [pageLink_repository_1.PageLinkRepository, pageLink_service_1.PageLinkService, PrismaService_1.PrismaService, file_helper_1.FileHelper],
    })
], PageLinkModule);
exports.PageLinkModule = PageLinkModule;
//# sourceMappingURL=pageLink.module.js.map