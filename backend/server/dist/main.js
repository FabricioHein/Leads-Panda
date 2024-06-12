"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const constants_1 = require("./auth/constants");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
    });
    app.use(session({
        secret: constants_1.jwtConstants,
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(process.env.PORTA_SERVER);
}
bootstrap();
//# sourceMappingURL=main.js.map