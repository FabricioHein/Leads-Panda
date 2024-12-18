<template>
    <page :params="acesso">
        <div class="panel-body">
            <div class="parent p-2">
                <div class="row">

                    <div class="col">
                        <div class="painel-modelo" id="painel">

                            <div v-for="field in formulario_dinamico.json" :key="field.id" :id="field.label">
                                <draggable class="drag-drop dragula" group="default" ghost-class="gu-transit"
                                    drag-class="el-drag-ex-1" :animation="200" @dragover="move(field)">
                                    <div>

                                        <label v-if="field.type === 'radio' || field.type === 'checkbox'"
                                            style="padding-right: 25px;">{{ field.label }}</label>
                                        <label v-else>{{ field.label }}</label>


                                        <!-- <input v-if="field.type === 'text'" type="text" v-model="field.label"> -->
                                        <input class="form-control" v-if="field.type === 'text'" type="text"
                                            v-model="field.value" v-maska="field.mask" :placeholder="field.placeholder">


                                        <input class="form-control" v-else-if="field.type === 'email'" type="email"
                                            v-model="field.value">
                                        <input class="form-control" v-else-if="field.type === 'image'" type="image"
                                            v-model="field.value">
                                        <input class="p-2" v-else-if="field.type === 'radio'" type="radio"
                                            v-model="field.value">
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

                                        <select v-model="field.value" class="form-select"
                                            v-else-if="field.type === 'selecionar'">
                                            <option v-for="s in field.opcao" :value="s.label">{{ s.label }}</option>
                                        </select>


                                        <button type="button" class="btn rounded-circle btn-danger" @click="deleteCampo(field)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path
                                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                            </svg>
                                        </button>
                                        <button type="button" class="btn rounded-circle  btn-success" @click="editCampo(field)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path
                                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                            </svg>
                                        </button>

                                    </div>
                                </draggable>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">

                        <div class="p-2">
                            <button class="btn btn-success" @click="salvarForm">{{ formulario_dinamico.url_formulario != ''
                                ?
                                'Atualizar' : 'Salvar' }}</button>
                            <button class="btn" @click="criarNovoCampo">Add Campo</button>
                            <button class="btn btn-success" v-if="formulario_dinamico.url_formulario != ''"
                                @click="openUrl">Ver
                                Link</button>

                        </div>
                        <div class="painel-modelo" v-if="criarCampo">

                            <div class="mt-container">
                                <div class="p-4">
                                    <label>Label do Campo:</label>
                                    <input class="form-control" v-model="novoCampo.label" type="text" />
                                    <label>Tipo do Campo:</label>
                                    <select v-model="novoCampo.type" class="form-select">
                                        <option v-for="s in selectedType" :value="s.value">{{ s.label }}</option>
                                    </select>

                                    <!-- <label>Largura:</label>
                                <input class="form-control" :min="10" :max="100" v-model="novoCampo.style.width"
                                    type="number" /> -->
                                    <template v-if="novoCampo.type == 'text'">
                                        <label>Máscara:</label>
                                        <input class="form-control" v-model="novoCampo.mask" type="text" />

                                    </template>


                                    <template v-if="novoCampo.type == 'selecionar'">
                                        <label>Adicionar Opções:</label>
                                        <input class="form-control" v-model="opcaoAdd" type="text"
                                            placeholder="Digite a Opção" />

                                        <div class="p-4">
                                            <button class="btn btn-success" @click="addOpcao()">Add
                                                Opção</button>
                                        </div>

                                        <label>Resultado das Opções:</label>
                                        <select v-model="novoCampo.value" class="form-select">
                                            <option v-for="s in novoCampo.opcao" :value="s.label">{{ s.label }}</option>
                                        </select>

                                    </template>

                                    <label>Placeholder:</label>
                                    <input class="form-control" v-model="novoCampo.placeholder" type="text" />
                                </div>
                            </div>
                            <div class="mt-container">
                                <div class="p-4">
                                    <button class="btn btn-success" v-if="!atualizarCampo" @click="NovoCampo">Criar
                                        Campo</button>
                                    <button class="btn btn-success" v-if="atualizarCampo" @click="editarCampo">Atualizar
                                        Campo</button>
                                    <button class="btn btn-danger" @click="CancelarCampo">Cancelar</button>

                                </div>

                            </div>

                        </div>

                        <div class="painel-modelo">

                            <div class="mt-container">
                                <div class="p-4">
                                    <label>Título Formulário:</label>
                                    <input class="form-control" v-model="formulario_dinamico.title" type="text" />

                                    <label>Funil de Venda:</label>
                                    <select v-model="formulario_dinamico.projetoId" class="form-select"
                                        @change="getProjetoEtapa">
                                        <option v-for="p in projetos" :value="p.id">{{ p.title }}</option>
                                    </select>
                                    <template v-if="etapa || formulario_dinamico.url_formulario != ''">
                                        <label>Etapa do Funil:</label>
                                        <select v-model="formulario_dinamico.processoId" class="form-select">
                                            <option v-for="p in processos" :value="p.id">{{ p.title }}</option>
                                        </select>

                                    </template>

                                    <template v-if="formulario_dinamico.url_formulario != ''">
                                        <label>Link:</label>
                                        <input class="form-control" v-model="formulario_dinamico.url_formulario" type="url"
                                            :disabled="true">
                                    </template>

                                    <label>Campanha:</label>
                                    <input class="form-control" v-model="formulario_dinamico.nome_campanha" type="text" />
                                    <label>Link de Redirecionamento:</label>
                                    <input class="form-control" v-model="formulario_dinamico.link_redirect" type="text" />

                                    <div class="upload mt-4 pe-md-4">
                                        <label>Público: </label>
                                        <input class="p-4" v-model="formulario_dinamico.publico" type="checkbox" />
                                    </div>

                                    <div class="upload mt-4 pe-md-4">
                                        <input ref="fl_profile" type="file" class="d-none" accept="image/*"
                                            @change="change_file" />
                                        <img :src="formulario_dinamico.logo ? formulario_dinamico.logo : require('@/assets/images/user-no-foto.png')"
                                            alt="profile" class="profile-preview" @click="$refs.fl_profile.click()" />
                                        <p class="mt-2">Carregar Logo</p>

                                    </div>

                                    <label>Altura:</label>
                                    <input v-model="logo_height" :min="10" :max="100" type="range" class="form-control" />
                                    <label>Largura:</label>
                                    <input v-model="logo_width" :min="10" :max="100" type="range" @change="setLogo()"
                                        class="form-control" />

                                </div>


                            </div>



                        </div>
                    </div>
                </div>
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
import formularioService from '@/service/formulario-service';
import { mapGetters } from 'vuex';
import ProjetoService from '@/service/projeto-service';
import ImportarService from '@/service/import-service';
import enderecoVue from '@/views/components/endereco.vue';

