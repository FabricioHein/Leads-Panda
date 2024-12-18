<template src="./link-lista.html"></template>
<style scoped src="./link-lista.css"></style>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import router from '@/router';
import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';

import { DateTime } from '@/helpers/DateTime';

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

import LinkService from '@/service/link-service';

export default {
    setup() {
        useMeta({ title: 'Todos os Links' });
    },
    data() {
        return {
            acesso: {},
            add: false,
            page: 'Cadastro de Clientes',
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

    },
    methods: {
        getAcesso() {
            this.acesso = Acesso.getAcesso('Meu Link', '/lista-links', this.permissao);
            console.log(this.acesso)
        },
        async init() {
            this.showTabela = false;

            const link = new LinkService(
                {}, this.token,
                `/api/pageLink/todos/${this.cliente.id}`);
            this.data = await link.getLink();
            if (this.data) {
                console.log(this.data)

                setTimeout(() => {
                    this.showTabela = true;
                }, 500)
            }

        },
        edit(data) {
            router.push(`/meus-link/linkCreate/${data.data.id}`);
        },
        create() {
            this.add = !this.add;
            this.params = {}
        },
        back() {
            this.add = !this.add;
        },
        async save() {

        },
        async delet(data) {
            this.params = data.data;
            if (this.params.id) {
                const link = new LinkService(this.params, this.token);
                await link.deleteLink();
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
