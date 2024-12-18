<template src="./formularios.html"></template>
<style scoped src="./formularios.css"></style>

<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';

import formularioModel from './model/formularioModel';


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
import FormularioService from '@/service/formulario-service';
import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';



export default {
    setup() {
        useMeta({ title: 'Formulários' });
    },
    data() {
        return {
            acesso: null,
            add: false,
            page: 'Formulários',
            table: undefined,
            params: {
                nome: ''
            },
            showTabela: false,
            listaAsk: false,
            data: [],
            askForm: undefined
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
        ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    },
    created() {
        this.init();
        this.getAcesso()

    },
    methods: {
        getAcesso() {
            this.acesso = Acesso.getAcesso('MKT', '/formulario/novo', this.permissao);
            console.log(this.acesso)
        },
        openUrl(data) {
            let link = `/formulario-ask/${data.data.url_formulario}`;
            window.open(link);

        },
        async init() {
            this.showTabela = false;

            const formulario = new FormularioService(
                {}, this.token,
                `/api/formulario/todos/${this.cliente.id}`);

            this.data = await formulario.getAllFormularios();
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
            console.log(data.data.id)
            router.push(`/mkt/formulario/${data.data.url_formulario}`);
        },
        getAskLista(data) {
            this.askForm = data.data.form_ask;
            this.askForm = this.askForm.map((i) => {

                let object = i.json;
                let obj = {};
                for (const key in object) {
                    obj['id'] = i.id
                    obj[object[key]['label']] = object[key]['value'];

                }
                console.log(obj)
                return obj;

            });

            this.listaAsk = !this.listaAsk;


        },
        create() {
            this.add = !this.add;
            this.params = {}
        },
        back() {
            this.add = !this.add;
        },
        async save() {
            const formulario = new formularioModel(this.params);
            formulario.operador = `Add/Atualizado por ${this.usuario.username} ${this.usuario.sobrenome}`;
            formulario.empresa_configId = this.cliente.id;

            if (formulario.id) {
                const formularioServ = new FormularioService(formulario, this.token);
                await formularioServ.atualizarformulario();

            }
            else {

                formulario['empresa_configId'] = Number(this.cliente.id);
                formulario.isTrusted ? delete formulario.isTrusted : "";
                const formularioServ = new FormularioService(formulario, this.token);
                await formularioServ.criarformulario();

            }
            this.init();

            this.showMessage(formulario.id ? 'Atualizado com Sucesso' : 'Salvo com Sucesso!');
            this.add = !this.add;

        },
        async delet(data) {
            this.params = data.data;

            if (this.params.id) {
                const formularioServ = new FormularioService(this.params, this.token);
                await formularioServ.deleteFormulario();

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
