<template>
    <div class="panel-body">
        <flowchart></flowchart>    
    </div>
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

    components: {
        flowchart

    },
    methods: {
      
       

    },
    created() {
       

    },

};


</script>
