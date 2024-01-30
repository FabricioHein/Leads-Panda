<template>
    <div class="layout-px-spacing todo-list">

        <a class="btn w-auto" id="addTask" href="javascript:;" @click="edit_task()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Nova Tarefa
        </a>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="mail-box-container">
                    <div class="mail-overlay" :class="{ 'mail-overlay-show': is_show_task_menu }"
                        @click="is_show_task_menu = false"></div>

                    <div class="tab-title" :class="{ 'mail-menu-show': is_show_task_menu }">

                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-12 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-clipboard">
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2">
                                    </path>
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                </svg>
                                <h5 class="app-title">Tarefas</h5>
                            </div>

                            <!-- <perfect-scrollbar class="todoList-sidebar-scroll"> -->
                            <perfect-scrollbar class="todoList-sidebar-scroll col-md-12 col-sm-12 col-12 mt-4 ps-0">
                                <ul class="nav nav-pills d-block">
                                    <li class="nav-item" @click="tab_changed('')">
                                        <a id="all-list" href="javascript:;" class="nav-link"
                                            :class="{ active: selected_tab === '' }">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
                                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                                <line x1="3" y1="6" x2="3" y2="6"></line>
                                                <line x1="3" y1="12" x2="3" y2="12"></line>
                                                <line x1="3" y1="18" x2="3" y2="18"></line>
                                            </svg>
                                            Inbox
                                            <span class="todo-badge badge">
                                                {{ task_list && task_list.filter((d) => d.status != 'trash').length }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="nav-item" @click="tab_changed('finalizado')">
                                        <a id="todo-task-done" href="javascript:;" class="nav-link"
                                            :class="{ active: selected_tab === 'finalizado' }">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-thumbs-up">
                                                <path
                                                    d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                                                </path>
                                            </svg>
                                            Concluídas
                                            <span class="todo-badge badge">
                                                {{ task_list && task_list.filter((d) => d.status == 'finalizado').length }}
                                            </span>
                                        </a>
                                    </li>
                                    <li class="nav-item" @click="tab_changed('importante')">
                                        <a id="todo-task-important" href="javascript:;" class="nav-link"
                                            :class="{ active: selected_tab === 'importante' }">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                                                <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                </polygon>
                                            </svg>
                                            Importante
                                            <span class="todo-badge badge">
                                                {{ task_list && task_list.filter((d) => d.status == 'importante').length }}
                                            </span>
                                        </a>
                                    </li>
                                    <!-- <li class="nav-item" @click="tab_changed('trash')">
                                        <a id="todo-task-trash" href="javascript:;" class="nav-link"
                                            :class="{ active: selected_tab === 'trash' }">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-trash-2">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path
                                                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                </path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                            Lixo
                                        </a>
                                    </li> -->
                                </ul>
                            </perfect-scrollbar>
                            <!-- </perfect-scrollbar> -->


                        </div>
                    </div>

                    <div id="todo-inbox" class="accordion todo-inbox">
                        <div class="search">
                            <input type="text" v-model="search_task" class="input-search form-control"
                                v-on:keyup="search_tasks()" placeholder="Busque..." />
                            <div class="d-flex align-items-center" @click="is_show_task_menu = !is_show_task_menu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-menu mail-menu d-lg-none">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </div>
                        </div>

                        <div class="todo-box">
                            <perfect-scrollbar class="todo-box-scroll"
                                :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">
                                <div v-for="task in filtered_task_list" class="todo-item all-list"
                                    :class="{ 'todo-task-done': task.status == 'finalizado' }" :key="task.id">
                                    <div class="todo-item-inner">
                                        <div class="checkbox-primary new-control custom-control custom-checkbox">
                                            <input type="checkbox" :id="`chk-${task.id}`" class="custom-control-input"
                                                :checked="task.status == 'finalizado'"
                                                @change="task_finalizado(task)" /><label class="custom-control-label"
                                                :for="`chk-${task.id}`"></label>
                                        </div>

                                        <div class="todo-content" data-bs-toggle="modal" data-bs-target="#todoShowListItem"
                                            @click="view_task(task)">
                                            <h5 class="todo-heading">{{ task.title }}</h5>
                                            <p class="meta-date">{{ task.date }}</p>
                                            <p class="todo-text">{{ task.description_text }}</p>
                                        </div>

                                        <div class="priority-dropdown">
                                            <div class="dropdown btn-group">
                                                <a href="javascript:;" id="ddlPriority"
                                                    class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown"
                                                    aria-expanded="false" :class="[priority_class(task)]">
                                                    
                                                </a>
                                                <!-- <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlPriority">
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item danger"
                                                            @click="set_priority(task, 'high')">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-alert-octagon">
                                                                <polygon
                                                                    points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2">
                                                                </polygon>
                                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                <line x1="12" y1="16" x2="12" y2="16"></line>
                                                            </svg>
                                                            High
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item warning"
                                                            @click="set_priority(task, 'middle')">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-alert-octagon">
                                                                <polygon
                                                                    points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2">
                                                                </polygon>
                                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                <line x1="12" y1="16" x2="12" y2="16"></line>
                                                            </svg>
                                                            Middle
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="dropdown-item primary"
                                                            @click="set_priority(task, 'low')">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-alert-octagon">
                                                                <polygon
                                                                    points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2">
                                                                </polygon>
                                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                <line x1="12" y1="16" x2="12" y2="16"></line>
                                                            </svg>
                                                            Low
                                                        </a>
                                                    </li>
                                                </ul> -->
                                            </div>
                                        </div>

                                        <div class="action-dropdown">
                                            <div class="dropdown btn-group">
                                                <a href="javascript:;" id="ddlMore"
                                                    class="btn dropdown-toggle btn-icon-only" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-more-vertical">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlMore">
                                                    <template v-if="task.status == 'trash'">
                                                        <li><a href="javascript:;" class="dropdown-item"
                                                                @click="delete_task(task, 'delete_permanent')">
                                                                Apagar</a></li>
                                                        <li><a href="javascript:;" class="dropdown-item"
                                                                @click="delete_task(task, 'restore')">Recuperar</a></li>
                                                    </template>
                                                    <template v-else>
                                                        <li><a href="javascript:;" class="dropdown-item"
                                                                @click="edit_task(task)">Editar</a></li>
                                                        <li v-if="task.status == 'importante'"><a href="javascript:;"
                                                                class="dropdown-item" @click="set_important(task)">Voltar
                                                                para Lista Normal</a></li>
                                                        <li v-else><a href="javascript:;" class="dropdown-item"
                                                                @click="set_important(task)">Importante</a></li>
                                                        <li><a href="javascript:;" class="dropdown-item"
                                                                @click="delete_task(task, 'delete')">Apagar</a></li>
                                                    </template>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </perfect-scrollbar>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <div id="todoShowListItem" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md modal-dialog-centered">
                        <div class="modal-content todolist-popup" v-if="selected_task">
                            <div class="modal-header">
                                <h5 class="modal-title task-heading">{{ selected_task.title }}</h5>
                                <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"
                                    class="btn-close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="compose-box">
                                    <div class="compose-content">
                                        <p class="task-text overflow-auto" v-html="selected_task.description"></p>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal" data-bs-dismiss="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-trash">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                        </path>
                                    </svg>
                                    Sair
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addTaskModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-md modal-dialog-centered">
                        <div class="modal-content todolist-popup">
                            <div class="modal-header">
                                <h5 class="modal-title">{{ params.id ? 'Atualizar' : 'Add Tarefa' }}</h5>
                                <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"
                                    class="btn-close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="compose-box">
                                    <div class="compose-content">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group mb-4">
                                                        <label>Titulo</label>
                                                        <div class="w-100">
                                                            <input type="text" v-model="params.title" class="form-control"
                                                                placeholder="Título" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group mb-4">
                                                        <label>Data Inicio</label>
                                                    
                                                        <div class="w-100">
                                                            <input type="date" v-model="params.date_start"
                                                                class="form-control" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group mb-4">
                                                        <label>Data Final</label>
                                                        <div class="w-100">
                                                            <input type="date" v-model="params.date_end"
                                                                class="form-control" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label>Descrição</label>
                                                        <div class="w-100">
                                                            <quill-editor ref="editor" v-model:value="params.description"
                                                                :options="editor_options" style="min-height: 200px"
                                                                @ready="quillEditorReady($event)"></quill-editor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal"
                                    data-bs-dismiss="modal">Sair</button>
                                <button type="button" class="btn btn-primary" @click="save_task()">{{ params.id ?
                                    'Atualizar' : 'Adicionar' }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.todo-inbox .todo-item .todo-item-inner .action-dropdown .dropdown-menu.show,
.todo-inbox .todo-item .todo-item-inner .priority-dropdown .dropdown-menu.show {
    top: 10px !important;
}

.ql-container,
.ql-editor {
    min-height: inherit;
}

.ql-editor {
    max-height: 200px;
}

.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
    color: #000000;
}

.ql-snow .ql-stroke {
    fill: none;
    stroke: #000000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}

.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #000000;
}

#addTaskModal .ql-toolbar.ql-snow {
    border: 1px solid #bfc9d4;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
    border-radius: 6px;
    margin-top: 0;
}

