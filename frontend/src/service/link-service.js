import Api from '@/api/api';

class LinkService extends Api {
    constructor(config, token, url) {
        super(config, token, url);

        this.url = url || '/api/pageLink';
        this.config = config || {};
        this.token = token;
    }
    async atualizarLink() {
        const atualizarLink = await this.update()
        return atualizarLink.data;
    }
    async deleteLink() {
        this.url = '/api/pageLink/delete';

        return await this.post();
    }
    async criarLink() {
        const data = await this.post()
        return data.data;
    }

    async getLink() {
        const getLink = await this.get();
        if (getLink.data) return getLink.data
        return [];
    }
}

export default LinkService;
