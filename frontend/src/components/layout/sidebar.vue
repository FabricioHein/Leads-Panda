<template>
    <!--  BEGIN SIDEBAR  -->
    <div class="sidebar-wrapper sidebar-theme">
        <nav ref="menu" id="sidebar">
            <div class="bottom"></div>
            <perfect-scrollbar v-if="permissaoUsuario.length > 0" class="list-unstyled menu-categories" tag="ul"
                :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">

             

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
