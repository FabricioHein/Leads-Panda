<template src="./servicos.html"></template>

<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters, mapActions } from 'vuex';
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


import produtoService from '@/service/produto-service';

const fileToBlob = async (file) => new Blob([new Uint8Array(await file.arrayBuffer())], { type: file.type });


export default {
    setup() {
        useMeta({ title: 'Cadastro de Serviço' });
    },
    data() {
        return {
            add: false,
            page: 'Cadastro de Serviço',
            table: undefined,
            params: {
                nome: ''
            },
            showTabela: false
        }
    },
    components: {
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
        ...mapGetters(['usuario', 'cliente', 'token']),
    },
    created() {
        this.init();

    },
    methods: {
        async init() {
            this.showTabela = false;

            const produto = new produtoService(
                {}, this.token,
                `/api/produto/todos`);

            this.data = await produto.getAllProdutos();

            if (this.data) {

                setTimeout(() => {
                    this.showTabela = true;
                }, 500)
            }
            console.log(this.data)

        },
        change_file(event) {


        },
        async delet(data) {
            this.params = data.data;

            if (this.params.id) {
                const produtoServ = new produtoService(this.params, this.token);
                await produtoServ.deleteProduto();

            }
            this.init();

        },
        edit(data) {
            this.add = !this.add;
            this.params = data.data;
        },
        create() {
            this.add = !this.add;
            this.params = {}
        },
        back() {
            this.add = !this.add;
        },
        async save() {

            console.log(this.params)
            const produto = this.params;

            produto.operador = `Add/Atualizado por ${this.usuario.name} ${this.usuario.sobrenome}`;
            produto.empresa_configId = this.cliente.id

            if (produto.id) {
                const produtoServ = new produtoService(produto, this.token);
                await produtoServ.atualizarProduto();

            }
            else {

                produto.isTrusted ? delete produto.isTrusted : "";
                const produtoServ = new produtoService(produto, this.token);
                await produtoServ.criarProduto();

            }
            this.init();

            this.showMessage(produto.id ? 'Atualizado com Sucesso' : 'Salvo com Sucesso!');
            this.add = !this.add;

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
