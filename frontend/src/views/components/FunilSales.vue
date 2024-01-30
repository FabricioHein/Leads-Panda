<template>
    <label>Funil de Venda:</label>
    <select v-model="form.projetoId" class="form-select" @change="getProjetoEtapa">
        <option v-for="p in projetos" :value="p.id">{{ p.title }}</option>
    </select>
    <template v-if="form.projetoId && processos.length > 0">
        <label>Etapa do Funil:</label>
        <select v-model="form.processoId" class="form-select">
            <option v-for="p in processos" :value="p.id">{{ p.title }}</option>
        </select>
    </template>
</template>

<script >

import { mapGetters } from 'vuex';
import ProjetoService from '@/service/projeto-service';

export default {
    setup() {
    },
    data() {
        return {
            projetos: null,
            processos: null
        }
    },
    created() {
        this.getProjetoEtapa();

    },
    props: {
        form: {
            projetoId: Number || null,
            processoId: Number || null
        }
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    },  
    methods: {

        async getProjetoEtapa() {

            if (!this.form.projetoId) {
                const projetos = new ProjetoService({}, this.token, `/api/projeto/todos/${this.cliente.id}`);
                this.projetos = await projetos.getAllProjeto();
                console.log('this.projetos', this.projetos)
            }
            if (this.form.projetoId) {

                const etapas = new ProjetoService({}, this.token, `/api/projeto/${this.form.projetoId}`);
                const getEtapas = await etapas.getProjetoEtapa();
                
                if (getEtapas) {
                    this.processos = getEtapas.processo;

                }
            }
        }


    },

};


</script>
