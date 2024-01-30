<template>
    <!--  BEGIN SIDEBAR  -->
    <div class="sidebar-wrapper sidebar-theme">
        <nav ref="menu" id="sidebar">
            <div class="bottom"></div>
            <perfect-scrollbar v-if="permissaoUsuario.length > 0" class="list-unstyled menu-categories" tag="ul"
                :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">

                  <li class="menu" v-for="permissao in permissaoUsuario" :key="permissao.ordem" >
                    <a  class="dropdown-toggle" data-bs-toggle="collapse"
                        data-bs-target="#pages" aria-controls="pages" aria-expanded="false">
                        <div class="">
                            <i :class="[permissao.icon_modulo]"></i>
                            <span class="p-3">{{ permissao.modulo }}</span>
                        </div>
                        
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>

                    <ul id="pages" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li v-for="submodulos in permissao.submodulos" :key="submodulos.ordem" >                            

                          <template v-if="submodulos.ver">
                            <router-link :to="permissao.url_modulo + submodulos.url" @click="toggleMobileMenu">
                            {{
                                  submodulos.nome 
                            }}</router-link>
                          </template>
                          
                         

                        </li>

                    </ul>
                </li>

            </perfect-scrollbar>
        </nav>
    </div>
    <!--  END SIDEBAR  -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const permissaoUsuario = store.getters.permissao;

onMounted(() => {
    const selector = document.querySelector('#sidebar a[href="' + window.location.pathname + '"]');
    if (selector) {
        const ul = selector.closest('ul.collapse');
        if (ul) {
            let ele = ul.closest('li.menu').querySelectorAll('.dropdown-toggle');
            if (ele) {
                ele = ele[0];
                setTimeout(() => {
                    ele.click();
                });
            }
        } else {
            selector.click();
        }
    }
});

const toggleMobileMenu = () => {
    if (window.innerWidth < 991) {
        store.commit('toggleSideBar', !store.state.app.is_show_sidebar);
    }
};
</script>
