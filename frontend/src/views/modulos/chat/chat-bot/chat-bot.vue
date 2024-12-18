<template src="./chat-bot.html"></template>
<style src="./chat-bot.css" scoped></style>

<script>
    import CodeHighlighter from '@/components/code.vue'; // Ajuste o caminho conforme necessário

    import '@/assets/sass/authentication/auth-boxed.scss';
    import '@/assets/sass/authentication/auth.scss';
    import '@/assets/sass/drag-drop/drag-drop.css';
    import chatService from '@/service/chat-service';
    import { mapGetters } from 'vuex';
    import ChatUpdatedModel from './model/modelChat';
    import InputVue from '@/components/Input-validate.vue';
    import Acesso from '@/helpers/Acesso';
    import page from '@/views/components/page.vue';

    import { quillEditor } from 'vue3-quill';
    import 'vue3-quill/lib/vue3-quill.css';
    import router from '@/router';

    import io from 'socket.io-client';

    export default {
        props: {
            formData: {},
            descricao: {
                placeholder: 'Escreva',
                modules: {
                    toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']],
                },
            },
        },
        data() {
            return {
                load: false,
                socket: null,
                statusQrcode: false,
                base64Image: '',
                codigoJs: '',
                etapa: 0,
                createChatParams: false,
                chatON: false,
                form: true,
                modal: false,
                typingMessage: '',
                selectedIcone: {
                    svg: '',
                },
                messages: [
                    {
                        id: 1,
                        avatar: 'https://gravatar.com/avatar/84950ab85c2d417b8a77d9dd1bce2829?s=400&d=robohash&r=x',
                        username: 'bot',
                        text: 'Bem-vindo, o que posso ajudar?',
                    },
                    {
                        id: 2,
                        username: 'voce',
                        text: 'Teste',
                    },
                ],
                icones: [
                    {
                        value: 'Chat Dots',
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16"><path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
</svg>`,
                    },
                ],
                token_whatsapp: false,
                verTokenKey_chatgpt: false,
                verorganization_chatgpt: false,
                verToverTokenWa: false,
                verTokapp_secret_whatsappen: false,
                newMessage: '',
                load: false,
                acesso: null,
                formData: {
                    bot_nome: null,
                    uuid: '',
                    type: null,
                    key_chatgpt: 'chatgpt_key',
                    key_facebook: 'facebook_key',
                    key_instagram: 'instagram_key',
                    key_whatsapp: 'whatsapp_key',
                    msg_inicial: `Olá! Bem-vindo, sou o Agente Virtual. Como posso ajudar você hoje? Estou aqui para tornar sua experiência mais fácil e eficiente. 😊
                Para personalizar melhor nossa assistência, poderia informar seu nome, email e telefone, por favor?`,
                    style: 'Estilo do Chat',
                    modelo_ai: null,
                    bot_ativo: true,
                    created_at: new Date(),
                    updated_at: new Date(),
                    empresa_configId: null,
                    chat: [
                        // Array de objetos chat, se aplicável
                    ],
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
                iconWeb: '',
                codigoCopiado: '',
                tipos_chats: [
                    {
                        id: 'web',
                        title: 'web',
                    },
                    {
                        id: 'whats',
                        title: 'WhatsApp',
                    },
                ],
                html: [
                    {
                        id: 1,
                        html: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.920l-.240-.144-2.494.654.666-2.433-.156-.251a6.560 6.560 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.560 6.560 0 0 1 4.660 1.931a6.557 6.557 0 0 1 1.928 4.660c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.430.050-.197-.100-.836-.308-1.592-.985-.590-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.100-.114.133-.198.198-.330.065-.134.034-.248-.015-.347-.050-.099-.445-1.076-.612-1.470-.160-.389-.323-.335-.445-.340-.114-.007-.247-.007-.380-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.710 1.916.810 2.049.098.133 1.394 2.132 3.383 2.992.470.205.840.326 1.129.418.475.152.904.129 1.246.080.380-.058 1.171-.480 1.338-.943.164-.464.164-.860.114-.943-.049-.084-.182-.133-.380-.232z"
                          />
                 </svg>`,
                    },

                    {
                        id: 2,
                        html: ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
               <path
                   d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                     />
                  </svg>`,
                    },
                    {
                        id: 3,
                        html: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.920l-.240-.144-2.494.654.666-2.433-.156-.251a6.560 6.560 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.560 6.560 0 0 1 4.660 1.931a6.557 6.557 0 0 1 1.928 4.660c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.430.050-.197-.100-.836-.308-1.592-.985-.590-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.100-.114.133-.198.198-.330.065-.134.034-.248-.015-.347-.050-.099-.445-1.076-.612-1.470-.160-.389-.323-.335-.445-.340-.114-.007-.247-.007-.380-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.710 1.916.810 2.049.098.133 1.394 2.132 3.383 2.992.470.205.840.326 1.129.418.475.152.904.129 1.246.080.380-.058 1.171-.480 1.338-.943.164-.464.164-.860.114-.943-.049-.084-.182-.133-.380-.232z"
              />`,
                    },
                    {
                        id: 4,
                        html: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
                   <path
                          d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                                                                        />
             </svg>`,
                    },
                ],
            };
        },
        computed: {
            ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
        },
        components: {
            CodeHighlighter,
            page,
            quillEditor,
            InputVue,
        },
        methods: {
            handleImageUpload(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.buttonImage = e.target.result;
                    };
                    reader.readAsDataURL(file);
                } else {
                    this.buttonImage = null;
                }
            },
            arrayBufferToBase64(buffer) {
                let binary = '';
                const bytes = new Uint8Array(buffer);
                const len = bytes.byteLength;
                for (let i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                return window.btoa(binary);
            },
            async gerarQrCode() {
                document.getElementById('add-loader').innerHTML = '<div class="loader dual-loader mx-auto" ></div>';
                this.load = false;
                let createChat = await this.createChat();

                if (createChat) {
                    this.socket.emit('create-session', {
                        uuid: this.formData.uuid + this.cliente.id,
                    });

                    this.socket.on('qrCode', function (data) {
                        if (data && data.src) {
                            this.base64Image = data.src;
                            document.getElementById('imagemContainer').innerHTML = '';
                            console.log(this.base64Image);
                            const img = document.createElement('img');
                            img.src = this.base64Image;

                            // Adiciona a imagem ao elemento desejado (por exemplo, um elemento com id "imagemContainer")
                            document.getElementById('imagemContainer').appendChild(img);
                            document.getElementById('add-loader').innerHTML = '';
                        }
                    });

                    this.socket.on('message', function (data) {
                        if (data.text == 'conected') {
                            document.getElementById('imagemContainer').innerHTML = `<div class="card-body" >
                                <i class="fas fa-check-circle fa-3x icon-success"></i>
                                <h4 class="mb-4 mt-2">WhatsApp Conectado!</h4>
                            </div>`;
                        }
                    });
                }
            },

            verToken(elem) {
                if (elem == 'key_chatgpt') {
                    this.verTokenKey_chatgpt = !this.verTokenKey_chatgpt;
                }
                if (elem == 'organization_chatgpt') {
                    this.verorganization_chatgpt = !this.verorganization_chatgpt;
                }
                if (elem == 'token_whatsapp') {
                    this.token_whatsapp = !this.token_whatsapp;
                }
                if (elem == 'app_secret_whatsapp') {
                    this.verTokapp_secret_whatsappen = !this.verTokapp_secret_whatsappen;
                }
                if (elem == 'wa_id_numero_telefone') {
                    this.verToverTokenWa = !this.verToverTokenWa;
                }
                this.$nextTick(() => {
                    var x = document.getElementById(elem);
                    if (x.type === 'password') {
                        x.type = 'text';
                    } else {
                        x.type = 'password';
                    }
                });
            },
            nextEtapa() {
                this.etapa = this.etapa + 1;
            },
            selectOption(type) {
                this.formData.type = type;
                this.nextEtapa();
            },
            getChat() {
                const url = `/chatCliente/${this.formData.uuid}/usuario/teste`;
                this.$nextTick(() => {
                    if (this.formData.type == 'web') {
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
                        }
                        // Adiciona o novo elemento <object> ao contêiner
                        container.appendChild(objectElement);
                    }
                });
            },
            async init() {
                let id = window.location.pathname.replace('/config/', '');

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
                } else {
                    this.createChatParams = true;
                }
            },
            selectOptionImg(id) {
                var data = this.html.find(html => html.id === id);
                this.iconWeb = data.html;
                this.showMessage('Selecionado com Sucesso!');
            },
            copiarCodigo() {
                this.gerarCodigo();

                const script = this.codigo.replaceAll('script-----', 'script');
                navigator.clipboard.writeText(script);
                this.showMessage('Copiado com Sucesso!, Insira o Código dentro da TAg "script" do Seu Site e Comece a Desfrutar do Chat Web!');
            },
            gerarCodigo() {
                this.codigo = `<div id="container"></div>
                <div id="btn-chat">
                ${this.iconWeb}
                </div>    
        <script----->
            var btnChat = document.getElementById('btn-chat');
            var container = document.getElementById('container');
    
             btnChat.style.display = "flex";
            btnChat.style.justifyContent = "center";
            btnChat.style.alignItems = "center";
            btnChat.style.width = "40px";
            btnChat.style.height = "40px";
            btnChat.style.borderRadius = "50%";
            btnChat.style.backgroundColor = "#4CAF50";
            btnChat.style.color = "#fff";
            btnChat.style.fontSize = "24px";
            btnChat.style.position = "fixed";
            btnChat.style.bottom = "20px";
            btnChat.style.right = "20px";
            btnChat.style.cursor = "pointer";
    
            btnChat.addEventListener('click', () => {
                var objectElement = document.createElement('object');
                objectElement.setAttribute('data', '${process.env.VUE_APP_FRONT}/chatCliente/${this.formData.uuid}/usuario/getchat');
                objectElement.style.cssText = 'position: fixed; right: 20px; bottom: 25px; width: 25%; height: 80%; padding: 5px; border-radius: 2.5%;';
    
                var existingObject = container.querySelector('object');
                if (existingObject) {
                    container.removeChild(existingObject);
                       return;
                };    
                container.appendChild(objectElement);
            });
        </script----->`;
                return this.codigo;
            },
            ver() {
                window.open(`/chatCliente/${this.formData.uuid}/usuario/teste`);
            },
            async createChat() {
                var data;

                if (this.validadeBot()) {
                    if (this.formData.chat_info_id) {
                        this.formData.empresa_configId = this.cliente.id;
                        data = new ChatUpdatedModel(this.formData);
                    } else {
                        this.formData.empresa_configId = this.cliente.id;
                        data = new ChatUpdatedModel(this.formData);

                        delete data['chat_info_id'];
                        data['uuid'] = self.crypto.randomUUID();
                    }
                    if (!this.formData.chat_info_id) {
                        const chat = new chatService(data, this.token, '/api/chat/createchatInfo');

                        const novoChat = await chat.criarChat();
                        this.formData = novoChat.data;
                        if (this.formData.chat_info_id) {
                            this.showMessage('Criado com Sucesso!');

                            router.push(`/config/${this.formData.uuid}`);
                            this.createChatParams = false;
                        } else {
                            this.showMessage(this.formData.msg, 'error');
                            router.push('/');
                        }
                    } else {
                        const chat = new chatService(data, this.token, '/api/chat/updatechatInfo');
                        const updateChat = await chat.update();

                        if (updateChat.data) {
                            this.formData = updateChat.data;
                            this.showMessage('Atualizado com Sucesso!');
                            this.getChat();
                            console.log(this.formData.uuid);
                        } else {
                            this.showMessage('Erro para Atualizar!', 'error');
                        }
                    }
                }

                return true;
            },
            validadeBot() {
                if (!this.formData.type) {
                    return false;
                }

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
                    chatBox.style.display = 'none';
                });
            },
            messageClass(message) {
                return message.username === 'voce' ? 'user-message' : 'bot-message';
            },
            async change_file(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.iconWeb = e.target.result;
                        this.showMessage('Carregado com Sucesso');
                    };
                    reader.readAsDataURL(file);
                }
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
                    text: this.newMessage,
                };
                if (this.newMessage.trim() !== '') {
                    this.messages.push(msmSend);
                    this.newMessage = '';
                    this.scrollToBottom();
                }
            },
            getAcesso() {
                this.acesso = Acesso.getAcesso('Configuração', '/novo', this.permissao);
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
            },
        },
        created() {
            this.getAcesso();
            this.init();
            this.socket = io();
        },
        botMessageColor() {},
    };
</script>
