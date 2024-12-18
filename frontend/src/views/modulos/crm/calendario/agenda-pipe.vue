<template>
    <div class="layout-px-spacing apps-calendar">


        <div class="row layout-top-spacing" id="cancel-row">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-body">
                        <div class="calendar-upper-section">
                            <div class="row">
                                <div class="col-md-8 col-12">
                                    <!-- <div class="labels text-md-start text-center">
                                    <p class="label label-primary">Work</p>
                                    <p class="label label-warning">Travel</p>
                                    <p class="label label-success">Personal</p>
                                    <p class="label label-danger">Important</p>
                                </div> -->
                                </div>

                                <div class="col-md-4 col-12">
                                    <form class="form-horizontal mt-md-0 mt-3 text-md-end text-center">
                                    
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#addEventsModal" @click="edit_event()">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-calendar me-2">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                                </svg>
                                                Criar
                                            </button>
                                        


                                    </form>

                                </div>
                            </div>
                        </div>

                        <FullCalendar ref="fullCalendar" :options="options">
                            <template v-slot:eventContent="arg">
                                <div class="fc-event-main-frame">
                                    <div class="fc-event-time">{{ arg.timeText }}</div>
                                    <div class="fc-event-title-container">
                                        <div class="fc-event-title fc-sticky">{{ arg.event.title }}</div>
                                    </div>

                                    <div class="calendar-tlp">
                                        <div class="p-2 bg-dark text-white text-start text-wrap">{{ arg.timeText + ' : '
                                            + arg.event.title }}</div>
                                        <div class="p-2 text-start text-wrap">
                                            {{ arg.event.extendedProps ? arg.event.extendedProps.description : '' }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </FullCalendar>
                    </div>
                </div>
            </div>

            <!-- The Modal -->
            <div id="addEventsModal" class="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-right">
                    <div class="modal-content mailbox-popup">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ params.id ? 'Editar Evento' : 'Add Evento' }}</h5>
                            <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"
                                class="btn-close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group mb-4">
                                        <label for="start-date" class="">Título:</label>
                                        <input type="text" v-model="params.title" class="form-control"
                                            placeholder="Digite o Título" />
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-12">
                                    <div class="form-group start-date mb-4">
                                        <label>De:</label>
                                        <input type="datetime-local" v-model="params.start" class="form-control" />

                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-12">
                                    <div class="form-group end-date mb-4">
                                        <label for="end-date" class="">Até:</label>
                                        <input type="datetime-local" v-model="params.end" class="form-control" />

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group mb-4">
                                        <label class="">Descrição:</label>
                                        <textarea v-model="params.description" class="form-control"
                                            placeholder="Descrição" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <!-- <div class="event-badge">
                                    <label>Badge:</label>
                                    <div class="d-sm-flex d-block">
                                        <div class="radio-classic radio-primary me-2 custom-control custom-radio">
                                            <input v-model="params.className" type="radio" value="bg-primary" name="marker" class="custom-control-input" id="rdoWork" /><label
                                                class="custom-control-label"
                                                for="rdoWork"
                                            >
                                                Work
                                            </label>
                                        </div>

                                        <div class="radio-classic radio-warning me-2 custom-control custom-radio">
                                            <input v-model="params.className" type="radio" value="bg-warning" name="marker" class="custom-control-input" id="rdoTravel" /><label
                                                class="custom-control-label"
                                                for="rdoTravel"
                                            >
                                                Travel
                                            </label>
                                        </div>

                                        <div class="radio-classic radio-success me-2 custom-control custom-radio">
                                            <input v-model="params.className" type="radio" value="bg-success" name="marker" class="custom-control-input" id="rdoPersonal" /><label
                                                class="custom-control-label"
                                                for="rdoPersonal"
                                            >
                                                Personal
                                            </label>
                                        </div>

                                        <div class="radio-classic radio-danger me-2 custom-control custom-radio">
                                            <input v-model="params.className" type="radio" value="bg-danger" name="marker" class="custom-control-input" id="rdoImportant" /><label
                                                class="custom-control-label"
                                                for="rdoImportant"
                                            >
                                                Important
                                            </label>
                                        </div>
                                    </div>
                                </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" data-bs-dismiss="modal"
                                @click="cancel()">Cancelar Evento</button>

                            <button type="button" class="btn btn-light" data-dismiss="modal" data-bs-dismiss="modal"
                                @click="getOut()">Sair</button>
                            <button type="button" class="btn btn-primary" @click="save_event()">{{ params.id ?
                                'Atualizar' : 'Add Evento' }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import '@/assets/sass/apps/calendar.scss';

import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import AgendaService from '@/service/agenda-service';
import AgendaModel from './model/agendaModel';
import AgendaRetornoModel from './model/agendaRetornoModel';
//flatpickr
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import '@/assets/sass/forms/custom-flatpickr.css';
import store from '@/store';
import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Fullcalendar Drag and Drop Event' });

const token = store.getters.token;
const cliente = store.getters.cliente;
const usuario = store.getters.usuario;
const permissao = store.getters.permissao;

const defaultParams = ref({ id: null, title: '', start: '', end: '', description: '', className: 'bg-primary' });
const params = ref(JSON.parse(JSON.stringify(defaultParams.value)));

const options = ref({
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    views: {
        dayGridMonth: {
            titleFormat: { year: 'numeric', month: 'short' } // Exibir mês abreviado e ano numérico
        },
        timeGridWeek: {
            titleFormat: { year: 'numeric', month: 'short', day: 'numeric' }
        },
        timeGridDay: {
            titleFormat: { year: 'numeric', month: 'short', day: 'numeric' }
        }
    },

    locale: ptBrLocale, // Adicione esta linha para definir o idioma para português do Brasil
    editable: true,
    droppable: true,
    dayMaxEvents: true,
    selectable: true,
    eventClick: null,
    select: null,
    eventMouseEnter: null,
    eventMouseLeave: null,
    events: [],
});
let addEventsModal = ref(null);
const fullCalendar = ref(null);
const min_date_start = ref('');
const min_date_end = ref('');
const formatDay = {
    enableTime: true,
    dateFormat: 'd-m-Y H:i',
    minDate: min_date_start,
    time_24hr: true
};
onMounted(async () => {

    initPopup();
    await bind_events();
    options.value.eventClick = edit_event;
    options.value.eventMouseEnter = event_mouse_hover;
    options.value.eventMouseLeave = event_mouse_leave;
});

const initPopup = () => {
    addEventsModal = new window.bootstrap.Modal(document.getElementById('addEventsModal'));
};

const bind_events = async () => {
    const todasAgendas = new AgendaService({}, token, `/api/agenda/todos/${cliente.id}`);
    const agendas = await todasAgendas.getAllAgenda();
    console.log(agendas)
    options.value.events = agendas || [];

    setup_draggable();
};

const get_month = (dt, add = 0) => {
    let month = dt.getMonth() + 1 + add;
    return dt.getMonth() < 10 ? '0' + month : month;
};

const edit_date = (data) => {
    let obj = {
        event: { start: data.start, end: data.end },
    };
    edit_event(obj);
};

const event_mouse_hover = (data) => {
    let element = data.el.querySelector('.calendar-tlp');
    element.classList.add('d-block');
};

const event_mouse_leave = (data) => {
    let element = data.el.querySelector('.calendar-tlp');
    element.classList.remove('d-block');
};

const start_date_change = (selectedDates, dateStr) => {
    if (selectedDates && dateStr) {
        min_date_end.value = dateStr;
        params.value.end = '';
    }
};
const formatDate = (date) => {// String original

    let data = new Date(date);
    let dataHora = data.toISOString().split('T')[0]; // Data
    let horaMinuto = data.toTimeString().split(' ')[0]; // Hora e Minuto
    let horaMinutoSemSegundos = horaMinuto.split(':').slice(0, 2).join(':'); // Remover os segundos

    return `${dataHora}T${horaMinutoSemSegundos}`

}
const end_date_change = () => { };
const edit_event = (data) => {
    console.log(data)
    params.value = JSON.parse(JSON.stringify(defaultParams));

    if (data) {
        let obj = JSON.parse(JSON.stringify(data.event));

        params.value = {
            id: obj.id,
            title: obj.title,
            start: obj.start ? formatDate(obj.start) : new Date(),
            end: obj.end ? formatDate(obj.end) : new Date(),
            description: obj.extendedProps ? obj.extendedProps.description : '',
            className: obj.classNames ? obj.classNames[0] : '',
        };

        min_date_start.value = obj.start ? formatDate(obj.start) : new Date();
        min_date_end.value = obj.end ? formatDate(obj.end) : new Date();


    } else {
        min_date_start.value = new Date();
        min_date_end.value = new Date();
    }

    addEventsModal.show();
};
const cancel = async () => {

    if (params.value.id) {
        //update event
        let eventEdit = options.value.events.find((d) => d.id == params.value.id);

        const modelAgenda = new AgendaModel(eventEdit);

        const addAgendaUsuario = new AgendaService(modelAgenda, token);
        const data = await addAgendaUsuario.deleteAgenda();
        if (data) {

            await bind_events();
            showMessage('Cancelado com Sucesso!');
        };
    };
    fullCalendar.value.getApi(); //refresh calendar
    addEventsModal.hide();

}
const getOut = async () => {

    if (params.value.id) {
        //update event
        let eventEdit = options.value.events.find((d) => d.id == params.value.id);

        const modelAgenda = new AgendaModel(eventEdit);

        const addAgendaUsuario = new AgendaService(modelAgenda, token);
        //  const data = await addAgendaUsuario.deleteAgenda();
        //  if(data){

        //     showMessage('Cancelado com Sucesso!');
        //  };
    };
    fullCalendar.value.getApi(); //refresh calendar
    addEventsModal.hide();

}

const save_event = async () => {
    if (!params.value.title) {
        showMessage('Título é obrigatório.', 'error');
        return true;
    }
    if (!params.value.start) {
        showMessage('Data de Inicio é obrigatório.', 'error');
        return true;
    }

    if (params.value.id) {
        //update event
        let event = {
            id: params.value.id,
            title: params.value.title,
            start: params.value.start,
            end: params.value.end,
            description: params.value.description,
            className: params.value.className || 'bg-danger',
            clientIds: []
        };
        
        options.value.events = options.value.events.find((d) => d.id != params.value.id)
        console.log(options.value.events)

        if(formatDate(event.start) > formatDate(event.end)){
            showMessage('Date Inicial Maior que a final', 'error');
            return
        };
        const modelAgenda = new AgendaModel(event);
        modelAgenda.userIds.push(usuario.id);

        const addAgendaUsuario = new AgendaService(modelAgenda, token);
        const data = await addAgendaUsuario.atualizarAgenda();

        if (data.data.id) {
            await bind_events();
            showMessage('Editado com Sucesso!');
        };
    } else {
        //add event


        let event = {
            title: params.value.title,
            start: params.value.start,
            end: params.value.end,
            description: params.value.description,
            className: params.value.className || 'bg-danger',
            clientIds: []

        };
        if(formatDate(event.start) > formatDate(event.end)){
            showMessage('Data Inicial Maior que a final', 'error');
            return
        };
        console.log(event)
        const modelAgenda = new AgendaModel(event);
        modelAgenda.userIds.push(usuario.id);
        const addAgendaUsuario = new AgendaService(modelAgenda, token);

        const data = await addAgendaUsuario.criarAgenda();
        if (data.id) {
            const novoEvento = new AgendaRetornoModel(data);
            console.log(options.value.events)
            console.log(novoEvento)
            options.value.events.push(novoEvento);
            showMessage('Evento Cadastrado Com Sucesso!');
        };

    }
    fullCalendar.value.getApi(); //refresh calendar
    addEventsModal.hide();
};
const setup_draggable = () => {
    new Draggable(document.querySelector('.fc-view'), {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
            let event = {
                title: eventEl.innerText,
                duration: '01:00',
            };
            return event;
        },
    });
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
    max-width: 80vh;
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