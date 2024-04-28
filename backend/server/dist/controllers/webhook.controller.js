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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookController = void 0;
const common_1 = require("@nestjs/common");
let WebhookController = class WebhookController {
    handlePostRequest(req, res) {
        console.log("-------------- New Request POST --------------");
        console.log("Headers:" + JSON.stringify(req.headers, null, 3));
        console.log("Body:" + JSON.stringify(req.body, null, 3));
        res.json({ message: "Thank you for the message" });
    }
    handleGetRequest(req, res) {
        const mode = req.query["hub.mode"];
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];
        console.log("-------------- New Request GET --------------");
        console.log("Headers:" + JSON.stringify(req.headers, null, 3));
        console.log("Body:" + JSON.stringify(req.body, null, 3));
        if (mode && token) {
            if (mode === "subscribe" && token === "12345") {
                console.log("WEBHOOK_VERIFIED");
                res.status(common_1.HttpStatus.OK).send(challenge);
            }
            else {
                console.log("Responding with 403 Forbidden");
                res.sendStatus(common_1.HttpStatus.FORBIDDEN);
            }
        }
        else {
            console.log("Replying Thank you.");
            res.json({ message: "Thank you for the message" });
        }
    }
};
__decorate([
    (0, common_1.Post)('/*'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WebhookController.prototype, "handlePostRequest", null);
__decorate([
    (0, common_1.Get)('/*'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WebhookController.prototype, "handleGetRequest", null);
WebhookController = __decorate([
    (0, common_1.Controller)('Webhook')
], WebhookController);
exports.WebhookController = WebhookController;
//# sourceMappingURL=webhook.controller.js.map