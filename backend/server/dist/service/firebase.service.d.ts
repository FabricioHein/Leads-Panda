export declare class FirebaseService {
    constructor();
    criarUsuarioFirebase(email: any, senha: any): Promise<boolean>;
    loginFirebase(email: any, password: any): Promise<import("@firebase/auth").UserCredential>;
    emailVerificacao(email: any, password: any): Promise<boolean>;
    sendPasswordResetEmail(email: any): Promise<any>;
}
