<template>
    <div class="layout-px-spacing">
        <div class="layout-top-spacing" v-if="usuario">
            <div class="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                <div class="container py-5">
                    <h1 class="mb-4">Dashboard</h1>
                    <div class="row">
                        <!-- Card 1 -->
                        <div class="col-md-4 mb-4">
                            <div class="card border-primary">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-info">Potencial de Negócio Inicial</h5>
                                    <p class="card-text display-4">{{ 'R$ ' + moneyBRL(dashData.totalPotencialNegocioInicial) }}</p>
                                </div>
                            </div>
                        </div>
                        <!-- Card 2 -->
                        <div class="col-md-4 mb-4">
                            <div class="card border-success">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-success">Total de Leads em Negociação</h5>
                                    <p class="card-text display-4">{{ dashData.totalLeads }}</p>
                                </div>
                            </div>
                        </div>
                        <!-- Card 3 -->
                        <div class="col-md-4 mb-4">
                            <div class="card border-info">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-primary">Total de Contatos</h5>
                                    <p class="card-text display-4">{{ dashData.totalCliente }}</p>
                                </div>
                            </div>
                        </div>
                        <!-- Card 4 -->
                      
                        <!-- Card 5 -->
                        <div class="col-md-4 mb-4">
                            <div class="card border-danger">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-danger">Conversas Ativas</h5>
                                    <p class="card-text display-4">{{ dashData.chatAtivos }}</p>                                    
                                </div>
                            </div>
                        </div>
                        <!-- Card 6 -->
                        <div class="col-md-4 mb-4">
                            <div class="card border-secondary">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-secondary">Conversas Inativas</h5>
                                    <p class="card-text display-4">{{ dashData.naochatsAtivos }}</p>
                                </div>
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
import DashService from '@/service/dash';

export default {
    setup() {
    },
    data() {
        return {
            acesso: {},
            dashData: {
                totalCliente: 0,
                totalLeads: 0,
                totalPotencialNegocioInicial: 0,
                totalPotencialNegocioFinal: 0,
                chatAtivos: 0,
                naochatsAtivos: 0
            }
        }
    },

    computed: {
        ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    },
    created() {
        this.getAcesso()

    },
    mounted() {
        this.fetchdata();
    },
    methods: {
        moneyBRL(money){
    return Number(money).toLocaleString('pt-br',  {minimumFractionDigits: 2})

},
        async fetchdata() {
            const dash = new DashService({}, this.token, `/api/config/dashboard/${this.cliente.id}`);
            this.dashData = await dash.getAllDashs();


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
