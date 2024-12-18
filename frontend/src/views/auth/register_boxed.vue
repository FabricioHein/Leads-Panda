<template>
    <div class="form auth-boxed">
        <div class="form-container outer" v-if="!verificacaoEmail">
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <img :src="require('@/assets/images/odin-logo.png')" style="width: 50px;" />

                            <h1 class="">Registrar</h1>
                            <p class="signup-link register">Já tem uma conta? <router-link
                                    to="/login">Acessar</router-link>
                            </p>
                            <div class="text-start">
                                <div class="form">
                                    <div id="email-field" class="field-wrapper input">
                                        <label for="email">EMAIL</label>
                                        <input type="email" class="form-control" placeholder="Email" v-model="email" />
                                    </div>

                                    <div id="usernome-field" class="input">
                                        <label for="usernome">Nome</label>

                                        <input type="text" class="form-control" placeholder="Usuário" v-model="nome" />
                                    </div>

                                    <div id="cpf-field" class="input">
                                        <label for="cpf">CPF/CNPJ</label>
                                        <input v-model="cpf"  placeholder="CPF/CNPJ" type="text"
                                            class="form-control" />

                                    </div>
                                    <!-- <div id="telefone-field" class="input">
                                        <label>Telefone</label>
                                        <input class="form-control" v-model="telefone" v-maska="'+55(##)#####-####'"
                                            placeholder="Digite telefone" type="text" />
                                    </div> -->
                                    <div id="senha" class="input">
                                        <label>Senha</label>
                                        <div class="input-group">
                                            <input id="password" type="password" class="form-control"
                                                placeholder="Senha" v-model="password" />
                                            <button v-if="ver" @click="verSenha" type="button" class="btn btn-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z">
                                                    </path>
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button v-else @click="verSenha" type="button" class="btn btn-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                                    <path
                                                        d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                    <path
                                                        d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                    <path
                                                        d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>

                                    <div id="password-field" class="input">
                                        <label>Repetir Senha</label>

                                        <div class="input-group">
                                            <input id="password-rep" type="password" class="form-control"
                                                placeholder="Senha" v-model="re_password" />
                                            <button v-if="ver" @click="verSenhaRepetir" type="button"
                                                class="btn btn-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z">
                                                    </path>
                                                    <path
                                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button v-else @click="verSenhaRepetir" type="button"
                                                class="btn btn-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                                    <path
                                                        d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                    <path
                                                        d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                    <path
                                                        d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>

                                    <div class="terms_condition mb-4 p-4">
                                        <div class="checkbox-outline-primary custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" v-model="termos"
                                                id="chkTerms" />
                                            <label class="custom-control-label" for="chkTerms"> Estou de acordo com <a
                                                    href="javascript:;"> termos e condições </a></label>
                                        </div>
                                    </div>
                                    <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper">
                                            <button type="submit" class="btn btn-primary"
                                                @click="novoUsuarioValida">Iniciar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form class="text-start">

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-container outer" v-else>
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <!-- Logo -->
                            <div style="text-align: center;">
                                <router-link to="/">
                                    <img :src="require('@/assets/images/odin-logo.png')" style="width: 50px;" />
                                </router-link>
                            </div>
                            <!-- Mensagem -->
                            <div style="text-align: center; margin-top: 20px;">
                                <h2>Verifique o Seu E-mail</h2>
                                <p>Obrigado por se cadastrar! Por favor, verifique o seu e-mail para concluir o
                                    processo.
                                </p>
                            </div>

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
import usuarioService from '@/service/usuario-service'

import { useMeta } from '@/composables/use-meta';
import store from '@/store';
import { mapState, mapActions } from 'vuex';
import router from '@/router';

export default {
    setup() {
        useMeta({ title: 'Login' });
        store.commit('setLayout', 'auth');
    },
    ...mapActions(['setLogin']),
    ...mapState({
        usuario: (state) => state.usuario,
    }),
    data() {
        return {
            verificacaoEmail: false,
            ver: false,
            verRepetir: false,
            telefone: null,
            email: null,
            nome: null,
            nome_empresa: null,
            cnpj_cpf: null,
            termos: false,
            isLoading: false,
            cpf: null,
            password: null,
            re_senha: null
        };
    },
    methods: {
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
        verSenhaRepetir() {
            this.verRepetir = !this.verRepetir;

            this.$nextTick(() => {
                var x = document.getElementById("password-rep");
                if (x.type === "password") {
                    x.type = "text";
                } else {
                    x.type = "password";
                }
            });


        },

        async novoUsuarioValida() {
            if (!this.email) {
                this.showMessage('Insira um email válido.', 'error');
                return false
            }
            if (this.password != this.re_password) {
                console.log(this.password, this.re_password)
                this.showMessage('Preencha a Senha Igual em Ambos os Campos de Senha.', 'error');
                return false
            }
            if (!this.termos) {
                this.showMessage('Marque os Termos', 'error');
                return false
            }
            if (!this.cpf) {
                this.cnpj_cpf = this.cpf;
                this.showMessage('Preencha um CPF', 'error');
                return false
            }
            if (!this.nome_empresa) {
                this.nome_empresa = this.nome

            }
            if (!this.nome) {
                this.showMessage('Insira um nome válido.', 'error');
                return false
            }

            if (!this.password) {
                this.showMessage('Insira um senha válida.', 'error');
                return false
            }

            const clienteJson = {
                cliente: {
                    nome_empresa: this.nome_empresa,
                    cnpj_cpf: this.cnpj_cpf
                },
                usuario: {
                    email: this.email,
                    nome: this.nome,
                    cpf: this.cpf,
                    termos: this.termos,
                    password: this.password,
                    primeiro_acesso: true,
                    gerente_conta: true,
                    isAdmin: true
                }
            };

            const novoCliente = new usuarioService(clienteJson);
            const criarNovo = await novoCliente.novoCliente();

            console.log(criarNovo)
            this.showMessage(criarNovo.msg, criarNovo.status == 200 || criarNovo.status == true ? 'success' : 'error');

            if (criarNovo.status == 200 || criarNovo.status == true) {
                this.verificacaoEmail = true;
            }

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
