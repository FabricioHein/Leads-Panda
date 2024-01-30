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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("./config.service");
const jwt_1 = require("@nestjs/jwt");
const usuario_repository_1 = require("../repositories/usuario.repository");
const bcrypt_jwt_module_1 = require("bcrypt-jwt-module");
const jwt = new bcrypt_jwt_module_1.BcryptService();
let AuthService = class AuthService {
    constructor(usuarioRepository, configService, jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async validateUser(username, pass) {
        const user = await this.usuarioRepository.findOne(username);
        if (user && user.password) {
            const match = await jwt.compare(pass, user.password);
            if (match) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            return null;
        }
        return null;
    }
    async loginAcesso(data) {
        const payload = { username: data.nome };
        const usuario = await this.usuarioRepository.findOne(data.email);
        const token = this.jwtService.sign(payload);
        if (usuario) {
            const userLogin = await this.configService.getConfig(usuario.id, token);
            return userLogin;
        }
        return {
            msg: 'Não Autorizado',
            status: 401
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_repository_1.UsuarioRepository,
        config_service_1.ConfigService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map