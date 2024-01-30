<template src="./atendimento.html"></template>
<style scoped src="./atendimento.css"></style>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';

import ContatosModel from './model/contatosModel';

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

import { email } from '@/helpers/validacao'

import ContatosService from '@/service/contatos-service';
import ChatService from '@/service/chat-service';
import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';

export default {
    setup() {
        useMeta({ title: 'Cadastro de Contatos' });
    },
    data() {
        return {
            acesso: null,
            add: false,
            page: 'Cadastro de Contatos',
            table: undefined,
            params: {
                nome: ''
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
        this.getAcesso()

    },
    methods: {
        getAcesso(){
         this.acesso = Acesso.getAcesso('Cadastro', '/contatos', this.permissao);
         console.log(this.acesso)
        },
        async init() {

            this.showTabela = false;
            const contatos = new ContatosService(
                {}, this.token,
                `/api/contatos/todos/${this.cliente.id}`);

            this.data = await contatos.getAllContatos();

            if (this.data) {

                setTimeout(() => {
                    this.showTabela = true;
                }, 500)
            }
            console.log(this.data)

        },
        edit(data) {
            console.log(data)
            this.add = !this.add;
            this.params = new ContatosModel(data.data)
        },
        async loadContatos() {
            this.showTabela = !this.showTabela;

            const contatos = new ChatService({}, '')
            const sincronizar = await contatos.getSincronizarAllContatosChats();

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
        async save() {
            let validarEmail = email(String(this.params.email));
            if (validarEmail) {
                const contatos = new ContatosModel(this.params)

                if (contatos.id) {
                    const contatosServ = new ContatosService(contatos, this.token);
                    await contatosServ.atualizarContatos();

                }
                else {

                    contatos["configuracaoClienteId"] = Number(this.cliente.id);

                    contatos.isTrusted ? delete contatos.isTrusted : "";
                    const contatosServ = new ContatosService(contatos, this.token);
                    await contatosServ.criarContatos();

                }
                this.init();

                this.showMessage(contatos.id ? 'Atualizado com Sucesso' : 'Salvo com Sucesso!');
                this.add = !this.add;

            }else{
                this.showMessage('Email não válido!', 'error');
            }

        },
        async delet(data) {
            this.params = data.data;

            if (this.params.id) {
                const contatosServ = new ContatosService(this.params, this.token);
                await contatosServ.deleteContatos();

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
