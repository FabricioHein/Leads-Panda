<template src="./lista-chat-bot.html"></template>
<style scoped src="./lista-chat-bot.css"></style>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';


import add from './components/add.vue';

import {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxHeaderFilter,
    DxGroupPanel,
    DxGrouping,
    DxScrolling,
    DxPager,
    DxPaging,
    DxExport,
    DxColumnChooser,
    DxMasterDetail,
} from "devextreme-vue/data-grid";
import router from '@/router';


import ChatService from '@/service/chat-service';
import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';
       
import io from 'socket.io-client';
export default {
    setup() {
        useMeta({ title: 'Lista de Chat' });
    },
    data() {
        return {
            socket: null,
            acesso: null,
            add: false,
            page: 'Lista de Chat',
            table: undefined,
            params: {
              
            },
            showTabela: false,
        }
    },
    components: {
        page,
        add,
        //import tabela devextreme-vue
        DxDataGrid,
        DxColumn,
        DxFilterRow,
        DxHeaderFilter,
        DxGroupPanel,
        DxGrouping,
        DxScrolling,
        DxPager,
        DxPaging,
        DxExport,
        DxColumnChooser,
        DxMasterDetail,
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    },
    created() {
        this.init();
        this.getAcesso();
        this.socket = io();
    },
    methods: {
        getAcesso() {
            this.acesso = Acesso.getAcesso('Configuração', '/lista', this.permissao);

            console.log(this.acesso)
        },
        async init() {

            this.showTabela = false;
            const chat = new ChatService({}, this.token, `/api/chat/todos/getAllChatInfo/${this.cliente.id}`);
            
            this.data = await chat.getAllChatsInfo();

            if (this.data) {

                setTimeout(() => {
                    this.showTabela = true;
                }, 500)
            }
            console.log(this.data)

        },
        edit(data) {
           
            router.push(`/config/${data.data.uuid}`);       
            
          
        },
        async loadContatos() {
            this.showTabela = !this.showTabela;

            const chat = new ChatService({}, this.token, `/api/chat/todos/getAllChatInfo/${this.cliente.id}`)
            const sincronizar = await chat.getAllChatsInfo();

            if (sincronizar) {
                this.showTabela = !this.showTabela;
                this.showMessage('Sincronizad com Sucesso');
            }


        },
        create() {
            this.add = !this.add;
            this.params = {}
        },
        back() {
            this.add = !this.add;
        },  
        async delet(data) {
            this.params = data.data;
            console.log( this.params)
            if(this.params.type == 'WhatsApp-qrcode'){
                console.log(this.params.uuid)
                this.socket.emit('disconnected', {
                    uuid: this.params.uuid
                });

                // this.socket.on('remove-session', function(msg){
                //     this.showMessage(msg);
                // })
            }
            if (this.params.chat_info_id) {
                const chat = new ChatService(this.params, this.token);
                await chat.deletechatInfo();                
            }
            this.init();

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
};


</script>
