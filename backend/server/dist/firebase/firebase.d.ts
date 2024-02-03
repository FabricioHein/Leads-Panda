export declare class Firebase {
    static signInWithEmailAndPassword(email: any, password: any): Promise<import("@firebase/auth").UserCredential>;
    static sendPasswordResetEmail(email: any): Promise<any>;
    static getPassword(): string;
    static criarUsuarioFirebase(email: any, senha: any): Promise<boolean>;
    static updatePassword(user: any, newPassword: any): void;
    static updateEmail(): void;
    static emailVerificacao(email: any, password: any): Promise<boolean>;
    static usuarioExiste(email: any, password: any): Promise<void>;
}
