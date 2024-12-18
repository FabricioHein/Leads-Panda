<template src="./fornecedores.html"></template>
<style scoped src="./fornecedores.css"></style>
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

import fornecedorService from '@/service/fornecedores-service';
import FornecedoresModel from './model/fornecedoresModel'

// const fileToBlob = async (file) => new Blob([new Uint8Array(await file.arrayBuffer())], { type: file.type });


export default {
    setup() {
        useMeta({ title: 'Cadastro de Fornecedores' });
    },
    data() {
        return {
            add: false,
            page: 'Cadastro de Fornecedores',
            table: undefined,
            params: { },
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

            const fornecedor = new fornecedorService(
                {}, this.token,
                `/fornecedor/todos`);

            this.data = await fornecedor.getAllFornecedor();

            if (this.data) {

                setTimeout(() => {
                    this.showTabela = true;
                }, 500)
            }
            console.log(this.data)

        },
        change_file(event) {


        },
        async delet(data){
            this.params = data.data;

            if (this.params.id) {
                const fornecedor = new fornecedorService(this.params, this.token);
                await fornecedor.deleteFornecedor();

            }
            this.init();

        },
        edit(data) {
            this.add = !this.add;
            this.params = new FornecedoresModel(data.data);
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
            const produto = new FornecedoresModel(this.params);

            produto.operador = `Add/Atualizado por ${this.usuario.name} ${this.usuario.sobrenome}`;
            produto.empresa_configId = this.cliente.id

            if (produto.id) {
                const fornecedor = new fornecedorService(produto, this.token);
                await fornecedor.atualizarFornecedor();

            }
            else {

                produto.isTrusted ? delete produto.isTrusted : "";
                const fornecedor = new fornecedorService(produto, this.token);
                await fornecedor.criarFornecedor();

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
