<template src="./chat-bot.html"></template>
<style src="./chat-bot.css" scoped></style>


<script >
import '@/assets/sass/drag-drop/drag-drop.css';
import chatService from '@/service/chat-service';
import { mapGetters } from 'vuex';
import ImportarService from '@/service/import-service';
import ChatUpdatedModel from './model/modelChat';

import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';

import fluxos from '../chat-bot/fluxos/fluxos.vue'
import { quillEditor } from 'vue3-quill';
import 'vue3-quill/lib/vue3-quill.css';

export default {
    props: {
        formData: {},
        descricao: {
            placeholder: 'Escreva',
            modules: {
                toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']],
            },
        }
    },
    data() {
        return {
            chatON: false,
            form: true,
            modal: false,
            typingMessage: '',
            messages: [
                {
                    id: 1,
                    avatar:
                        'https://gravatar.com/avatar/84950ab85c2d417b8a77d9dd1bce2829?s=400&d=robohash&r=x',
                    username: 'bot',
                    text: 'Bem-vindo, o que posso ajudar?',
                },
                {
                    id: 2,
                    username: 'voce',
                    text: 'Teste',
                }
            ],
            newMessage: '',
            load: false,
            acesso: null,
            formData: {
                nome: null,
                uuid: "",
                key_chatgpt: "chatgpt_key",
                key_facebook: "facebook_key",
                key_instagram: "instagram_key",
                key_whatsapp: "whatsapp_key",
                msg_inicial: `Olá! Bem-vindo, sou o Fabrício Hein. Como posso ajudar você hoje?
Estou aqui para tornar sua experiência mais fácil e eficiente. 😊
Para personalizar melhor nossa assistência, poderia informar seu nome, email e telefone, por favor?`,
                style: "Estilo do Chat",
                modelo_ai: null,
                bot_ativo: true,
                created_at: new Date(),
                updated_at: new Date(),
                cliente_id: null,
                chat: [
                    // Array de objetos chat, se aplicável
                ]
            },
            userMessageColor: '#7b55d3',
            botMessageColor: '##af92d8',
            backgroundColor: '#f0f0f0',
            buttonColor: '##af92d8',
            buttonTextColor: '#ffffff',
            messageFontSize: 14,
            avatarSize: 60,
            codigo: '',
            script: '',
            codigoCopiado: '',
            tipos_chats: [{
                id: 'web',
                title: 'web'
            },
            {
                id: 'whats',
                title: 'WhatsApp'
            }
            ]
        }

    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    },
    components: {
        page,
        fluxos,
        quillEditor
    },
    methods: {
        getChat() {

            console.log(this.formData)
            const url = `/chatCliente/${this.formData.cliente_id}/${this.formData.uuid}/usuario/teste`;

            console.log("aqui")
            this.$nextTick(() => {

                const container = document.getElementById('container-chat');
                // Cria um elemento <object> para carregar a página HTML
                const objectElement = document.createElement('object');
                objectElement.setAttribute('data', url);

                objectElement.style.display = 'flex';
                objectElement.style.width = '100%';
                objectElement.style.height = '100%';


                // Remove o elemento <object> anterior, se existir
                const existingObject = container.querySelector('object');
                if (existingObject) {
                    container.removeChild(existingObject);
                };
                // Adiciona o novo elemento <object> ao contêiner
                container.appendChild(objectElement);


            });

        },
        async init() {

            let id = (window.location.pathname).replace('/leads-ai-chatbot/', '');

            if (!id.match('novo')) {
                this.formData.msg_inicial = `Olá! Bem-vindo, sou o Fabrício Hein. Como posso ajudar você hoje? Por favor, digite sua pergunta ou escolha uma das opções abaixo para obter informações específicas. Estou aqui para tornar sua experiência mais fácil e eficiente. 😊
          Para personalizar melhor nossa assistência, poderia informar seu nome, email e telefone, por favor?`;


                const chat = new chatService({}, this.token, `/api/chat/getChatInfo/${id}`);
                const getChat = await chat.getChatsInfo();

                if (getChat) {
                    this.formData = getChat;
                    this.getChat();

                    if (this.formData.bot_foto) {
                       
                        this.messages[0].avatar = this.formData.bot_foto;


                    }
                }

                this.applyStyles();
            };
        },
        copiarCodigo() {

            const script = (this.codigo.replaceAll('script-----', 'script'))
            navigator.clipboard.writeText(script);

            this.showMessage('Copiado com Sucesso!, Insira o Código dentro da TAg "<body>" do Seu Site e Comece a Desfrutar do Chat Web!');

        },
        gerarCodigo() {

            this.codigo = `<div id="container"></div>
    <div id="carregarPaginaBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.920l-.240-.144-2.494.654.666-2.433-.156-.251a6.560 6.560 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.560 6.560 0 0 1 4.660 1.931a6.557 6.557 0 0 1 1.928 4.660c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.430.050-.197-.100-.836-.308-1.592-.985-.590-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346c.100-.114.133-.198.198-.330c.065-.134.034-.248-.015-.347c-.050-.099-.445-1.076-.612-1.470c-.160-.389-.323-.335-.445-.340c-.114-.007-.247-.007-.380-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654c0 .977.710 1.916.810 2.049c.098 .133 1.394 2.132 3.383 2.992c.470 .205 .840 .326 1.129 .418c.475 .152 .904 .129 1.246 .080c.380-.058 1.171-.480 1.338-.943c.164-.464 .164-.860 .114-.943c-.049-.084-.182-.133-.380-.232z"/>
        </svg>
    </div>    
    <script----->
        const carregarPaginaBtn = document.getElementById('carregarPaginaBtn');
        const container = document.getElementById('container');

        carregarPaginaBtn.style.cssText = "display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #4CAF50;
            color: #fff;
            font-size: 24px;
            position: fixed;
            bottom: 20px;
            right: 20px;
            cursor: pointer;";

        carregarPaginaBtn.addEventListener('click', () => {
            const objectElement = document.createElement('object');
            objectElement.setAttribute('data', '${process.env.VUE_APP_CHAT}/chatCliente/?clienteId=${this.cliente.id}&chave${this.formData.uuid}&atendimento=usuario/chat');
            objectElement.style.cssText = 'position: fixed; right: 20px; bottom: 25px; width: 25%; height: 80%; padding: 5px;';

            const existingObject = container.querySelector('object');
            if (existingObject) {
                container.removeChild(existingObject);
            }

            container.appendChild(objectElement);
        });
    </script----->
    `;


            return this.codigo

        },
        ver() {
            window.open(`/chatCliente/${this.cliente.id}/${this.formData.uuid}/usuario/teste`)

        },
        async createChat() {

            var data;
            if (this.validadeBot()) {
                if (this.formData.chat_info_id) {
                    this.formData.cliente_id = this.cliente.id;
                    data = new ChatUpdatedModel(this.formData);

                } else {
                    this.formData.cliente_id = this.cliente.id;
                    data = new ChatUpdatedModel(this.formData)

                    delete data['chat_info_id'];
                    data['uuid'] = self.crypto.randomUUID()

                }
                if (!this.formData.chat_info_id) {
                    const chat = new chatService(data, this.token, '/api/chat/createchatInfo');

                    const novoChat = await chat.criarChat();

                    this.formData = novoChat.data;

                    if (this.formData.chat_info_id) {
                        this.showMessage('Criado com Sucesso!');

                    } else {
                        this.showMessage('Erro para Criar!', 'error');
                    }


                } else {
                    const chat = new chatService(data, this.token, '/api/chat/updatechatInfo');
                    const updateChat = await chat.update();

                    if (updateChat.data) {
                        this.formData = updateChat.data;
                        this.showMessage('Atualizado com Sucesso!');
                        this.getChat();
                    } else {
                        this.showMessage('Erro para Atualizar!', 'error');

                    }
                }
            }

        },
        validadeBot() {

            if (!this.formData.bot_nome || this.formData.bot_nome == '') {
                this.showMessage('Insira um Nome para o Bot', 'error');
                return false;
            }
            if (!this.formData.msg_inicial || this.formData.msg_inicial == '') {
                this.showMessage('Insira uma Messagem Inicial', 'error');
                return false;
            }
            return true;

        },
        async change_file(event) {
            let formData = new FormData();
            formData.append('file', event.target.files[0]);
            console.log('>> formData >> ', formData);

            const importar = new ImportarService(
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                },
                this.token,
                `/api/importar/file/${this.usuario.id}`,
                formData
            );

            const upload = await importar.importarFile();
            if (upload.downloadURL) {
                this.formData.bot_foto = upload.downloadURL;
                this.showMessage('Imagem Carregada com Sucesso')
                this.messages[0].avatar = this.formData.bot_foto;
            }
        },
        scrollToBottom() {
            this.$nextTick(() => {
                const chatBox = document.getElementById('chat-box');
                chatBox.scrollTop = chatBox.scrollHeight;
            });
        },
        closechat() {
            this.chatON = false;
            this.form = false;
            this.$nextTick(() => {
                const chatBox = document.getElementById('chat-box');
                chatBox.style.display = 'none'
            });
        },
        messageClass(message) {
            return message.username === 'voce' ? 'user-message' : 'bot-message';
        },
        applyStyles() {
            // Aplicar estilos personalizados
            document.documentElement.style.setProperty('--user-message-color', this.formData.cor_conversa_user);
            document.documentElement.style.setProperty('--bot-message-color', this.formData.cor_conversa_atend);
            document.documentElement.style.setProperty('--background-color', this.formData.cor_fundo);
            document.documentElement.style.setProperty('--button-color', this.formData.cor_botao_enviar);
            // document.documentElement.style.setProperty('--message-font-size', this.messageFontSize + 'px');
            // document.documentElement.style.setProperty('--avatar-size', this.avatarSize + 'px');
        },
        sendMessage() {
            var msmSend = {
                id: this.messages.length + 1,
                avatar: 'https://gravatar.com/avatar/bb005e77609153d683d5bdcc61f97658?s=400&d=robohash&r=x',
                username: 'voce',
                text: this.newMessage
            }
            if (this.newMessage.trim() !== '') {
                this.messages.push(msmSend);
                this.newMessage = '';
                this.scrollToBottom();
            }

        },
        getAcesso() {
            this.acesso = Acesso.getAcesso('Chat Bot', '/novo', this.permissao);
            console.log('acesso', this.acesso)
        },
        submitForm() {
            // Envie os dados do formulário para o servidor ou realize a lógica de cadastro aqui
            console.log('Dados do formulário:', this.formData);
        },
        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: type,
                title: msg,
                padding: '10px 20px',
            });
        }

    },
    created() {
        this.getAcesso()
        this.init();


    },

};


</script>
