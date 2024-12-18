<template src="./vendas.html"></template>
<style scoped src="./vendas.css"></style>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters, mapActions } from 'vuex';
import { useMeta } from '@/composables/use-meta';

// import ProdutoModel from './vendas/model/produtoModel';

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
        useMeta({ title: 'Visualização Geral de Vendas' });
    },
    data() {
        return {
            add: false,
            page: 'Visualização Geral de Vendas',
            table: undefined,
            params: {
                nome: ''
            },
            showTabela: false
        }
    },
    components: {
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
                { empresa_configId: this.cliente.id, }, this.token,
                `/produto/todos/${this.cliente.id}`);

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
        edit(data) {
            this.add = !this.add;
            // this.params =  new ProdutoModel(data.data)
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

            if (this.params.id) {
                const produtoServ = new produtoService(this.params, this.token);
                await produtoServ.deleteProduto();

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
