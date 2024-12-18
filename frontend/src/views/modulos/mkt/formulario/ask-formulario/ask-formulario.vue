
<template >
    <div class="form-content auth-boxed p-5" v-if="form">
                            <div class="logo">
            <img :src="formulario_dinamico.logo" :style="getLogo()" />
                            </div>
                            <div class="form-col">
                <div class="row">
                    <div class="col">
                        <div v-for="(field, index) in formulario_dinamico.json" :key="field.id">
                            <div v-if="index === currentStep">
                                <label v-if="field.type === 'radio' || field.type === 'checkbox'"
                                    style="padding-right: 25px;">{{ field.label }}</label>
                                <label v-else>{{ field.label }}</label>

                                <!-- <input v-if="field.type === 'text'" type="text" v-model="field.label"> -->

                                <!-- <input v-if="field.type === 'text'" type="text" v-model="field.label"> -->
                                <input class="form-control" v-if="field.type === 'text'" type="text" :style="field.style"
                                    v-model="field.value" v-maska="field.mask" :placeholder="field.placeholder">

                                <input class="form-control" v-else-if="field.type === 'email'" type="email"
                                    v-model="field.value">
                                <input class="form-control" v-else-if="field.type === 'image'" type="image"
                                    v-model="field.value">
                                <input class="p-2" v-else-if="field.type === 'radio'" type="radio" v-model="field.value">
                                <input class="p-2" v-else-if="field.type === 'checkbox'" type="checkbox"
                                    v-model="field.value">
                                <input class="form-control" v-else-if="field.type === 'color'" type="color"
                                    v-model="field.value">
                                <input class="form-control" v-else-if="field.type === 'number'" type="number"
                                    v-model="field.value">
                                <input class="form-control" v-else-if="field.type === 'date'" type="date"
                                    v-model="field.value">
                                <input class="form-control" v-else-if="field.type === 'datetime-local'"
                                    type="datetime-local" v-model="field.value">
                                <input class="form-control" v-else-if="field.type === 'week'" type="week"
                                    v-model="field.value">
                                <input class="form-control" v-else-if="field.type === 'month'" type="month"
                                    v-model="field.value">
                                <input class="form-control" v-else-if="field.type === 'month'" type="month"
                                    v-model="field.value">
                                <textarea class="form-control" v-else-if="field.type === 'textarea'" rows="4"
                                    cols="50"> </textarea>
                                <select v-model="field.value" class="form-select" v-else-if="field.type === 'selecionar'">
                                    <option v-for="s in field.opcao" :value="s.label">{{ s.label }}</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col p-3">
                        <button type="button" @click="nextStep" v-if="!envio" class="btn btn-primary">Próxima </button>
                        <button type="button" @click="getAsk"  v-if="envio" class="btn btn-success">Enviar</button>
                    </div>
                </div>
            </div>
     </div>
   
    <div v-else>
        <erro404 />
    </div>
</template>

<style scoped>
.panel {
    padding: 0;
}
.logo {
    margin-left: 45%;
    margin-top: 1%;
}
.modelo-1 {
    padding-top: 25%;
    padding-left: 15%;
    padding-right: 15%
}
</style>

<script>

import '@/assets/sass/authentication/auth-boxed.scss';
import erro404 from '@/views/components/erro404.vue';
import formularioService from '@/service/formulario-service';

import { useMeta } from '@/composables/use-meta';
import store from '@/store';
import router from '@/router/index'

export default {
    setup() {
        useMeta({ title: 'Formulário' });
        store.commit('setLayout', 'auth');
    },
    components: {
        erro404
    },
    data() {
        return {
            form: true,
            envio: false,
            redirect: '',
            formulario_dinamico: {
                title: '',
                publico: false,
                url_formulario: '',
                projetoId: null,
                empresa_configId: null,
                processoId: null,
                json: [],
                link_redirect: null,
                nome_campanha: null,
                logo: ''

            },
            currentStep: 0,
        };
    },
    async created() {
        let url = (window.location.pathname).replace('/formulario-ask/', '');
        console.log(`api/formulario-ask-form/form/${url}`)
        const formulario = new formularioService({}, '', `/api/formulario-ask-form/form/${url}`);
        const form = await formulario.getFormularios();
        console.log(form)
        if (form.form) {
            this.formulario_dinamico = form;
            this.form = true
        }
        else {
            this.form = false;
        }

    },
    methods: {
        nextStep() {
            console.log(this.currentStep, this.formulario_dinamico.json.length -1)
            if (this.currentStep < this.formulario_dinamico.json.length - 1) {
                this.currentStep++;
            }
            else if (this.currentStep == (this.formulario_dinamico.json.length - 1)){
                this.envio = true;
            }
            
        },
        getLogo() {
            return `width: ${this.formulario_dinamico.logo_width};
            height: ${this.formulario_dinamico.logo_height} `
        },
        async getAsk() {
            const novoForm = {
                formulario_dinamicoId: Number(this.formulario_dinamico.id),
                json: this.formulario_dinamico.json,
                processoId: this.formulario_dinamico.processoId
            }
            console.log(novoForm)
            const formulario = new formularioService(novoForm);
            const form = await formulario.criarRespostaForm();
            this.showMessage('Enviado com Sucesso, Obrigado!');

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
        }
    },
};
</script>