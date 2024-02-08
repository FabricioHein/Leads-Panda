<template>
    <div class="form full-form auth-cover">
        <div class="form-container">
            <div class="form-image">
                <div class="l-image"></div>
            </div>
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <form class="text-start">
                                <div class="form">
                                    <img :src="require('@/assets/images/logo-word.png')" style="width: 90px;" />
                                    <div id="username-field" class="field-wrapper input">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-user">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <input type="email" class="form-control" placeholder="Digite o Seu Email"  v-model="email" />
                                    </div>
                                </div>
                            </form>

                            <div class="field-wrapper text-center p-2">
                                <button class="btn btn-primary" v-if="!btn" @click="recupearSenhaEmail">Recuperar Acesso</button>
                                <div  class="loader dual-loader mx-auto" v-else></div>
                            </div>
                            <p class="terms-conditions">
                                © 2023 All Rights Reserved Smart TI</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
import '@/assets/sass/authentication/auth-boxed.scss';
import '@/assets/sass/authentication/auth.scss';
import { useMeta } from '@/composables/use-meta';

import store from '@/store';
import usuarioService from '@/service/usuario-service'
import router from '@/router';

export default {
    setup() {
        useMeta({ title: 'Login Cover' });
        store.commit('setLayout', 'auth');
    },

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

            this.btn = true;

            if (!this.email) {
                this.showMessage('Insira um email válido.', 'error');
                return false
            }

            const recupearSenhaEmail = new usuarioService();
            const envioEmail = await recupearSenhaEmail.recupearSenhaEmail(this.email);

            let status = envioEmail.status ? 'success' : 'error';


            if (envioEmail) {
                this.showMessage(envioEmail.msg, status);
                this.btn = !this.btn;

                if(envioEmail.linkToLoginPage){
                    router.push(envioEmail.linkToLoginPage)

                }


            }


        },
    },
};
</script>