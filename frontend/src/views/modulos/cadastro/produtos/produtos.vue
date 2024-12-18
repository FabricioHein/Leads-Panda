<template src="./produtos.html"></template>
<style scoped src="./produtos.css"></style>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters, mapActions } from 'vuex';
import { useMeta } from '@/composables/use-meta';

import ProdutoModel from './model/produtoModel';

import add from './components/add-produto.vue';
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


import produtoService from '@/service/produto-service';



export default {
    setup() {
        useMeta({ title: 'Cadastro de Serviços' });
    },
    data() {
        return {
            acesso: null,
            add: false,
            page: 'Cadastro de Produtos / Serviços',
            table: undefined,
            params: {
                nome: ''
            },
            showTabela: false
        }
    },
    components: {
        add,
        page,
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
            this.acesso = Acesso.getAcesso('Cadastro', '/produtos', this.permissao);
            console.log(this.acesso)
        },
        async init() {
            this.showTabela = false;

            const produto = new produtoService(
                {}, this.token,
                `/api/produto/todos/${this.cliente.id}`);

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
            this.params =  new ProdutoModel(data.data)
        },
        create() {
            this.add = !this.add;
            this.params = {}
        },
        back() {
            this.add = !this.add;
        },
        async save() {

       

            const produto = new ProdutoModel(this.params);

            if(!produto.codigo || !produto.nome || !produto.preco_venda ){
                this.showMessage('Erro: Preencha todos os campos para Salvar!', 'error');
                return
            };

            produto.operador = `Add/Atualizado por ${this.usuario.username} ${this.usuario.sobrenome}`;
            produto.empresa_configId = this.cliente.id;
            
            if (produto.id) {
                const produtoServ = new produtoService(produto, this.token);
                await produtoServ.atualizarProduto();

            }
            else {

                produto['empresa_configId'] = Number(this.cliente.id);
                produto.isTrusted ? delete produto.isTrusted : "";
                const produtoServ = new produtoService(produto, this.token);
                await produtoServ.criarProduto();

            }
            this.init();

            this.showMessage(produto.id ? 'Atualizado com Sucesso' : 'Salvo com Sucesso!');
            this.add = !this.add;

        },
        async delet(data){
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