import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';



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
                    value: 'checkbox',
                    label: 'Check Box'
                }
                , {
                    value: 'text',
                    label: 'Texto'
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
                {
                    value: 'selecionar',
                    label: 'Opção para Selecionar'
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
                empresa_configId: null,
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
        draggable,
        enderecoVue
    },
    methods: {
        getAcesso() {
            this.acesso = Acesso.getAcesso('Marketing', '/formulario/novo', this.permissao);
            console.log('acesso', this.acesso)
        },
        setLogo() {

            this.formulario_dinamico.logo_height = String(this.logo_height) + 'px';
            this.formulario_dinamico.logo_width = String(this.logo_width) + 'px';

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
        move(move) {
            console.log(move)
        },
        async openUrl() {
            let url = this.formulario_dinamico.url_formulario;
            let link = `/formulario-ask/${url}`;
            window.open(link);

        },
        async change_file(event) {
            let formData = new FormData();
            formData.append('file', event.target.files[0]);
            console.log('>> formData >> ', formData);

            const importar = new ImportarService(
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                },
                this.token,
                `/api/importar/file/${this.usuario.id}`,
                formData
            )
            const upload = await importar.importarFile();
            this.formulario_dinamico.logo = upload.downloadURL;


        },
        async getProjetoEtapa() {
            this.etapa = false;

            const etapas = new ProjetoService({}, this.token, `/api/projeto/${this.formulario_dinamico.projetoId}`);
            const getEtapas = await etapas.getProjetoEtapa();
            if (getEtapas) {
                this.processos = getEtapas.processo;
                this.etapa = true;
            }

        },
        generateURl() {
            return self.crypto.randomUUID();
        },
        getIdJson() {

            const json = this.formulario_dinamico.json;
            let i = 0;

            for (let i = 0; i < json.length; i++) {
                for (const key in json) {
                    json[key]['id'] = Number(key) + 1;
                    console.log(json[key])

                }

            };

            this.formulario_dinamico.json = json;

        },
        async salvarForm() {
            this.getIdJson();

            this.formulario_dinamico.empresa_configId = Number(this.cliente.id);
            let form = this.formulario_dinamico;

            if (this.formulario_dinamico.url_formulario === '') {
                this.formulario_dinamico.url_formulario = this.generateURl();
                console.log(this.formulario_dinamico.url_formulario);
                const formulario = new formularioService(form, this.token);

                if (this.checkFormulario(form)) {
                    const salvarFormulario = await formulario.criarFormulario();
                    if (salvarFormulario) {
                        this.formulario_dinamico = salvarFormulario;
                        this.showMessage('Formulário criado com Sucesso!');
                    }
                }

            } else {
                if (this.checkFormulario(form)) {
                    const formulario = new formularioService(form, this.token);
                    const salvarFormulario = await formulario.atualizarFormulario();
                    if (salvarFormulario) {
                        this.showMessage('Atualizado com Sucesso!');
                    }

                }


            }
        },
        checkFormulario(formulario_dinamico) {
            if (formulario_dinamico.title === '' || formulario_dinamico.title === 'Insira um Título') {
                this.showMessage('Insira um título', 'error');
                return false;
            }
            // if (formulario_dinamico.projetoId === null || formulario_dinamico.projetoId === '') {
            //     this.showMessage('Insira um Funil', 'error');
            //     return false;
            // }
            // if (formulario_dinamico.processoId === null || formulario_dinamico.processoId === '') {
            //     this.showMessage('Insira uma Etapa', 'error');
            //     return false;
            // }
            if (formulario_dinamico.empresa_configId === null || formulario_dinamico.empresa_configId === '') {
                this.showMessage('Insira um Cliente', 'error');
                return false;
            }
            return true
        },
        editCampo(campo) {
            this.novoCampo = campo;
            this.criarCampo = true;
            this.atualizarCampo = true;

        },
        deleteCampo(campo) {
            const campoNovo = this.formulario_dinamico.json.find((value, index, arr) => {
                if (value.label === campo.label) {
                    arr.splice(index, 1);
                    return true;

                }
                return false;
            })

            //   this.formulario_dinamico.json = campoNovo;

        },

        CancelarCampo() {
            this.criarCampo = false;
        },
        criarNovoCampo() {
            this.criarCampo = true;
            this.atualizarCampo = false;
            console.log(this.atualizarCampo, this.criarCampo)
        },
        editarCampo() {

            const novoCampo = this.novoCampo;

            this.formulario_dinamico.json.find((value, index, arr) => {
                if (value.label === novoCampo.label) {
                    value = novoCampo;
                    return true;

                }
                return false;
            });

            this.criarCampo = true;
            this.atualizarCampo = false;


            this.novoCampo = {
                label: '',
                mask: '',
                placeholder: '',
                value: '',
                type: '',
                style: {
                    width: '100%'
                },
                opcao: []
            }
        },
        addOpcao() {
            this.novoCampo.opcao.push({
                label: this.opcaoAdd
            });

        },
        NovoCampo() {
            this.atualizarCampo = false;
            const novoCampo = this.novoCampo;
            novoCampo.style.width = (novoCampo.style.width).replaceAll('%') + '%';

            this.formulario_dinamico.json.push(novoCampo);

            this.criarCampo = false;

            this.novoCampo = {
                label: '',
                mask: '',
                placeholder: '',
                value: '',
                type: '',
                style: {
                    width: '100%'
                },
                opcao: []
            }



        },
        async init() {
            let id = (window.location.pathname).replace('/mkt/formulario/', '');
            console.log(id);

            if (!id.match('novo')) {
                const formulario = new formularioService({}, this.token, `/api/formulario/${id}`);

                const form = await formulario.getFormularios();
                if (form) {
                    this.formulario_dinamico = form;

                    this.formulario_dinamico.logo = this.formulario_dinamico.logo ? this.formulario_dinamico.logo : this.cliente.logo_link;

                }

            } else {

                this.formulario_dinamico = {
                    title: 'Título',
                    publico: false,
                    url_formulario: '',
                    projetoId: null,
                    empresa_configId: null,
                    processoId: null,
                    json: [
                        {
                            label: 'Email', type: 'text', value: 'Novo  ',
                            style: {
                                width: '100%',
                            },
                        }]
                }

            }

            if (!this.projetos) {
                const projetos = new ProjetoService({}, this.token, `/api/projeto/todos/${this.cliente.id}`);
                this.projetos = await projetos.getAllProjeto();
                console.log('this.projetos', this.projetos)
            }
            if (this.formulario_dinamico.projetoId) {
                this.getProjetoEtapa()
            }

        }

    },
    created() {
        this.init();
        this.getAcesso()

    },

};


</script>