.ql-container.ql-snow {
    border-top: 0px;
    margin-top: 10px;
    padding: 13px 0;
    border: 1px solid #bfc9d4 !important;
    border-radius: 6px;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { quillEditor } from 'vue3-quill';
import 'vue3-quill/lib/vue3-quill.css';
import '@/assets/sass/apps/todolist.scss';
import TaskService from '@/service/task-service';
import store from '@/store';
import {DateTime} from '@/helpers/DateTime'

import '@/assets/sass/components/custom-modal.scss';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Lista Tarefas' });

const token = store.getters.token;

const taskId = (window.location.pathname).replace('/crm/leads/', '');

const is_show_task_menu = ref(false);
const params = ref({ id: null, title: '', description: '' });
const tab_index = ref(0);
const task_list = ref([]);
const filtered_task_list = ref([]);
const search_task = ref('');
const selected_tab = ref('');
const selected_task = ref(null);
const editor_options = ref({
    placeholder: 'Escreva',
    modules: {
        toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']],
    },
});
let addTaskModal = ref(null);
let quillEditorData = ref(null);

onMounted(() => {
    initPopup();
    bind_task_list();
});

const initPopup = () => {
    addTaskModal = new window.bootstrap.Modal(document.getElementById('addTaskModal'));
};

const quillEditorReady = (quill) => {
    quillEditorData = quill;
};
const bind_task_list = async () => {
    const taskSub = new TaskService({}, token, `/api/task/todos/subtask/${taskId}`);

    task_list.value = await taskSub.getAllTaskSubs();

    search_tasks();
};

const tab_changed = (type) => {
    selected_tab.value = type;
    search_tasks();
    is_show_task_menu.value = false;
};

const search_tasks = () => {
    let res;
    if (selected_tab.value) {
        res = task_list.value.filter((d) => d.status == selected_tab.value);
    } else {
        res = task_list.value.filter((d) => d.status != 'trash');
    }

    if (search_task.value) {
        filtered_task_list.value = res.filter((d) => d.title.includes(search_task.value));

    }
    filtered_task_list.value = res
};
const priority_class = async (task) => {
    if (task.priority == 'low') {
        return 'primary';
    } else if (task.priority == 'middle') {
        return 'warning';
    } else if (task.priority == 'high') {
        return 'danger';
    }
      // const taskSub = new TaskService(task, token);
    // await taskSub.atualizarTaskSub();

};
const set_priority = async (task, name) => {
    task.priority = name;
   const taskSub = new TaskService(task, token);


    await taskSub.atualizarTaskSub();

};
const task_finalizado = async (task) => {
    if (!task.status) {
        task.status = 'finalizado';
    } else {
        task.status = '';
    }
   
    const taskSub = new TaskService(task, token);
    await taskSub.atualizarTaskSub();
    showMessage('Salvo / Alterado com sucesso.');

};
const set_important = async (task) => {
    if (task.status == 'importante') {
        task.status = '';
        tab_index.value = 0;
        tab_changed('');
    } else {
        task.status = 'importante';
    }
    const taskSub = new TaskService(task, token);
    await taskSub.atualizarTaskSub();

};
const delete_task = async (task, type) => {

    const deletTask = new TaskService({
        id: task.id
    }, token)

    await deletTask.deleteTaskSub();
    task_list.value = task_list.value.filter((d) => d.id != task.id);
    showMessage('Deletado com sucesso.');


    search_tasks();
};
const view_task = (task) => {
    selected_task.value = task;
};

const edit_task = (task) => {
    params.value = { id: null, title: '', description: '' };
 
    if (task) {
        params.value = task;
        console.log(task)

        // params.value.date_start = DateTime.ToFormat(task.date_end, 'YYYY-MM-DD')
        showMessage(task, 'Título é Obrigatório', 'error');
    }
    addTaskModal.show();
};

const save_task = async () => {
    if (!params.value.title) {
        showMessage('Título é Obrigatório', 'error');
        return false;
    }
    let description_text = quillEditorData.getText();
    if (params.value.id) {
        //update task
        let task = task_list.value.find((d) => d.id == params.value.id);
        task.title = params.value.title;
        task.description = params.value.description;
        task.description_text = description_text;

        task.date_start = params.value.date_start;
        task.date_end = params.value.date_end;

        const taskSub = new TaskService(task, token);

        await taskSub.atualizarTaskSub();
        showMessage('Salvo / Criado com sucesso.');




    } else {
        //add task

        let today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth()); //January is 0!
        var yyyy = today.getFullYear();
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let task = {
            title: params.value.title,
            description: params.value.description,
            description_text: description_text,
            taskId: Number(taskId),
            // date: monthNames[mm] + ', ' + dd + ' ' + yyyy,
            priority: 'baixo',
            status: 'pendente',

            date_start: new Date(params.value.date_start),
            date_end: new Date(params.value.date_end)
        };
        const taskSub = new TaskService(task, token);

        const nova = await taskSub.criarTaskSub();
        task_list.value.splice(0, 0, nova.data);

    }

    showMessage('Salvo com sucesso.');
    addTaskModal.hide();
    search_tasks();

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
