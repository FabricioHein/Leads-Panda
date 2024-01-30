<template>
    <div>
        <!--  BEGIN NAVBAR  -->
        <div class="header-container fixed-top">
            <header class="header navbar navbar-expand-sm">
                <ul class="navbar-item theme-brand flex-row text-center">
                    <li class="nav-item theme-logo">
                        <router-link to="/" v-if="cliente">
                            <img :src="require('@/assets/images/odin-logo.png')" />
                        </router-link>
                    </li>
                    <li class="nav-item theme-text" v-if="cliente">
                        <router-link to="/" class="nav-link">{{ "ZigmaBot" }} </router-link>
                    </li>
                </ul>
                <div class="d-none horizontal-menu">
                    <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom"
                        @click="$store.commit('toggleSideBar', !$store.state.app.is_show_sidebar)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-menu">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </a>
                </div>

                <div class="navbar-item flex-row ms-md-auto">

                    <div class="dropdown nav-item user-profile-dropdown btn-group">
                        <a href="javascript:;" id="ddluser" data-bs-toggle="dropdown" aria-expanded="false"
                            class="avatar-p btn dropdown-toggle btn-icon-only user nav-link">
                            <img :src="usuario.linkFoto ? usuario.linkFoto : require('@/assets/images/user-no-foto.png')" alt="avatar" />
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="ddluser">
                            <li role="presentation">
                                <router-link to="/config/usuario" class="dropdown-item">
                                    <i class="bi bi-person-circle"></i>
                               
                                    Perfil
                                </router-link>
                            </li>
                            <li role="presentation">
                                <router-link to="/config/app" class="dropdown-item">
                                    <i class="bi bi-wrench-adjustable"></i>
                                
                                    Configurações
                                </router-link>
                            </li>
                  
                            <li role="presentation">
                                <router-link to="/login" class="dropdown-item"
                                @click="sairApp()"
                                >
                                <i class="bi bi-back"></i>                              
                                    Sair
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>



    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
const store = useStore();

const usuario = store.getters.usuario;
const cliente = store.getters.cliente;


const selectedLang = ref(null);
const countryList = ref(store.state.app.countryList);

const i18n = useI18n();

onMounted(() => {
    selectedLang.value = window.$appSetting.toggleLanguage();
    toggleMode();
});

const sairApp = ()=>{
    localStorage.removeItem("usuario");
    store.commit('setUpdate');
}

const toggleMode = (mode) => {
    window.$appSetting.toggleMode(mode);
};

const changeLanguage = (item) => {
    selectedLang.value = item;
    window.$appSetting.toggleLanguage(item);

    i18n.locale.value = item.code;
};
</script>
