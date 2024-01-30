<template>
    <page :params="getAcesso()">

<div class="layout-px-spacing">

    <div class="action-btn layout-top-spacing mb-5">

        <button type="button" id="add-list" class="btn btn-primary" @click="edit_project()">
            <i class="bi bi-diagram-3">
                Add Processo
            </i>
        </button>
    </div>

    <div class="row scrumboard" id="cancel-row">
        <div class="col-lg-12 layout-spacing">
            <div class="task-list-section">
                <div v-for="project in project_list" :key="project.etapa" class="task-list-container">
                    <div class="connect-sorting" style="background: #ffff">
                        <div :style="colorProj(project.color)"></div>

                        <div class="task-container-header">
                            <i class="bi bi-diagram-3"></i>
                            <h6 class="s-heading" data-listTitle="In Progress">{{ project.title }}</h6>
                            <div class="dropdown btn-group">
                                <div class="add-s-task p-2">
                                    <a href="javascript:;" class="addTask" @click="goToTask(task, project)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-plus-circle">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    </a>
                                </div>
                                <a href="javascript:;" id="ddlMore" class="btn dropdown-toggle btn-icon-only"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-more-horizontal">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>

                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlMore">
                                    <li><a href="javascript:;" class="dropdown-item"
                                            @click="edit_project(project)">Editar</a></li>
                                    <li><a href="javascript:;" class="dropdown-item"
                                            @click="delete_project(project)">Apagar</a></li>
                                    <!-- <li><a href="javascript:;" class="dropdown-item"
                                            @click="clear_project(project)">Limpar Todos</a></li> -->
                                </ul>
                            </div>
                        </div>

                        <draggable @dragend="move(project, taskMove)" class="connect-sorting-content" group="default"
                            ghost-class="ui-state-highlight" drag-class="ui-sortable-helper" :animation="200">
                            <div v-for="task in project.task" :key="project.id + '' + task.id"
                                @dragover="moveTask(task)" class="card task-text-progress cursor-move ui-sortable-handle cursor-p
                                                                ">
                                <div class="card-body" @dblclick="goToTask(task, project)">
                                    <div v-if="task.image" class="px-2 pt-2">
                                        <img src="@/assets/images/taskboard.jpg" class="img-fluid rounded"
                                            alt="scrumboard" />
                                    </div>

                                    <div class="task-header">
                                        <h4>{{ task.title }}</h4>
                                    </div>
                                    <div class="task-body">
                                        <div class="task-bottom">
                                            <i class="bi bi-cash-coin">

                                                Contato: {{ task.contato_nome || ' Sem Infomação' }}
                                            </i>
                                            <!-- Status: {{ task.status || ' Sem Infomação' }} -->

                                        </div>
                                        <div class="task-bottom">
                                            <i class="bi bi-cash-coin">
                                                Valor de Negócio R$: {{
                                                    Number(task.valor_Inicial).toLocaleString('pt-br',
                                                        { minimumFractionDigits: 2 })
                                                    || 0 }}
                                            </i>

                                        </div>
                                        <div class="task-bottom">
                                            <i class="bi bi-thermometer-snow">
                                                Temperatura: {{ temperatura(task.status) }}
                                            </i>
                                        </div>

                                        <div class="task-bottom">
                                            <div class="tb-section-2">
                                                <a href="javascript:;" @click="goToTask(task, project)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-edit-2 s-task-edit">
                                                        <path
                                                            d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                        </path>
                                                    </svg>
                                                </a>
                                                <a href="javascript:;" @click="delete_confirm(project.id, task)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-trash-2 s-task-delete">
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path
                                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                        </path>
                                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </draggable>
                        <div class="card-body">
                            <b>Total em Negócios: R$</b> {{ setValorTotal(project) }}
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div id="addListModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title">
                        {{ params.id ? 'Editar Processo' : 'Add Processo' }}</h5>
                    <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"
                        class="btn-close"></button>
                </div>
                <div class="modal-body">
                    <div class="compose-box">
                        <div class="compose-content" id="addListModalTitle">
                            <form action="javascript:void(0);">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group mb-0">
                                            <label>Nome do Processo</label>
                                            <input type="text" v-model="params.title" class="form-control"
                                                placeholder="Nome" />
                                        </div>
                                        <div class="form-group mb-0">
                                            <label>Etapa</label>
                                            <input type="number" v-model="params.etapa" class="form-control" />
                                        </div>
                                        <div class="form-group mb-0">
                                            <label>Cor do Processo</label>
                                            <input type="color" v-model="params.color" class="form-control" />
                                        </div>

                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" @click="save_project()">{{ params.id ? 'Atualizar' :
                        'Add Processo' }}</button>
                </div>
            </div>
        </div>
    </div>

    <div id="addTaskModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="badge badge-warning badge-chip mt-3 mb-3 ms-2 position-relative">
                        <img src="@/assets/images/lead.png" alt="Person" width="96" height="96" />
                        <span class="text">
                            {{ params_task.id ? params_task.title : 'Add Lead' }} </span>
                    </span>
                    <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"
                        class="btn-close"></button>
                </div>
                <div class="modal-body ">
                    <div class="compose-box">
                        <div class="compose-content" id="addTaskModalTitle">
                            <div class="addTaskAccordion" id="add_task_accordion">
                                <div class="card task-text-progress">
                                    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo"
                                        data-parent="#add_task_accordion">
                                        <div class="card-body p-0">
                                            <form action="javascript:void(0);">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-4">
                                                            <label>Título</label>
                                                            <input type="text" v-model="params_task.title"
                                                                class="form-control" placeholder="Título" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="form-group mb-4">
                                                            <label>Valor Inicial</label>
                                                            <input type="number" v-model="params_task.valor_Inicial"
                                                                class="form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group mb-4">
                                                            <label>Valor Inicial</label>
                                                            <input type="number" v-model="params_task.valor_Final"
                                                                class="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-4">
                                                            <label>Contato</label>
                                                            <input type="text" v-model="params_task.contactsId"
                                                                class="form-control" placeholder="Contato" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-4">
                                                            <label>Status</label>
                                                            <input type="text" v-model="params_task.produtoId"
                                                                class="form-control" placeholder="Status" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="form-group mb-0">
                                                            <label>Descrição</label>
                                                            <vue-easymde v-model="params_task.description" />

                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-toggle="modal"
                        data-bs-target="#addTaskModal">Cancelar</button>
                    <button type="button" data-btnfn="addTask" class="btn btn-primary" @click="save_task()">{{
                        params_task.id ? 'Atualizar' : 'Add Lead' }}</button>
                </div>
            </div>
        </div>
    </div>

    <div id="deleteConformation" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content mailbox-popup">
                <div class="modal-header">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-trash-2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                            </path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                    <h5 class="modal-title" id="exampleModalLabel">Deseja Apagadar a Lead?</h5>
                    <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"
                        class="btn-close"></button>
                </div>
                <div class="modal-body">
                    <p class="">Se você excluir a Lead, ela desaparecerá para sempre. Tem certeza de que deseja
                        continuar?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"
                        data-bs-dismiss="modal">Cancel</button>
                    <button type="button" data-remove="task" class="btn btn-danger"
                        @click="delete_task()">Apagar</button>
                </div>
            </div>
        </div>
    </div>
