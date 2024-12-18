<template src="./perfil.html"></template>

<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters, mapActions } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import store from '@/store';
import Usuario from '@/service/usuario-service';
import ImportarService from '@/service/import-service';



export default {
    setup() {
        useMeta({ title: 'Conta Usuario' });
    },
    data() {
        return {
            linkFoto: undefined
        }
    },
    computed: {
        ...mapGetters(['usuario', 'token'])
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
        async change_file(event) {

            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.usuario.linkFoto  = e.target.result
                };
                reader.readAsDataURL(file);
            };     

        },
        async save() {
            const usuarioData = JSON.parse(JSON.stringify(this.usuario));
            const atualizarUsuario = new Usuario(usuarioData, this.token);
            const atualizar = await atualizarUsuario.AtualizarUsuario();

            if (atualizar) {
                this.showMessage('Salvo com sucesso.');

                 const usuario = JSON.parse(localStorage.getItem('usuario')) ;
                 usuario.usuario = atualizar;
                 localStorage.setItem('usuario', JSON.stringify(usuario));



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
