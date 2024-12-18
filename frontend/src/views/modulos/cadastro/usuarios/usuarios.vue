<template src="./usuarios.html"></template>
<style scoped src="./usuarios.css"></style>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import { email } from '@/helpers/validacao';
import UsuarioModel from './model/usuarioModel';

import add from './components/add.vue';
import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';

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

import usuarioService from '@/service/usuario-service';

export default {
    setup() {
        useMeta({ title: 'Cadastro de Usuários' });
    },
    data() {
        return {
            acesso: {},
            add: false,
            page: 'Cadastro de Usuários',
            table: undefined,
            params: {
                nome: ''
            },
            showTabela: false,
            historico: [],
            historicoDescricao: null
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
        getAcesso() {
            this.acesso = Acesso.getAcesso('Cadastro', '/usuarios', this.permissao);
            console.log(this.acesso)
        },
        async init() {
            this.showTabela = false;

            const usuarioServ = new usuarioService(
                {}, this.token,
                `/api/usuario/todos/${this.cliente.id}`);
                
            this.data = await usuarioServ.getAllUsuarios();

            if (this.data) {
                setTimeout(() => {
                    this.showTabela = true;
                }, 500)
            }
        },
        edit(data) {
            this.add = !this.add;
            this.params = new UsuarioModel(data.data)
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
                const usuario = new UsuarioModel(this.params);


                if (usuario.id) {
                    const usuarioServ = new usuarioService(usuario, this.token);
                    await usuarioServ.AtualizarUsuario();

                }
                else {
                    usuario['empresa_configId'] = Number(this.cliente.id);
                    usuario.isTrusted ? delete usuarioServ.isTrusted : "";

                    const usuarioServ = new usuarioService(usuario, this.token);
                    const novoUsuario = await usuarioServ.criarUsuario();


                }
                this.init();

                this.showMessage(usuario.id ? 'Atualizado com Sucesso' : 'Salvo com Sucesso!');
                this.add = !this.add;

            } else {
                this.showMessage('Email não válido!', 'error');
            }


        },
        async delet(data) {
            this.params = data.data;

            if (this.params.id) {
                const usuarioServ = new usuarioService(this.params, this.token);
                await usuarioServ.deleteUsuario();

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