</div>
</page>
</template>

<style>
.vue-easymde .editor-toolbar {
    border: 1px solid #ddd;
    border-radius: 6px;
    opacity: 1;
}

.vue-easymde .CodeMirror {
    margin-top: 10px;
    border-radius: 6px;
}

.vue-easymde .editor-toolbar button {
    color: #000000 !important;
}

.vue-easymde .editor-toolbar button.active,
.vue-easymde .editor-toolbar button:hover {
    border-color: #000000 !important;
    opacity: 0.6;
}

.vue-easymde .CodeMirror-fullscreen,
.vue-easymde .editor-preview-side {
    z-index: 9999 !important;
    margin-top: 0 !important;
}
</style>


<script setup>
import { onMounted, ref } from 'vue';
import { useMeta } from '@/composables/use-meta';
import ProcessoCrmService from '@/service/processo-service.js';
import TaskCrmService from "@/service/task-service.js"
import store from '@/store';
import VueEasymde from 'vue-easymde';
import 'easymde/dist/easymde.min.css';
import router from '@/router/index';

import '@/assets/sass/apps/scrumboard.scss';
import { VueDraggableNext as draggable } from 'vue-draggable-next';

import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';

const params = ref({ id: null, title: '', color: '' });
useMeta({ title: 'Processo CRM' });

