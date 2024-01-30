<template src="./config.html"></template>

<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters, mapActions } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import store from '@/store';
import Config from './service/config';

export default {
    setup() {
        useMeta({ title: 'Configuração' });
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token'])
    },
    methods: {
        setTemplateStyle() {
            store.commit('toggleDarkMode', store.state.app.dark_mode);
        },
        setMenuStyle() {
            store.commit('toggleMenuStyle', store.state.app.menu_style);
        },
        setLayoutStyle() {
            store.commit('toggleLayoutStyle', store.state.app.layout_style);
        },
        change_file(event) {

            this.usuario.linkFoto = URL.createObjectURL(event.target.files[0]);


        },
        async save() {
            const configData = JSON.parse(JSON.stringify(this.cliente));
            const atualizarConfig = new Config(configData, this.token);
            const atualizar = await atualizarConfig.AtualizarConfig();

            if (atualizar) {
                this.showMessage('Salvo com sucesso.');
                // this.$store.dispatch('setUpdate');

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
        created() {


        },
        onMounted() {

            this.setTemplateStyle();
            this.setMenuStyle();
            this.setLayoutStyle();
        },
    },
};


</script>
