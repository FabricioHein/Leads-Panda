<template>
    <page :params="acesso">
        <div class="panel-body">
            <div class="parent p-2">
                <flowchart></flowchart>                
            </div>


        </div>
    </page>
</template>
<style scoped>
.panel {
    padding: 0;
}

.painel-form {
    background-color: #ffff;
}

.painel-modelo {
    background-color: #ffff;

}
</style>


<script >
import '@/assets/sass/drag-drop/drag-drop.css';
import { VueDraggableNext as draggable } from 'vue-draggable-next';

import { mapGetters } from 'vuex';

import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';
import flowchart from '@/views/components/flow-chart/flow-chart.vue';

export default {
    setup() {
    },
    data() {
        return {
            acesso: null,
            logo_height: null,
            logo_width: null,
            opcaoAdd: null,
            selectedType: [
                {
                    value: 'selecionar',
                    label: 'Selecionar'
                },
                {
                    value: 'radio',
                    label: 'Marcador'
                },
                {
                    value: 'checkbox',
                    label: 'Check Box'
                }
                , {
                    value: 'text',
                    label: 'Texto'
                },
                {
                    value: 'color',
                    label: 'Cor'
                },
                {
                    value: 'number',
                    label: 'Número'
                },
                {
                    value: 'textarea',
                    label: 'Texto Área'
                },
                {
                    value: 'datetime-local',
                    label: 'Data e Hora'
                },
                {
                    value: 'week',
                    label: 'Semana'
                },
                {
                    value: 'month',
                    label: 'Mês'
                },
                {
                    value: 'date',
                    label: 'Data'
                },
            ],
            criarCampo: false,
            novoCampo: {
                type: '',
                label: '',
                value: '',
                style: {
                    width: '100'
                },
                mask: '',
                placeholder: '',
                opcao: []
            },
            formulario_dinamico: {
                title: '',
                publico: false,
                url_formulario: '',
                projetoId: null,
                configuracaoClienteId: null,
                processoId: null,
                json: [],
                logo_height: null,
                logo_width: null
            },
            formFields: [],
            projetos: null,
            processos: null,
            etapa: false
        }
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    },
    components: {
        page,
        flowchart

    },
    methods: {
        getAcesso() {
            this.acesso = Acesso.getAcesso('MKT', '/formulario/novo', this.permissao);
            console.log('acesso', this.acesso)
        },
       

    },
    created() {
       this.getAcesso()

    },

};


</script>
