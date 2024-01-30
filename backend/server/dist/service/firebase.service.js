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
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const firebase_1 = require("../firebase/firebase");
let FirebaseService = class FirebaseService {
    constructor() { }
    async criarUsuarioFirebase(email, senha) {
        return await firebase_1.Firebase.criarUsuarioFirebase(email, senha);
    }
    async loginFirebase(email, password) {
        return await firebase_1.Firebase.signInWithEmailAndPassword(email, password);
    }
    async emailVerificacao(email, password) {
        return await firebase_1.Firebase.emailVerificacao(email, password);
    }
    async sendPasswordResetEmail(email) {
        return await firebase_1.Firebase.sendPasswordResetEmail(email);
    }
};
FirebaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map