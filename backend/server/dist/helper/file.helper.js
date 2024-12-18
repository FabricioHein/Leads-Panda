'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHelper = void 0;
const app_1 = require("firebase/app");
const config_1 = require("../firebase/config");
const storage_1 = require("firebase/storage");
const { Readable } = require('stream');
const mkdirp = require('mkdirp');
const fs = require('fs');
const os = require('os');
const path = require('path');
const config = (0, config_1.default)();
(0, app_1.initializeApp)(config);
const storage = (0, storage_1.getStorage)();
class FileHelper {
    static bufferToStream(binary) {
        const readableInstanceStream = new Readable({
            read() {
                this.push(binary);
                this.push(null);
            },
        });
        return readableInstanceStream;
    }
    static base64ToBuffer(fileBase64) {
        return Buffer.from(fileBase64, 'base64');
    }
    static async gravarFileStorage(bufferFile, empresa_configId, path) {
        console.log(empresa_configId);
        const metadata = {
            contentType: bufferFile.mimetype,
        };
        const storageRef = (0, storage_1.ref)(storage, `files/cliente/${empresa_configId}/${path}`);
        const snapshot = await (0, storage_1.uploadBytesResumable)(storageRef, bufferFile.buffer, metadata);
        const downloadURL = await (0, storage_1.getDownloadURL)(snapshot.ref);
        console.log('File successfully uploaded.');
        return {
            message: 'file uploaded to firebase storage',
            name: 'file.originalname',
            type: 'file.mimetype',
            downloadURL: downloadURL,
        };
    }
    static salvarArquivoTemp(data, nome) {
        const localPath = path.join(os.tmpdir(), nome);
        fs.writeFileSync(localPath, JSON.stringify(data));
        return localPath;
    }
    static salvarBufferTemp(data, nome) {
        const localPath = path.join(os.tmpdir(), nome);
        fs.writeFileSync(localPath, data);
        return localPath;
    }
    static convertCsvToJson(file, separator, hasHeader) {
        const linhas = file.split('\n').filter((p) => (p || '').length > 0);
        let headers = [];
        let registros = [];
        linhas.forEach((dados, index) => {
            dados = dados.trim();
            if (index === 0 && hasHeader) {
                headers = dados.split(separator);
            }
            else {
                registros.push(dados.split(separator));
            }
        }, this);
        return {
            headers,
            registros,
            json: registros.map((p) => {
                let retorno = {};
                headers.forEach((header, index) => {
                    retorno[header] = p[index];
                });
                return retorno;
            }),
        };
    }
}
exports.FileHelper = FileHelper;
//# sourceMappingURL=file.helper.js.map