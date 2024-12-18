<template>
    <div>
        <div class="overlay-setting" :class="{ show: isOpen }" @click="isOpen = !isOpen"></div>

        <div class="app-settings" :class="{ active: isOpen }">
            <a href="javascript:;" id="settingbutton" class="setting" @click="isOpen = !isOpen">
                <h5 class="mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class=""
                    >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                        ></path>
                    </svg>
                </h5>
            </a>
            <perfect-scrollbar class="siderbar-tabela p-3" tag="div">
                <a class="btn-close" href="javascript:;" @click="isOpen = !isOpen"> </a>
                
                <slot></slot>
              
            </perfect-scrollbar>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import { useStore } from 'vuex';
    const store = useStore();

    const isOpen = ref(null);
    onMounted(() => {
        setTemplateStyle();
        setMenuStyle();
        setLayoutStyle();
    });

    const setTemplateStyle = () => {
        store.commit('toggleDarkMode', store.state.app.dark_mode);
    };

    const setMenuStyle = () => {
        store.commit('toggleMenuStyle', store.state.app.menu_style);
    };

    const setLayoutStyle = () => {
        store.commit('toggleLayoutStyle', store.state.app.layout_style);
    };
</script>
