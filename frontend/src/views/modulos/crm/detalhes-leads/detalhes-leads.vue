<template src="./detalhes-leads.html"></template>
<style scoped src="./detalhes-leads.css"></style>

<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';


import add from './components/add.vue';
import tarefas from './components/tarefas.vue';
import anotacao from './components/anotacao.vue';
import TaskService from '@/service/task-service';
import email from './components/email.vue';
import file from './components/file.vue'
import TaskCrmService from '@/service/task-service';
import historicoVue from '@/views/components/historico.vue';
import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';


export default {
    setup() {
        useMeta({ title: 'Lead' });
    },
    data() {
        return {
            acesso: null,
            add: false,
            paramsAdd: null,
            params: {},
            arquivos: [],
            hasLead: false
        }
    },
    components: {
        page,
        add,
        tarefas,
        anotacao,
        email,
        file,
        historicoVue
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    },
    created() {
        this.init();
        this.getAcesso()
    },
    methods: {
        getAcesso(){
         this.acesso = Acesso.getAcesso('CRM', '/oportunidades', this.permissao);
         console.log(this.acesso)
        },
        async vendaRealizada() {
            if (this.params.valor_Final && Number(this.params.valor_Final) !== 0) {

                this.showMessage('Parabéns Pela Venda!!! 👏  Sua meta está quase Lá!!');

                const vendaCrm = new TaskCrmService({
                    id: (this.params.venda).length > 0 ? Number(this.params.venda[0].id) : undefined,
                    valor_total: Number(this.params.valor_Final),
                    status: 'venda',
                    empresa_configId: Number(this.cliente.id),
                    usersId: Number(this.usuario.id),
                    taskId: Number(this.params.id)
                }, this.token);

                const venda = await vendaCrm.atualizaVendas();
                let taskUpdate = {
                    id: this.params.id,
                    vendaId: venda.id,
                    marcar_venda: true,
                    status: 'concluída',
                    updated_at: new Date(),
                    valor_Inicial: Number(this.params.valor_Inicial),
                }

                const taskCrm = new TaskCrmService(taskUpdate, this.token);
                await taskCrm.atualizarTask();

                this.init();


            }
            else{
                this.paramsAdd = {}
            }
        },
        async vendaPerdida() {

            this.showMessage('Que Pena 😔, vamos para a próxima!! Continue!! Sua meta está quase Lá!!', 'erro');
            if (this.params) {

                const vendaCrm = new TaskCrmService({
                    id: Number(this.params.venda[0].id),
                    valor_total: Number(this.params.valor_Final),
                    status: 'perdida',
                    updated_at: new Date(),
                }, this.token);

                const venda = await vendaCrm.atualizaVendas();

                let taskUpdate = {
                    id: this.params.id,
                    marcar_venda: false,
                    status: 'perdida',
                    updated_at: new Date(),
                    vendaId: venda.id

                }
                const taskCrm = new TaskCrmService(taskUpdate, this.token);
                await taskCrm.atualizarTask();
                this.init();
            }
        },
        async init() {

            let id = (window.location.pathname).replace('/crm/leads/', '')
            if (!id.match('novo')) {                
                const task = new TaskService({}, this.token, `/api/task/${id}`);
                const getById = await task.getByIdTask();
                if (getById.id) {
                    this.hasLead = true;
                    getById.valor_Final= Number(getById.valor_Final);
                    getById.valor_Inicial= Number(getById.valor_Inicial);

                    this.params = getById;

                    this.arquivos = this.params.arquivos;
                    console.log(this.params)

                    this.paramsAdd =  getById;
                    console.log(this.paramsAdd)
                }
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
