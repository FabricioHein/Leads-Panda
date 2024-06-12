"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../service/auth.service");
const constants_1 = require("../auth/constants");
const users_module_1 = require("./users.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const config_module_1 = require("./config.module");
const firebase_service_1 = require("../service/firebase.service");
const check_token_module_1 = require("./check-token.module");
const authenticator_module_1 = require("./authenticator.module");
const formulario_module_1 = require("./formulario.module");
const formulario_ask_module_1 = require("./formulario-ask.module");
const local_strategy_1 = require("../auth/local.strategy");
const jwt_strategy_1 = require("../auth/jwt.strategy");
const usuario_repository_1 = require("../repositories/usuario.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const google_strategy_1 = require("../auth/google.strategy");
const auth_controller_1 = require("../controllers/auth.controller");
const usuarios_service_1 = require("../service/usuarios.service");
const sendgrid_service_1 = require("../mail/sendgrid/sendgrid.service");
const authenticator_service_1 = require("../service/authenticator.service");
const modulos_permissao_repository_1 = require("../repositories/modulos-permissao.repository");
const sub_modulos_permissao_repository_1 = require("../repositories/sub-modulos-permissao.repository");
const configCliente_repository_1 = require("../repositories/configCliente.repository");
const sub_modulos_repository_1 = require("../repositories/sub-modulos.repository");
const modulos_repository_1 = require("../repositories/modulos.repository");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            config_module_1.ConfigModule,
            passport_1.PassportModule,
            check_token_module_1.CheckTokenModule,
            authenticator_module_1.AuthenticatorModule,
            formulario_module_1.FormularioModule,
            formulario_ask_module_1.FormularioAskModule,
            passport_1.PassportModule.register({ session: true }),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '10d' },
            }),
        ],
        providers: [
            usuarios_service_1.UsuariosService,
            sendgrid_service_1.SendgridService,
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            usuario_repository_1.UsuarioRepository,
            PrismaService_1.PrismaService,
            google_strategy_1.GoogleStrategy,
            usuarios_service_1.UsuariosService,
            firebase_service_1.FirebaseService,
            PrismaService_1.PrismaService,
            authenticator_service_1.AuthenticatorService,
            modulos_permissao_repository_1.ModulosPermissaoRepository,
            sub_modulos_permissao_repository_1.SubModulosPermissaoRepository,
            firebase_service_1.FirebaseService,
            configCliente_repository_1.ConfigClienteRepository,
            sub_modulos_repository_1.SubModulosRepository,
            modulos_repository_1.ModulosRepository,
            PrismaService_1.PrismaService,
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map