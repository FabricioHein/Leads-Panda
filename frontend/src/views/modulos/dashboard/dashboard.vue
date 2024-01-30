<template>
    <div class="layout-px-spacing">
        <div class="layout-top-spacing" v-if="usuario">
            <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                <div class="section general-info">
                    <div class="row p-2">
                        <div class="col-md-6 col-sm-12">
                            <div class="chart-container">
                                <canvas id="leadsChart"></canvas>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="chart-container">
                                <canvas id="vendasChart"></canvas>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="chart-container">
                                <canvas id="atendimentosChart"></canvas>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="chart-container">
                                <canvas id="usuarios"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Acesso from '@/helpers/Acesso'
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';

export default {
    setup() {
    },
    data() {
        return {
            acesso: {},
            leadsData: [10, 20, 15, 25, 30, 22, 18],
            vendasData: [5, 10, 8, 12, 15, 11, 9],
            atendimentosData: [15, 25, 20, 30, 35, 28, 22],
            days: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
        }
    },

    computed: {
        ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    },
    created() {
        this.getAcesso()

    },
    mounted() {
        this.createChart('line', 'leadsChart', 'Leads Diários', this.leadsData);
        this.createChart('bar', 'vendasChart', 'Vendas Diárias', this.vendasData);
        this.createChart('line', 'atendimentosChart', 'Atendimentos Diários', this.atendimentosData);
        this.createChart('line', 'usuarios', 'Atendimentos Diários', this.atendimentosData);
    },
    methods: {
        createChart(type, chartId, label, data) {
            var ctx = document.getElementById(chartId).getContext('2d');
            var randomColor = this.generateRandomColor();
            new Chart(ctx, {
                type: type,
                data: {
                    labels: this.days,
                    datasets: [{
                        label: label,
                        data: data,
                        backgroundColor: randomColor,
                        borderColor: randomColor,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });


        },
        generateRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        getAcesso() {
            this.acesso = Acesso.getAcesso('Cadastro', '/clientes', this.permissao);
            console.log(this.acesso)
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


    },
};


</script>
