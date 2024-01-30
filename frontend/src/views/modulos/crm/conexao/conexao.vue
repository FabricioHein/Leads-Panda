<template src="./conexao.html"></template>
<style scoped src="./conexao.css"></style>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';

import WhatsappModel from './model/whtatsappModel';

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


// import whatsappService from '@/service/whatsapps-service';

const fileToBlob = async (file) => new Blob([new Uint8Array(await file.arrayBuffer())], { type: file.type });


export default {
    setup() {
        useMeta({ title: 'Nova de Conexão' });
    },
    data() {
        return {
            add: false,
            page: 'Nova Conexão',
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

            // const whatsapp = new whatsappService(
            //     {}, this.token,
            //     `/whatsapp/todos`);

            // this.data = await whatsapp.getAllWhatsapps();

            // if (this.data) {

            //     setTimeout(() => {
            //         this.showTabela = true;
            //     }, 500)
            // }
            console.log(this.data)

        },
        change_file(event) {


        },
        edit(data) {
            this.add = !this.add;
            this.params = new WhatsappModel(data.data)
        },
        create() {
            this.add = !this.add;
            this.params = {}
        },
        back() {
            this.add = !this.add;
        },
        async save() {

            const whatsapp = new WhatsappModel(this.params);

            if (whatsapp.id) {
                const whatsappServ = new whatsappService(whatsapp, this.token);
                await whatsappServ.atualizarWhatsapp()
            }
            else {

                whatsapp.isTrusted ? delete whatsapp.isTrusted : "";
                const whatsappServ = new whatsappService(whatsapp, this.token);
                await whatsappServ.criarWhatsapp();

            }
            this.init();
            this.showMessage(whatsapp.id ? 'Atualizado com Sucesso' : 'Salvo com Sucesso!');
            this.add = !this.add;

        },
        async delet(data) {
            this.params = data.data;

            if (this.params.id) {
                const whatsappServ = new whatsappService(this.params, this.token);
                await whatsappServ.deleteWhatsapp();

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
