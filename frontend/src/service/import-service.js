import Api from '@/api/api';

class ImportarService extends Api {
    constructor(config, token, url, file) {
        super(config, token, url, file);

        this.url = url || '/api/importar';
        this.config = config || {};
        this.token = token;
        this.file = file;
    }

    async importarFile() {
        const importar = await this.postFile();
        if(importar.data) return importar.data;
        return []
    }
}

export default ImportarService;
