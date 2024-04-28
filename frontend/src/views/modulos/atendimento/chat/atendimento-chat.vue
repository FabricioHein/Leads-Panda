<template>
    <div class="chat-system" style="height: 100%;">
        <div class="hamburger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-menu mail-menu d-lg-none">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </div>
        <div class="user-list-box" :class="{ 'user-list-box-show': is_show_user_menu }">
            <div class="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-search">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" v-model.trim="search_user" class="form-control" @keyup="search_users()"
                    placeholder="Procurar" />
            </div>

            <div class="panel-body justify-pill tabs">
                <ul class="nav nav-pills mb-3 mt-3 nav-fill" id="abertos-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="abertos-home-tab" data-bs-toggle="pill" href="#abertos-home"
                            role="tab" aria-controls="abertos-home" aria-selected="true">Abertos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="fechados-tab" data-bs-toggle="pill" href="#fechados" role="tab"
                            aria-controls="fechados" aria-selected="false">Fechados</a>
                    </li>
                </ul>
                <div class="tab-content" id="abertos-tabContent">
                    <div class="tab-pane fade show active" id="abertos-home" role="tabpanel"
                        aria-labelledby="abertos-home-tab">
                        <perfect-scrollbar class="people"
                            :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">

                            <div v-for="(person, index) in filterd_contact_list" class="person" :key="index"
                                :class="{ active: selected_user && selected_user.chat_id == person.chat_id }"
                                @click="select_user(person)">
                                <div class="user-info">
                                    <div class="f-head">
                                        <img :src="require(`@/assets/images/user-no-foto.png`)" alt="avatar" />
                                    </div>
                                    <div class="f-body">
                                        <div class="meta-info">
                                            <span class="user-name"
                                                :class="{ 'text-primary': selected_user && selected_user.chat_id == person.chat_id }">{{
                                                    person.nome }}</span>
                                            <span class="user-meta-time"
                                                :class="{ 'text-primary': selected_user && selected_user.chat_id == person.chat_id }">{{
                                                    person.telefone }}</span>
                                                <div class="f-head">
                                                    <i class="bi bi-whatsapp" v-if="person.chat_info && person.chat_info.type == 'WhatsApp'"></i>
                                                    <i class="bi bi-globe" v-if="person.chat_info &&  person.chat_info.type == 'web'" ></i>
                                        </div>
                                        </div>
                                        <!-- <span class="preview">{{ person.uuid }}</span> -->
                                    </div>
                                </div>
                            </div>
                        </perfect-scrollbar>
                    </div>
                    <div class="tab-pane fade" id="fechados" role="tabpanel" aria-labelledby="fechados-tab">
                        <perfect-scrollbar class="people"
                            :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">

                            <div v-for="(person, index) in filterd_contact_list_close" class="person" :key="index"
                                :class="{ active: selected_user && selected_user.chat_id == person.chat_id }"
                                @click="select_user(person)">
                                <div class="user-info">
                                    <div class="f-head">
                                        <img :src="require(`@/assets/images/user-no-foto.png`)" alt="avatar" />
                                    </div>
                                    <div class="f-body">
                                        <div class="meta-info">
                                            <span class="user-name"
                                                :class="{ 'text-primary': selected_user && selected_user.chat_id == person.chat_id }">{{
                                                    person.nome }}

                                            </span>
                                            <span class="user-meta-time"
                                                :class="{ 'text-primary': selected_user && selected_user.chat_id == person.chat_id }">{{
                                                    person.telefone }}</span>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </perfect-scrollbar>
                    </div>

                </div>
            </div>

        </div>
        <chatAtendimento  :chatProps="selected_user" :allMessages ="messages" :user="usuario.nome" v-if="selected_user" ></chatAtendimento>        
       
    </div>
    <!-- <tabelaLayoutVue>
        <div>
            <div class="painel-modelo">
                <div class="mt-container">
                    <div class="p-2">
                        <FunilSales :form="formProcesos"></FunilSales>
                    </div>
                    <div class="p-2" v-if="selected_user">
                        <label>Nome:</label>
                        <input class="form-control" v-model="selected_user.nome" type="text" />

                    </div>
                    <div class="p-2" v-if="selected_user">
                        <label>Nome:</label>
                        <label for="telefone">Telefone</label>
                        <input class="form-control" v-model="selected_user.telefone" type="text" />
                    </div>
                    <div class="p-2" v-if="selected_user">
                        <label>Chat Aberto:</label>
                        <select v-if="selected_user" v-model="selected_user.chat_open" class="form-control">
                            <option v-for="p in opcao" :key="p.id" :value="p.Opcao">
                                {{ p.descricao }}
                            </option>
                        </select>
                    </div>
                    <div class="p-2" v-if="selected_user">
                        <label>Canal:</label>
                        {{ selected_user.chat_app }}

                    </div>
                    <div class="p-2" v-if="selected_user">
                        <label>Oportunidade:</label>
                        <button type="button" class="p-2 btn rounded-circle btn-success" @click="ver(data)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-database-add" viewBox="0 0 16 16">
                                <path
                                    d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0" />
                                <path
                                    d="M12.096 6.223A4.92 4.92 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.493 4.493 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.525 4.525 0 0 1-.813-.927C8.5 14.992 8.252 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.552 4.552 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10c.262 0 .52-.008.774-.024a4.525 4.525 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4" />
                            </svg>
                        </button>

                    </div>

                    <div class="p-2" v-if="selected_user">
                        <label>ID:</label>
                        {{ selected_user.uuid }}

                    </div>

                </div>

            </div>
        </div>
    </tabelaLayoutVue> -->
