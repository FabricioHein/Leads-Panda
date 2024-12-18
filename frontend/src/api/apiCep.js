import axios from 'axios';

class ApiCep {
    constructor(cep) {
        this.cep = cep,
        this.baseURL = 'https://cdn.apicep.com/file';
        //VIACEP PROCURAR
    }
    async conectApi() {
        const Api = await axios.create({
            baseURL: this.baseURL,
        });
        return Api;
    }
    async get() {
        const response = await (
            await this.conectApi()
        )
            .get(`apicep/${this.cep}.json`)
            .then((response) => {
                return response.data;
            })
            .catch((e) => {
                return e;
            });

        return response;
    }
    async post() {
        const response = await (
            await this.conectApi()
        )
            .post(`${this.baseURL}${this.url}`, this.config)
            .then((response) => {
                return response;
            })
            .catch((e) => {
                return e;
            });

        return response;
    }
}
export default ApiCep;