const token = store.getters.token;
const permissao = store.getters.permissao;

const params_task = ref({ project_id: null, id: null, title: '', description: '' });
const project_list = ref([]);
const deleted_task = ref({ project_id: null, id: null });
let addListModal = ref(null);
let addTaskModal = ref(null);
let deleteConformation = ref(null);
let taskMove = ref(null);


onMounted(() => {
    initPopup();
    bind_project_list();
});

const getAcesso = () => {

const acesso = Acesso.getAcesso('CRM', '/oportunidades', permissao);
console.log(acesso);

return acesso
}


const temperatura = (temp) => {
    switch (temp) {
        case 'frio':
            return 'Frio - ✩'
            break;
        case 'morno':
            return 'Morno - ✩✩'
            break;
        case 'quente':
            return 'Quente - ✩✩✩'
            break;      
        default:
            break;
    }
}

const goToTask = (task, project) => {

    console.log(project)
    if (task && task.id) {
        router.push(`/crm/leads/${task.id}`)
    }
    else {
        router.push(`/crm/leads/novo-${project.id}`);

    }

}
const initPopup = () => {
    addListModal = new window.bootstrap.Modal(document.getElementById('addListModal'));
    addTaskModal = new window.bootstrap.Modal(document.getElementById('addTaskModal'));
    deleteConformation = new window.bootstrap.Modal(document.getElementById('deleteConformation'));
};

