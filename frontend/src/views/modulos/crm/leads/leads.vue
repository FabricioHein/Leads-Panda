<template src="./leads.html"></template>
<style scoped src="./leads.css"></style>

<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';

import motivosService from '@/service/motivos-service';
import produtoService from '@/service/produto-service';
import usuarioService from '@/service/usuario-service';
import ProjetoService from '@/service/projeto-service';

import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import TaskService from '@/service/task-service';

import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';

import { DxDataGrid, DxColumn, DxFilterRow, DxHeaderFilter, DxGroupPanel, DxGrouping, DxScrolling, DxPager, DxPaging, DxExport, DxColumnChooser, DxMasterDetail } from 'devextreme-vue/data-grid';

export default {
    setup() {
        useMeta({ title: 'Atividades' });
    },
    data() {
        return {
            acesso: null,
            data: [],
            page: 'Atividades',
            table: undefined,
            isLoading: false,
            status: [
                {
                    label: 'Pendente',
                    value: 'pending',
                },
                {
                    label: 'Aberto',
                    value: 'open',
                },
                {
                    label: 'Finalizado',
                    value: 'closed',
                },
            ],
            dataInicio: null,
            seletedPrevisao: null,
            selectedStatus: null,
            selectedMotivos: null,
            selectedProcesso: null,
            selectedProdutos: null,
            selectedVendedor: null,
            selectedTemperatura: null,
            showTabela: false,
            motivos: null,
            produtos: null,
            vendedor: null,
            funil: [],
            processos: null,
            statusTemperatura: [
                {
                    value: 'frio',
                    nome: 'Frio - ✩',
                },
                {
                    value: 'morno',
                    nome: 'Morno - ✩✩',
                },
                {
                    value: 'quente',
                    nome: 'Quente - ✩✩✩',
                },
            ],
        };
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
    async created() {
        this.getAcesso();

        if (!this.processos) {
            const processos = new ProjetoService({}, this.token, `/api/projeto/todos/${this.cliente.id}`);
            this.processos = await processos.getAllProjeto();
            console.log('this.processos', this.processos);
        }

        if (!this.motivos) {
            const motivos = new motivosService({}, this.token, `/api/task/getAllMotivos/${this.cliente.id}`);
            this.motivos = await motivos.getAllMotivos();
        }
        if (!this.produtos) {
            const produto = new produtoService({}, this.token, `/api/produto/todos/${this.cliente.id}`);
            this.produtos = await produto.getAllProdutos();
        }
        if (!this.vendedor) {
            const usuarioServ = new usuarioService({}, this.token, `/api/usuario/todos/${this.cliente.id}`);
            this.vendedor = await usuarioServ.getAllUsuarios();
            console.log(this.vendedor);
        }
    },
    methods: {
        getAcesso() {
            this.acesso = Acesso.getAcesso('CRM', '/leads', this.permissao);
            console.log(this.acesso)
        },
        ver(data) {
            console.log(data);
            this.$router.push(`/crm/leads/${data.data.id}`);
        },
        clearFiltro() {
            console.log(this.selectedTemperatura);
            this.seletedPrevisao = null;
            this.selectedStatus = null;
            this.selectedMotivos = null;
            this.selectedProcesso = null;
            this.selectedProdutos = null;
            this.selectedVendedor = null;
            this.selectedTemperatura = null;
        },

        async btnFilter() {
            let body = {};
            this.isLoading = !this.isLoading;

            if (this.selectedTemperatura) {
                body['temperatura'] = this.selectedTemperatura;
            }
            if (this.selectedProcesso) {
                body['projeto'] = this.selectedProcesso;
            }
            if (this.seletedPrevisao) {
                body['previsao'] = this.seletedPrevisao;
            }
            if (this.selectedStatus) {
                body['status'] = this.selectedStatus;
            }
            if (this.selectedVendedor) {
                body['vendedor'] = this.selectedVendedor;
            }
            if (this.selectedProdutos) {
                body['produto'] = this.selectedProdutos;
            }
            if (this.selectedMotivos) {
                body['motivos'] = this.selectedMotivos;
            }

            if (Object.keys(body).length != 0) {
                const taskSub = new TaskService(body, this.token, `/api/task/getVisaoGeralTask/${this.cliente.id}`);

                this.data = await taskSub.getVisaoGeralTaskSub();

                if (this.data) {
                    this.showMessage('Busca realizada com Sucesso');
                    this.isLoading = !this.isLoading;

                    setTimeout(() => {
                        this.showTabela = true;
                    }, 500);
                }
            } else {
                this.showMessage('Selecione uma Opção', 'error');
            }
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
