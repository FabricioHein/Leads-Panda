import Api from '@/api/api';

class FormularioService extends Api {
    constructor(config, token, url) {
        super(config, token, url);

        this.url = url || '/api/formulario';
        this.config = config || {};
        this.token = token;
    }

    async atualizarFormulario() {
        return await this.update();
    }
    async deleteFormulario() {
        this.url = '/api/formulario/delete';

        return await this.post();
    }
    async criarFormulario() {
        return await this.post();
    }
    async criarRespostaForm() {
        this.url = '/api/formulario-ask-form'
        return await this.post();
    }
    async getFormularios() {
        const getFormularios = await this.get();
        if(getFormularios.data) return  getFormularios.data;
        return [];
    }

    async getAllFormularios() {
        const allFormularios = await this.get();
        if(allFormularios.data) return allFormularios.data;
        return [];
    }
}

export default FormularioService;
