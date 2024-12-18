<template src="./parametros.html"></template>
<style scoped src="./parametros.css"></style>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters, mapActions } from 'vuex';
import { useMeta } from '@/composables/use-meta';

import motivosModel from './model/motivosModel';

import add from './components/add-motivos.vue';

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


import motivosService from '@/service/motivos-service';



export default {
    setup() {
        useMeta({ title: 'Parâmetros' });
    },
    data() {
        return {
            acesso: null,
            add: false,
            page: 'Cadastro de Motivos',
            table: undefined,
            params: {
                nome: ''
            },
            showTabela: false
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
        ...mapGetters(['usuario', 'cliente', 'token', 'sistema', 'permissao']),
    },
    created() {
        this.init();
        this.getAcesso()

    },
    methods: {
        getAcesso() {
            this.acesso = Acesso.getAcesso('Configuração', '/parametros', this.permissao);
            console.log(this.acesso)
        },
        async init() {
            this.showTabela = false;

            const motivos = new motivosService(
                {}, this.token,
                `/api/task/getAllMotivos/${this.cliente.id}`);

            this.data = await motivos.getAllMotivos();

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
            this.params = new motivosModel(data.data)
        },
        create() {
            this.add = !this.add;
            this.params = {}
        },
        back() {
            this.add = !this.add;
        },
        async save() {

            const motivos = new motivosModel(this.params);
            if (motivos.id) {
                const motivosServ = new motivosService(motivos, this.token);
                await motivosServ.atualizarMotivos();

            }
            else {

                motivos['empresa_configId'] = Number(this.cliente.id);
                motivos.isTrusted ? delete motivos.isTrusted : "";
                const motivosServ = new motivosService(motivos, this.token);
                await motivosServ.criarMotivos();

            }
            this.init();

            this.showMessage(motivos.id ? 'Atualizado com Sucesso' : 'Salvo com Sucesso!');
            this.add = !this.add;

        },
        async delet(data) {
            this.params = data.data;

            if (this.params.id) {
                const motivosServ = new motivosService(this.params, this.token);
                await motivosServ.deleteMotivos()

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
