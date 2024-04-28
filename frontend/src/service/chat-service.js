import Api from '@/api/api';

class ChatService extends Api {
    constructor(config, token, url) {
        super(config, token, url);

        this.url = url || '/api/chat';
        this.config = config || {};
        this.token = token;
    }
    async atualizarChat() {
        return await this.update();
    }
    async deleteChat() {
        return await this.post();
    }
    async criarChat() {
        return await this.post();
    }
    async sendMsg() {
        this.url = '/api/chat/newMessages';

        return await this.post();
    }
    async getChatsInfo() {
    
        const Chat = await this.get();
        if (Chat.data) {
            return Chat.data
        }
        return [];
    }

   async getAllChatsInfo() {
    
        const allChat = await this.get();
        if (allChat.data) {
            return allChat.data
        }
        return [];
    }
    async getAllChats() {
        const allChat = await this.get();
        if (allChat.data) {
            return allChat.data
        }
        return [];
    }
    async getAllMessage() {
        const getAllMessage = await this.get();
        if(getAllMessage.data){
            return getAllMessage.data;
        }
        return [];
    }
    async getSincronizarAllContatosChats() {
        this.url = '/chat/contatos'
        const allContatos = await this.get();
        if(allContatos.data){
            return allContatos.data
        }
        return [];
    }
    async deletechatInfo() {
        this.url = '/api/chat/deletechatInfo';

        return await this.post();
    }

}

export default ChatService;
