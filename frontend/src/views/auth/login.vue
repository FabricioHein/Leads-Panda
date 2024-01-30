
<template>
    <div class="form full-form auth-cover">
        <div class="form-container">

            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <form class="text-start">
                                <div class="form">
                                    <div id="username-field" class="field-wrapper input">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-user">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <input type="text" class="form-control" placeholder="Email" v-model="email" />
                                    </div>

                                    <div id="password-field" class="field-wrapper input mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-lock">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <input id="password" type="password" class="form-control" placeholder="Senha"
                                            v-model="senha" @keyup.enter="this.logginApp()" />


                                        <span v-if="!ver" @click="verSenha"><svg xmlns="http://www.w3.org/2000/svg"
                                                width="16" height="16" fill="currentColor" class="bi bi-eye-slash"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                <path
                                                    d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                <path
                                                    d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                            </svg></span>
                                        <span v-else @click="verSenha">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                <path
                                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                            </svg>
                                        </span>

                                    </div>
                                    

                                </div>
                            </form>
                            <router-link to="/auth/nova-senha" class="forgot-pass-link">Esqueceu a senha?</router-link>



                            <div class="field-wrapper text-center p-2">
                                <button v-if="!btn" class="btn btn-primary" :disabled="btn"
                                    @click="this.logginApp()">Acessar</button>
                                <div v-if="btn && isLoading" class="loader dual-loader mx-auto"></div>

                            </div>
                            <p class="signup-link register">não tem uma conta? <router-link to="/auth/cadastro">Criar
                                    Conta</router-link></p>

                            <p class="terms-conditions">

                                © 2023 All Rights Reserved Smart TI</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-image">
                <div class="l-image"></div>
            </div>
        </div>
    </div>
</template>
<script>
import '@/assets/sass/authentication/auth-boxed.scss';
import '@/assets/sass/authentication/auth.scss';
import { useMeta } from '@/composables/use-meta';
import store from '@/store';
import Login from './service/login';
import { mapState, mapActions } from 'vuex';

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
            ver: false,
            email: '',
            senha: '',
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
        verSenha() {
            this.ver = !this.ver;

            this.$nextTick(() => {
                var x = document.getElementById("password");
                if (x.type === "password") {
                    x.type = "text";
                } else {
                    x.type = "password";
                }
            });


        },
        async logginApp() {
            const data = {
                username: this.email,
                password: this.senha,
            };
            const loginAcesso = new Login(data);

            if (!this.email) {
                this.showMessage('Digite um email válido.', 'error');
                return false
            }
            if (!this.senha) {
                this.showMessage('Digite uma senha.', 'error');
                return false
            }
            this.isLoading = !this.isLoading;
            this.btn = !this.btn

            const acesso = await loginAcesso.Logar();

            console.log(acesso)
            if (acesso.token && acesso.cliente.id) {
                localStorage.setItem('usuario', JSON.stringify(acesso));
                this.$store.dispatch('setLogin');
                this.showMessage(`Bem-vindo, ${acesso.usuario.nome}`);
            } else {
                localStorage.removeItem('usuario');
                this.showMessage(acesso.msg, 'error');
                this.isLoading = false;
                this.btn = false

            }
        },
    },
};
</script>
<style></style>