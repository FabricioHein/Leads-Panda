<template v-if="usuario" src="./confi-conta.html"></template>

<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters, mapActions } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import store from '@/store';

export default {
    setup() {
        useMeta({ title: 'Conta Usuario' });
    },
    computed: {
        ...mapGetters(['usuario'])
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
            selected_file.value = URL.createObjectURL(event.target.files[0]);
        },
        save() {
            this.showMessage('Salvo com sucesso.');
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
            console.log(store.state)

        },
        onMounted() {
            this.setTemplateStyle();
            this.setMenuStyle();
            this.setLayoutStyle();
        },
    },
};


</script>
