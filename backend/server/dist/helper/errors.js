"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorizedError = exports.notFoundError = exports.genericError = void 0;
const common_1 = require("@nestjs/common");
exports.genericError = new common_1.BadRequestException('Erro inesperado. Tente novamente mais tarde.');
exports.notFoundError = new common_1.NotFoundException('Ops! Não foi possível encontrar o que você está procurando.');
exports.unauthorizedError = new common_1.UnauthorizedException('Ops! Acesso não autorizado.');
//# sourceMappingURL=errors.js.map