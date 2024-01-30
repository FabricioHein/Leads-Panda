<template>
    <div class="layout-px-spacing">
        <div class="error404 text-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 me-auto mt-5 text-md-start text-center">
                        <a href="index.html" class="ms-md-5">
                            <img alt="image-404" src="@/assets/images/logo2.svg" class="theme-logo" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="container-fluid error-content">
                <div class="">
                    <h1 class="error-number">404</h1>
                    <p class="mini-text">Ooops!</p>
                    <p class="error-text mb-4 mt-1">Não foi encontrada a página solicitada</p>
                    <a href="/" class="btn btn-primary mt-5">Voltar</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import '@/assets/sass/pages/error/style-400.scss';
import store from '@/store';
import { useMeta } from '@/composables/use-meta';


export default {
    name: 'erro404',
    setup() {
        useMeta({ title: 'Error 404' });

        store.commit('setLayout', 'auth');
    },

}

</script>
