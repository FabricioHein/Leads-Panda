<template src="./clientes.html"></template>
<style scoped src="./clientes.css"></style>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import { email } from '@/helpers/validacao'

import ClienteModel from './model/clienteModel';

import add from './components/add.vue';
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
import historicoVue from '@/views/components/historico.vue';

import clienteService from '@/service/cliente-service';

export default {
    setup() {
        useMeta({ title: 'Cadastro de Clientes' });
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
        add,
        historicoVue,
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
            this.acesso = Acesso.getAcesso('Cadastro', '/clientes', this.permissao);
            console.log(this.acesso)
        },
        async init() {
            this.showTabela = false;

            const cliente = new clienteService(
                {}, this.token,
                `/api/clientes/todos/${this.cliente.id}`);
            this.data = await cliente.getAllClientes();
            if (this.data) {

                setTimeout(() => {
                    this.showTabela = true;
                }, 500)
            }

        },
        edit(data) {
            this.add = !this.add;
            this.params = new ClienteModel(data.data);

            if(data.data['data_nascimento']){              

                this.params['data_nascimento'] =  DateTime.DateToStringUS(data.data['data_nascimento'])
            }
        },
        create() {
            this.add = !this.add;
            this.params = {}
        },
        back() {
            this.add = !this.add;
        },
        async sendHistorico() {

            if (this.params) {
                const clienteServ = new clienteService({
                    clienteId: Number(this.params.id),
                    chave: "histórico do cliente",
                    valor: this.historicoDescricao,
                    operador: this.usuario.nome,
                }, this.token);
                const historico = await clienteServ.criarHistoricoCliente();

                this.params.historico_cliente.push(historico.data);
                this.showMessage('Salvo com Sucesso!');
            }


        },
        async save() {
            let validarEmail = email(String(this.params.email));

            if (validarEmail) {
                const cliente = new ClienteModel(this.params);
                delete cliente.historico_cliente;
                if (cliente.id) {
                    const clienteServ = new clienteService(cliente, this.token);
                    await clienteServ.atualizarCliente();

                    const historicoService = new clienteService({
                        clienteId: Number(cliente.id),
                        chave: "Atualização Cliente",
                        valor: "Atualização Dados do Cliente",
                        operador: this.usuario.name,
                    }, this.token);

                    const historico = await historicoService.criarHistoricoCliente();
                    this.params.historico_cliente.push(historico.data);
                }
                else {
                    cliente['configuracaoClienteId'] = Number(this.cliente.id);
                    cliente.isTrusted ? delete cliente.isTrusted : "";
                    const clienteServ = new clienteService(cliente, this.token);
                    const novoCliente = await clienteServ.criarCliente();

                    const historicoService = new clienteService({
                        clienteId: Number(novoCliente.id),
                        chave: "Novo Cliente",
                        valor: "Novo Cliente",
                        operador: this.usuario.name,
                    }, this.token);

                    await historicoService.criarHistoricoCliente();
                }
                this.init();

                this.showMessage(cliente.id ? 'Atualizado com Sucesso' : 'Salvo com Sucesso!');
                this.add = !this.add;

            } else {
                this.showMessage('Email não válido!', 'error');
            }


        },
        async delet(data) {
            this.params = data.data;

            if (this.params.id) {
                const clienteServ = new clienteService(this.params, this.token);
                await clienteServ.deleteCliente();

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
