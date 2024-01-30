<template>
    <div :class="[$store.state.app.layout_style, $store.state.app.menu_style]">
        <component v-bind:is="layout"></component>
    </div>
</template>
<script setup>
    import { computed } from 'vue';
    import '@/assets/sass/app.scss';

    import { useStore } from 'vuex';

    const store = useStore();

    const layout = computed(() => {
        return store.getters.layout;
    });
</script>
<script>
    // layouts
    import appLayout from './layouts/app-layout.vue';
    import authLayout from './layouts/auth-layout.vue';

    export default {
        components: {
            app: appLayout,
            auth: authLayout,
        },
    };
</script>