const bind_project_list = async () => {
    let id = (window.location.pathname).replace('/crm/fluxo/', '');
    const processosCrm = new ProcessoCrmService({}, token, `/api/processo/todos/${id}`);
    project_list.value = await processosCrm.getAllProcesso();
    return true
};
const move = async (projeto, task) => {

    let taskUpdate = {
        id: task.id,
        title: task.title,
        description: task.description,
        updated_at: new Date(),
        processoId: projeto.id
    }
    const taskCrm = new TaskCrmService(taskUpdate, token);
    const taskUpda = await taskCrm.atualizarTask();

    if (taskUpda) {
        if (bind_project_list()) {
            showMessage('Atualizado com Sucesso.');

        }
    } else {
        showMessage('Erro para atualizar', 'error');
    }


};
const moveTask = async (task) => {
    taskMove.value = task
};
//Project
const edit_project = (project) => {
    params.value = { id: null, title: '', };
    if (project) {
        params.value = JSON.parse(JSON.stringify(project));
    }

    addListModal.show();
};
const save_project = async () => {
    if (!params.value.title) {
        showMessage('Título é obrigatório.', 'error');
        return true;
    }

    let projetoID = (window.location.pathname).replace('/crm/fluxo/', '');

    if (params.value.id) {
        //update project
        let project = project_list.value.find((d) => d.id == params.value.id);
        project.title = params.value.title;
        project.color = params.value.color;
        project.etapa = params.value.etapa;

        let proj = project;

        const processosCrm = new ProcessoCrmService({
            projetoId: Number(projetoID),
            id: Number(proj.id),
            title: String(proj.title),
            color: String(proj.color),
            etapa: proj.etapa ? Number(proj.etapa) : 0

        }, token);

        await processosCrm.atualizarProcesso();
        bind_project_list();
    } else {
        //add project
        let max_project_id;

        if (project_list.value[0]) {
            max_project_id = project_list.value.reduce((max, character) => (character.id > max ? character.id : max), project_list.value[0].id);

        }
        if (!max_project_id) {
            max_project_id = 0;
        }

        let project = {
            projetoId: Number(projetoID),
            title: params.value.title,
            color: params.value.color,
            etapa: params.value.etapa ? Number(params.value.etapa) : 0
        };

        const processosCrm = new ProcessoCrmService(project, token);

        const retorno = await processosCrm.criarProcesso();
        console.log(retorno)

        project_list.value.push(retorno);
        bind_project_list()
    }

    showMessage('Processo criado com Sucesso.');
    addListModal.hide();
};
const delete_project = async (project) => {
    project_list.value = project_list.value.filter((d) => d.id != project.id);

    const processosCrm = new ProcessoCrmService({
        id: project.id
    }, token);
    await processosCrm.deleteProcesso();

    showMessage('Processo deletado com Sucesso.');
};
const clear_project = (project) => {
    project.task = [];
};
const setValorTotal = (project) => {
    let proj = project.task || [];
    let valorTotal = 0;
    if((proj || []).length > 0){
        proj.forEach((v) => {
        if (v.valor_Inicial) {
            valorTotal += Number(v.valor_Inicial)
        }

    });
    }
    

    return Number(valorTotal).toLocaleString('pt-br', { minimumFractionDigits: 2 })
};
const colorProj = (color) => {
    return color ? `width: auto;
    background: ${color};
    height: 2.5px;
    border-radius: 30px 30px 30px 30px;` : ''
}
//Task

const edit_task = (project_id, task) => {

    params_task.value = { project_id: null, id: null, title: '', description: '' };

    if (task) {
        params_task.value = JSON.parse(JSON.stringify(task));
    }
    params_task.value['project_id'] = project_id;
    addTaskModal.show();
};

const save_task = async () => {
    if (!params_task.value.title) {
        showMessage('Título é Obrigatório.', 'error');
        return true;
    }
    let project = project_list.value.find((d) => d.id == params_task.value.project_id);
    if (params_task.value.id) {
        //update task
        let task = project.task.find((d) => d.id == params_task.value.id);
        task.title = params_task.value.title;
        task.description = params_task.value.description;

        let taskUpdate = {
            id: task.id,
            title: task.title,
            description: task.description,
            updated_at: new Date(),
            processoId: project.id

        }
        const taskCrm = new TaskCrmService(taskUpdate, token);
        await taskCrm.atualizarTask();


    } else {
        //add task
        let max_id = 0;

        if (project.task && (project.task).length > 0) {
            max_id = project.task.reduce((max, character) => (character.id > max ? character.id : max), project.task[0].id);

        }
        let task = {
            title: params_task.value.title,
            description: params_task.value.description,
            processoId: project.id
        };
        const taskCrm = new TaskCrmService(task, token);
        const retorno = await taskCrm.criarTask();

        if (!project.task) {
            project.task = [];
            project.task.push(retorno.data);

        }

        project.task.push(retorno.data);
    }


    showMessage('Lead Criada/Atualizada com Sucesso.');
    addTaskModal.hide();
};

const delete_confirm = (project_id, task) => {
    deleted_task.value = { project_id: project_id, id: task.id };
    deleteConformation.show();
};
const delete_task = async () => {
    let project = project_list.value.find((d) => d.id == deleted_task.value.project_id);
    project.task = project.task.filter((d) => d.id != deleted_task.value.id);

    const taskCrm = new TaskCrmService({
        id: deleted_task.value.id
    }, token);
    await taskCrm.deleteTask();


    showMessage('Lead Apagada com Sucesso.');
    deleteConformation.hide();
};

const showMessage = (msg = '', type = 'success') => {
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
};
</script>
