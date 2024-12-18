<template>
    <div class="layout-px-spacing">
    

        <div class="layout-px-spacing">
            <div class="row app-notes layout-top-spacing layout-spacing" id="cancel-row">
                <div class="col-lg-12">
                    <div class="app-hamburger-container">
                        <div class="hamburger" @click="is_show_note_menu = !is_show_note_menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-menu chat-menu d-xl-none">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </div>
                    </div>

                    <div class="app-container">
                        <div class="app-note-container">
                            <div class="app-note-overlay" :class="{ 'app-note-overlay-show': is_show_note_menu }"
                                @click="is_show_note_menu = false"></div>

                            <div class="tab-title" :class="{ 'note-menu-show': is_show_note_menu }">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-12 text-center">
                                        <a class="btn btn-primary" href="javascript:void(0);" data-bs-toggle="modal"
                                            data-bs-target="#notesMailModal" @click="edit_note()">Adicionar</a>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-12 mt-5">
                                        <ul class="nav nav-pills d-block" id="pills-tab3" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link list-actions" :class="{ active: selected_tab == 'all' }"
                                                    @click="tab_changed('all')">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-edit">
                                                        <path
                                                            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                                                        </path>
                                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                                                        </path>
                                                    </svg>
                                                    Todas

                                                    
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link list-actions" :class="{ active: selected_tab == 'fav' }"
                                                    @click="tab_changed('fav')">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-star">
                                                        <polygon
                                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                        </polygon>
                                                    </svg>
                                                    Favoritos
                                                </a>
                                            </li>
                                        </ul>

                                        <hr />

                                        <p class="group-section">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag">
                                                <path
                                                    d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z">
                                                </path>
                                                <line x1="7" y1="7" x2="7" y2="7"></line>
                                            </svg>
                                            Tags
                                        </p>

                                        <ul class="nav nav-pills d-block group-list" id="pills-tab" role="tablist">
                                         
                                            <li class="nav-item">
                                                <a class="nav-link list-actions g-dot-danger"
                                                    :class="{ active: selected_tab == 'important' }"
                                                    @click="tab_changed('important')">Importante</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div id="ct" class="note-container note-grid">
                                <div v-for="(note, index) in filterd_notes_list" class="note-item all-notes"
                                    :class="note_class(note)" :key="index">
                                    <div class="note-inner-content">
                                        <div class="note-content">
                                            <p class="note-title">{{ note.title }}</p>
                                            <p class="meta-time">{{ DateTime.DateToString(note.date)  }}</p>
                                            <div class="note-description-content">
                                                <p class="note-description">{{ note.description }}</p>
                                            </div>
                                        </div>
                                        <div class="note-action">
                                            <a href="javascript:;" @click="set_fav(note)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-star fav-note">
                                                    <polygon
                                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                    </polygon>
                                                </svg>
                                            </a>
                                            <a href="javascript:;" @click="delete_note(note)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-trash-2 delete-note">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </a>
                                        </div>
                                        <div class="note-footer">
                                            <div class="dropdown tags-selector btn-group">
                                                <a href="javascript:;" id="ddlMore"
                                                    class="btn dropdown-toggle btn-icon-only nav-link"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <div class="tags">
                                                        <div class="g-dot-personal"></div>
                                                        <div class="g-dot-work"></div>
                                                        <div class="g-dot-social"></div>
                                                        <div class="g-dot-important"></div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlMore">
                                                   
                                                    <li>
                                                        <a href="javascript:;"
                                                            class="dropdown-item note-important label-group-item label-important position-relative g-dot-important"
                                                            @click="set_tag(note, 'important')">Importante</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;"
                                                            class="dropdown-item note-important label-group-item label-important position-relative g-dot-important"
                                                            @click="set_tag(note, 'important')">Importante</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal -->
                    <div id="notesMailModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-md modal-dialog-right">
                            <div class="modal-content mailbox-popup">
                                <div class="modal-header">
                                    <h5 class="modal-title">Add Anotação</h5>
                                    <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"
                                        class="btn-close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="notes-box">
                                        <div class="notes-content">
                                            <form>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group mb-4">
                                                            <label>Título</label>
                                                            <input type="text" v-model="params.title" class="form-control"
                                                                maxlength="25" placeholder="Título" />
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="form-group mb-0">
                                                            <label>Descrição</label>
                                                            <textarea v-model="params.description" rows="3"
                                                                class="form-control" maxlength="60"
                                                                placeholder="Descrição"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal"
                                        data-bs-dismiss="modal">Discard</button>
                                    <button type="button" class="btn btn-primary" @click="save_note()">{{ params.id ?
                                        'Atualizar' : 'Adicionar' }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import '@/assets/sass/apps/notes.scss';
import {DateTime} from '@/helpers/DateTime'

import { useMeta } from '@/composables/use-meta';
import AnotacaoService from '@/service/anotacao-service';
import store from '@/store';


useMeta({ title: 'Notas' });

const token = store.getters.token;

const taskId = (window.location.pathname).replace('/crm/leads/', '');

let notesMailModal = ref(null);
const params = ref({ id: null, title: '', description: '' });
const is_show_note_menu = ref(false);
const notes_list = ref([]);
const filterd_notes_list = ref('');
const selected_tab = ref('all');

onMounted(() => {
    initPopup();
    bind_notes();
});

const initPopup = () => {
    notesMailModal = new window.bootstrap.Modal(document.getElementById('notesMailModal'));
};

const bind_notes = async () => {
 
    const anotacao = new AnotacaoService({}, token, `/api/task/todos/getAllAnotacao/${taskId}`);

    notes_list.value = await anotacao.getAllAnotacao();
    console.log(await anotacao.getAllAnotacao())

    search_notes();
};

const search_notes = () => {
    if (selected_tab.value != 'fav') {
        if (selected_tab.value != 'all') {
            filterd_notes_list.value = notes_list.value.filter((d) => d.tag == selected_tab.value);
        } else {
            filterd_notes_list.value = notes_list.value;
        }
    } else {
        filterd_notes_list.value = notes_list.value.filter((d) => d.is_fav);
    }
};

const note_class = (note) => {
    let cls = '';
    if (note.tag) {
        cls = 'note-' + note.tag;
    }
    if (note.is_fav) {
        cls += ' note-fav';
    }
    return cls;
};

const tab_changed = (type) => {
    selected_tab.value = type;
    search_notes();
    is_show_note_menu.value = false;
};

const set_fav = (note) => {
    note.is_fav = !note.is_fav;
};

const set_tag = (note, name) => {
    note.tag = name;
    search_notes();
};

const edit_note = (note) => {
    params.value = { id: null, title: '', description: '' };
    if (note) {
        params.value = JSON.parse(JSON.stringify(note));
    }
    notesMailModal.show();
};

const save_note = async () => {
    if (!params.value.title) {
        showMessage('Título é Obrigatório', 'error');
        return false;
    }

    //add note
 
    let dt = new Date();
    let note = {
        title: params.value.title,
        description: params.value.description,
        date: dt,
        is_fav: false,
        tag: '',
        taskId: Number(taskId)
    };
    const anotacao = new AnotacaoService(note, token);
   const anotacaoCriada = await anotacao.criarAnotacao();

    notes_list.value.splice(0, 0, anotacaoCriada.data);
    search_notes();

    showMessage('Anotação Salvo com Sucesso!.');
    notesMailModal.hide();
};

const delete_note = async (note) => {
    notes_list.value = notes_list.value.filter((d) => d.id != note.id);

    const deletAno = new AnotacaoService({
        id: note.id
    }, token)

    await deletAno.deleteAnotacao();

    search_notes();
    showMessage('Anotação Deletado com Sucesso.');
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
<style>
.modal-dialog-right {
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    height: 100%;
    max-width: 400px;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
}

.modal.show .modal-dialog-right {
    transform: translateX(0);
}

.modal-dialog-right .modal-content {
    height: 100%;
    border-radius: 0;
    overflow-y: auto; /* Adiciona a capacidade de rolagem vertical */
}

</style>