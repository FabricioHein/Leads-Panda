<template src="./atividade.html"></template>
<style scoped src="./atividade.css"></style>

<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import page from '@/views/components/page.vue';

import TaskService from '@/service/task-service';
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

import Acesso from '@/helpers/Acesso'

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
            status: [{
                label: 'Pendente',
                value: 'pending'
            },
            {
                label: 'Aberto',
                value: 'open'
            },
            {
                label: 'Finalizado',
                value: 'closed'
            }],
            dataInicio: null,
            dataFinal: null,
            selectedStatus: null,
            showTabela: false
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
        this.getAcesso()

    },
    methods: {
        getAcesso(){
         this.acesso = Acesso.getAcesso('CRM', '/atividades', this.permissao);
         console.log(this.acesso)
        },
        ver(data){
            console.log(data)
            this.$router.push(`/crm/leads/${data.data.taskId}`)
        },
        setStatus(e) {
            this.selectedStatus = e.target.value;
        },
        async btnFilter() {
            let body = {};
            this.isLoading = !this.isLoading;

            if (this.selectedStatus) {
                body['status'] = this.selectedStatus
            }

            if (this.dataInicio) {
                body['dataInicio'] = this.dataInicio
            }
            if (this.dataFinal) {
                body['dataFinal'] = this.dataFinal
            }

            const taskSub = new TaskService(body, this.token, `/api/task/tasksubs/getVisaoGeralTaskSub/${this.cliente.id}`);

            this.data = await taskSub.getVisaoGeralTaskSub();

            if (this.data) {

                this.showMessage('Busca realizada com Sucesso');
                this.isLoading = !this.isLoading;

                setTimeout(() => {
                    this.showTabela = true;
                }, 500)

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