</template>



<script >
import chatAtendimento from '@/views/components/chat/atendimento/chat-atendimento.vue';
import tabelaLayoutVue from '@/components/tabela-layout.vue';
import FunilSales from '@/views/components/FunilSales.vue';
import '@/assets/sass/apps/chat.scss';
import { useMeta } from '@/composables/use-meta';
import ChatService from '@/service/chat-service';
import { mapGetters } from 'vuex';

export default {
    components: {
        FunilSales,
        tabelaLayoutVue,
        chatAtendimento,
        
    },
    setup() {
        useMeta({ title: 'Atendimento Chat' });
    },
    data() {
        return {
            opcao: null,
            formProcesos: {
                projetoId: null,
                processoId: null
            },
            filterd_contact_list: [],
            filterd_contact_list_close: [],
            is_show_user_menu: true,
            contact_list: [],
            contact_list_close: [],
            selected_user: null,
            login_chat_id: 0,
            search_user: '',
            user: {},
            chatON: false,
            form: true,
            formData: {
                nome: '',
                telefone: '',
                email: ''
            },
            modal: false,
            typingMessage: '',
            chatData: null,
            messages: [],
            newMessage: '',
            load: false,
            chat: null,
        }
    },
    created() {
        if (!this.opcao) {
            this.opcao = this.sistema.enum.opcao;
        }

    },
    mounted() {     
        this.bind_contact_list();
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token', 'permissao', 'sistema']),
    },
    methods: {
        ver(data) {
            this.$router.push(`/crm/leads/`)
        },
        closechat() {
            this.chatON = false;
            this.form = false;
            this.$nextTick(() => {
                const chatBox = document.getElementById('chat-box');
                chatBox.style.display = 'none'
            });
        },
        scrollToBottom() {
            this.$nextTick(() => {
                const chatBox = document.getElementById('chat-box');
                chatBox.scrollTop = chatBox.scrollHeight;
            });
        },
        async select_user(chat) {            
            this.selected_user = chat;            
            const getAllMsg = new ChatService({}, this.token, `/api/chat/chatAllMsg/${this.selected_user.chat_id}`);
            this.messages = await getAllMsg.getAllMessage();
     


        },
        search_users() {
            this.filterd_contact_list = this.contact_list.filter((d) => (d.nome || d.telefone).toLowerCase().includes(this.search_user));
            this.filterd_contact_list_close = this.contact_list_close.filter((d) => (d.nome || d.telefone).toLowerCase().includes(this.search_user));

        },
        async bind_contact_list() {

            //close
            const contact_list_close = new ChatService({}, this.token, `/api/chat/todos/close/${this.cliente.id}`);
            this.contact_list_close = await contact_list_close.getAllChats();
            //open
            const contact_list = new ChatService({}, this.token, `/api/chat/todos/open/${this.cliente.id}`);
            this.contact_list = await contact_list.getAllChats();
            this.search_users();


        }
    }
}


</script>
