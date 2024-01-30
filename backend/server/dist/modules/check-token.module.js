"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckTokenModule = void 0;
const common_1 = require("@nestjs/common");
const check_token_service_1 = require("../service/check-token.service");
const check_token_controller_1 = require("../controllers/check-token.controller");
let CheckTokenModule = class CheckTokenModule {
};
CheckTokenModule = __decorate([
    (0, common_1.Module)({
        controllers: [check_token_controller_1.CheckTokenController],
        providers: [check_token_service_1.CheckTokenService],
    })
], CheckTokenModule);
exports.CheckTokenModule = CheckTokenModule;
//# sourceMappingURL=check-token.module.js.map