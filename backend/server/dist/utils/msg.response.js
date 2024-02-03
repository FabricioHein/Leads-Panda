"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucessAceptable = exports.ForbiddenAceptable = exports.ErroBadRequest = exports.ErroNotAceptable = void 0;
const common_1 = require("@nestjs/common");
const ErroNotAceptable = (msg) => {
    throw new common_1.HttpException(msg, common_1.HttpStatus.NOT_ACCEPTABLE);
};
exports.ErroNotAceptable = ErroNotAceptable;
const ErroBadRequest = (msg) => {
    throw new common_1.HttpException(msg, common_1.HttpStatus.BAD_REQUEST);
};
exports.ErroBadRequest = ErroBadRequest;
const ForbiddenAceptable = (msg) => {
    throw new common_1.HttpException(msg, common_1.HttpStatus.NOT_ACCEPTABLE);
};
exports.ForbiddenAceptable = ForbiddenAceptable;
const SucessAceptable = (msg) => {
    throw new common_1.HttpException(msg, common_1.HttpStatus.ACCEPTED);
};
exports.SucessAceptable = SucessAceptable;
//# sourceMappingURL=msg.response.js.map