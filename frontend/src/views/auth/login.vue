<template>
    <div class="form full-form auth-cover" v-if="!params">
        <div class="form-container">
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <div class="d-flex justify-content-center">
                                <img :src="require('@/assets/images/logo-word.png')"  width="100px" />
</div>
                            <form class="text-start">
                                <div class="form">
                                   
                                  <div id="username-field" class="field-wrapper input">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <input type="text" class="form-control" placeholder="Email" v-model="email" />
                                    </div> 

                                    <div id="password-field" class="field-wrapper input mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
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

                           <div>
                            <div v-if="btn && isLoading" class="loader dual-loader mx-auto"></div>
                            <div v-else>
                                <div class="field-wrapper text-center p-2">
                                <button v-if="!btn" class="btn btn-primary" :disabled="btn"
                                    @click="this.logginApp()">
                                    Acessar</button>
                                <div v-if="btn && isLoading" class="loader dual-loader mx-auto"></div>
                                
                            </div> 
                            <div class="field-wrapper text-center p-2">                            
                                  <button v-if="!btn" class="btn btn-danger" :disabled="btn"
                                    @click="this.logginAppGoogle()">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                                    </svg> &nbsp Google</button>
                            </div>
                        </div> 

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
    <div else>     
    </div>
</template>
<script>
import '@/assets/sass/authentication/auth-boxed.scss';
import '@/assets/sass/authentication/auth.scss';
import { useMeta } from '@/composables/use-meta';
import store from '@/store';
import Login from './service/login';
import router from '@/router';

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
            params: null,
            ver: false,
            email: '',
            senha: '',
            btn: false,
            isLoading: false
        };
    },
    async created() {


        if (this.$route.query.token) {
            this.params = this.$route.query;
            const loginAcesso = new Login(this.params);

           const acessoGoogle = await loginAcesso.loginAppGoogle();

            console.log(acessoGoogle)
            if (acessoGoogle.token && acessoGoogle.cliente.id) {
                localStorage.setItem('usuario', JSON.stringify(acessoGoogle));
                this.$store.dispatch('setLogin');
                router.push('/')
                this.showMessage(`Bem-vindo, ${acessoGoogle.usuario.nome}`);
            } else {
                localStorage.removeItem('usuario');
                this.showMessage(acessoGoogle.message, 'error');
                this.isLoading = false;
                this.btn = false
                router.push('/login');
            }
        }
        console.log(this.$route.query)
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
                router.push('/home')
            } else {
                localStorage.removeItem('usuario');
                this.showMessage(acesso.message, 'error');
                this.isLoading = false;
                this.btn = false;
                router.push('/login')

            }
        },
        async logginAppGoogle() {

            this.isLoading = !this.isLoading;
            this.btn = !this.btn

            // Redireciona para a rota de autenticação do Google
            window.location.href = 'http://localhost:3000/auth/google';


        }
    },
};
</script>
<style></style>