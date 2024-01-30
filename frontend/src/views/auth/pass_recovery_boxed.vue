<template>
    <div class="form no-image-content auth-boxed">
        <div class="form-container outer">
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <h1 class="">Recuperar Senha</h1>
                            <p class="signup-link recovery">Digite o email utilizado para acessar a sua conta!</p>
                            <form class="text-start">
                                <div class="form">
                                    <div id="email-field" class="field-wrapper input">
                                        <div class="d-flex justify-content-between">
                                            <label for="email">EMAIL</label>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-at-sign">
                                            <circle cx="12" cy="12" r="4"></circle>
                                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                        </svg>
                                        <input type="email" class="form-control" placeholder="Email" v-model="email" />
                                    </div>

                                    <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper">
                                            <button type="submit" class="btn btn-primary"
                                            @click="recupearSenhaEmail"
                                            >Gerar Nova Senha</button>
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
</template>


<script>
import '@/assets/sass/authentication/auth-boxed.scss';

import { useMeta } from '@/composables/use-meta';
import store from '@/store';
import { mapState, mapActions } from 'vuex';
import usuarioService from '@/service/usuario-service'

export default {
    setup() {
        useMeta({ title: 'Login Cover' });
        store.commit('setLayout', 'auth');
    },
    ...mapActions(['setLogin']),
    ...mapState({
        usuario: (state) => state.usuario,
    }),
    data() {
        return {
            email: null,
            btn: false,
            isLoading: false

        };
    },
    methods: {
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
        async recupearSenhaEmail() {

            if (!this.email) {
                this.showMessage('Insira um email válido.', 'error');
                return false
            }

            const recupearSenhaEmail = new usuarioService();
            const envioEmail = await recupearSenhaEmail.recupearSenhaEmail(this.email);

            if (envioEmail) {
                this.showMessage('Verifique o Seu Email para Alterar sua Senha');

            }

        },
    },
};
</script>