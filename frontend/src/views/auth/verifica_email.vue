<template>
    <div class="form auth-boxed">
        <div class="form-container outer">
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
                                {{ text }}
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
        useMeta({ title: 'Verificar Email' });
        store.commit('setLayout', 'auth');
    },
    ...mapActions(['setLogin']),

    data() {
        return {
            text: 'Aguarde, estamos verificando'

        };
    },
    created() {
        this.verificacaoEmail();
    },
    methods: {
        async verificacaoEmail() {

            const verifica = new usuarioService({}, null, `/auth/validar-email/${this.$route.params.uuid}`);
            const verificaEmail = await verifica.verificaEmail();
            console.log(verificaEmail)
            this.text = verificaEmail.msg;
            this.showMessage(verificaEmail.msg, verificaEmail.status == 200 || verificaEmail.status == true ? 'success' : 'error');

            if(verificaEmail.msg, verificaEmail.status == 200 || verificaEmail.status == true ){
                router.push('/login')
            };
           

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
