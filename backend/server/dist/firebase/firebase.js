'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Firebase = void 0;
const app_1 = require("firebase/app");
const config_1 = require("./config");
const auth_1 = require("firebase/auth");
const config = (0, config_1.default)();
(0, app_1.initializeApp)(config);
class Firebase {
    static async signInWithEmailAndPassword(email, password) {
        const auth = (0, auth_1.getAuth)();
        const signInWithEmailAndPassw = await (0, auth_1.signInWithEmailAndPassword)(auth, email, password);
        if (signInWithEmailAndPassw) {
            return signInWithEmailAndPassw;
        }
        return null;
    }
    static async sendPasswordResetEmail(email) {
        const auth = (0, auth_1.getAuth)();
        const senhaNova = await (0, auth_1.sendPasswordResetEmail)(auth, email)
            .then(() => {
            console.log('Senha Enviado para o Email!');
            return true;
        })
            .catch((error) => {
            return error;
        });
        return senhaNova;
    }
    static getPassword() {
        return Math.floor(1000000000 + Math.random() * 900000).toString();
    }
    static async criarUsuarioFirebase(email, senha) {
        const auth = (0, auth_1.getAuth)();
        const criarUsuario = await (0, auth_1.createUserWithEmailAndPassword)(auth, email, senha)
            .then((data) => data)
            .catch((e) => e);
        if (criarUsuario.code !== 'auth/email-already-in-use') {
            await this.emailVerificacao(email, senha);
            return true;
        }
        else {
            return false;
        }
    }
    static updatePassword(user, newPassword) {
    }
    static updateEmail() {
    }
    static async emailVerificacao(email, password) {
        const auth = (0, auth_1.getAuth)();
        await (0, auth_1.signInWithEmailAndPassword)(auth, email, password);
        (0, auth_1.sendEmailVerification)(auth.currentUser).then(() => {
            console.log(' Email verification sent!');
        });
        return true;
    }
    static async usuarioExiste(email, password) {
        const auth = (0, auth_1.getAuth)();
    }
}
exports.Firebase = Firebase;
//# sourceMappingURL=firebase.js.map