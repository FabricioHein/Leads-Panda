<template>
    <div v-if="params.admin || params.ver">
        <slot></slot>
    </div>
    <div v-else class="layout-px-spacing">
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
                    <h1 class="error-number">503</h1>
                    <p class="mini-text">Ooops!</p>
                    <p class="error-text mb-4 mt-1">Você Não Tem Permissão Para Acessar a Página, Solicite ao Administrador
                    </p>
                    <a href="/" class="btn btn-primary mt-5">Voltar</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import '@/assets/sass/pages/error/style-400.scss';
import store from '@/store';

export default {
    name: 'page',
    props: {
        params: Object
    },

}

</script>
