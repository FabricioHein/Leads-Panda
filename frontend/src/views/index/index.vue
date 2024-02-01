<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
 
    <div class="navbar-nav">

        <router-link to="/">
                            <img :src="require('@/assets/images/odin-logo.png')" style="width: 50px;"/>
        </router-link>

      <ul class="navbar-nav navbar-item flex-row text-center">

        
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sobre</a>
        </li>
       
      </ul>
      <button class="btn btn-secondary" type="button" @click="getLogin">Entrar</button>
    </div>
  </div>
</nav>

<div class="container  ">
  <div class="row">
    <div class="col p-5">
       
        <h1 class="p-5"> Potencialize seus resultados com uma abordagem de captura de <b>Leads</b> mais eficiente.</h1>
        <p class="signup-link register">não tem uma conta? Experimente <b>30 Dias Grátis </b>
            <button class="btn btn-secondary" type="button" @click="getCadastro">Testar Grátis</button>
        </p>
    </div>
    
    <div class="col">
        <img :src="require('@/assets/images/Home.png')"  class=""/>
       
    </div>
  </div>
</div>
<div class="container ">
  <div class="row">
    
    <div class="col ">
        <img :src="require('@/assets/images/Home2.png')"  class=""/>
    </div>
    <div class="col p-5">
       
       <h1 class="p-5"> Chat Bot Web e What’App para integrar em 1 só lugar</h1>
   </div>
  </div>
</div>

        <preco></preco>
    </div>
</template>

<style>
.img {
                    width: 34px;
                    height: 34px;
                    border-radius: 6px;
                }
    .navbar {
      min-height: 80px; /* Ajuste a altura conforme necessário */
    }

    .navbar-brand {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .navbar-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .navbar-toggler {
      display: none; /* Oculta o botão toggler por padrão */
    }

    @media (max-width: 991.98px) {
      .navbar-nav {
        flex-direction: column;
        text-align: center;
      }

      .navbar-nav .nav-item {
        margin: 10px 0;
      }

      .navbar-toggler {
        display: block; /* Exibe o botão toggler em telas menores */
      }
    }
</style>
<script>
import router from '@/router';

import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import preco from '@/views/components/preco.vue';

import { useMeta } from '@/composables/use-meta';
   


export default {
    setup() {
        useMeta({ title: 'Home' });
    },
    data() {
        return {

        }
    },
    components: {
        preco

    },
    computed: {

    },
    created() {


    },
    methods: {
        getLogin(){
            router.push('/login');
        },
        getCadastro(){
            router.push('/auth/cadastro');
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


    },
};


</script>
