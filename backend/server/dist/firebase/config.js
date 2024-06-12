"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
function lerArquivoJSON(caminhoArquivo) {
    try {
        const data = fs.readFileSync(caminhoArquivo, 'utf8');
        const jsonData = JSON.parse(data);
        console.log('Arquivo JSON lido com sucesso:', jsonData);
        return jsonData;
    }
    catch (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        throw err;
    }
}
function firebaseConfig() {
    const data = lerArquivoJSON('./src/firebase/key.json');
    const converter = new FirebaseConfigConverter(data);
    const convertedData = converter.convertToFirebaseConfig();
    return convertedData;
}
class FirebaseConfigConverter {
    constructor(data) {
        this.data = data;
    }
    convertToFirebaseConfig() {
        return {
            apiKey: this.data.apiKey,
            authDomain: this.data.authDomain,
            projectId: this.data.projectId,
            databaseURL: this.data.FIRESTORE_DB_URL,
            storageBucket: this.data.storageBucket,
            messagingSenderId: this.data.messagingSenderId,
            appId: this.data.appId,
            measurementId: this.data.measurementId,
            privateKey: this.data.private_key
                ? this.data.private_key.replace(/\n/gm, '\n')
                : undefined,
            clientEmail: this.data.client_email
        };
    }
}
exports.default = firebaseConfig;
//# sourceMappingURL=config.js.map