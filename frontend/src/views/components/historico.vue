<template>
    <div id="timelineModern" class="col-lg-12">
        <div class="statbox panel box box-shadow">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                        <h4>{{ title || '' }}</h4>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="container mt-container" v-if="(historico).length > 0">
                            <ul class="modern-timeline ps-0" v-for="hist in historico">
                                <li>
                                    <div class="modern-timeline-badge"></div>
                                    <div class="modern-timeline-panel">
                                        <div class="modern-timeline-body">
                                            <h4 class="mb-4">{{ getDate(hist.created_at) }} - {{ getHoras(hist.created_at)
                                            }} </h4>
                                            <p class="mb-4">
                                                {{ hist.valor }}
                                            </p>
                                            <b>Usuário: {{ hist.operador }}</b>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/components/timeline/custom-timeline.scss';
import { mapGetters } from 'vuex';
import { DateTime } from '@/helpers/DateTime'

export default {
    name: 'historico',

    props: {
        title: String,
        historico: Array
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token']),
    },
    methods: {
        getDate(data) {
            return DateTime.DateToString(data)
        },
        getHoras(data) {
            let horas = new Date(data)
            return `${horas.getHours()}:${horas.getMinutes()}`
        }
    }

}
</script>
