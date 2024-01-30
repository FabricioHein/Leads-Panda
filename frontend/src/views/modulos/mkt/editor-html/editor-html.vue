<template src="./editor-html.html"></template>
<style scoped>
.panel {
    padding: 0;
}

.painel-form {
    background-color: #ffff;
}

.painel-modelo {
    background-color: #ffff;

}
</style>


<script>
import '@/assets/sass/drag-drop/drag-drop.css';
import { mapGetters } from 'vuex';
import webBuilder from './components/web-builder.vue'

export default {
    setup() {
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token']),
    },
    components: {
        webBuilder
    },
    created() {

    },

};


</script>
