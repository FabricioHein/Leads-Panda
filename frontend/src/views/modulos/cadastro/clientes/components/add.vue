<template>
  <div class="form">
    <div class="row">

      <div class="col-6">
        <div class="upload mt-4 pe-md-4">
          <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
          <img :src="params.linkFoto ? params.linkFoto : require('@/assets/images/photo.png')" alt="profile"
            class="profile-preview" @click="$refs.fl_profile.click()" />
          <p class="mt-2">Carregar Imagem </p>
        </div>
        <label>Nome</label>
        <input v-model="params.nome" placeholder="Nome" type="text" class="form-control" />

        <label>Sobrenome</label>
        <input v-model="params.sobrenome" placeholder="Sobrenome" type="text" class="form-control" />


      </div>

      <div class="col-6">
        <label>Telefone</label>
        <input v-model="params.telefone" v-maska="'+55(##)#####-####'" placeholder="(__) ____-____" type="text"
          class="form-control" />
          <label>Email</label>
        <InputVue type="text" v-model:value="params.email" />
        <label>Data Nascimento</label>
        <input v-model="params.data_nascimento" type="date" class="form-control" />
        <label>RG</label>
        <input v-model="params.rg" type="text" v-maska="'###.###.###-##'" class="form-control" />       

        <div v-if="cpf || params.cpf">
          <label>CPF</label>
          <input v-model="params.cpf" v-maska="'###.###.###-##'" placeholder="CPF" type="text" class="form-control" />
        </div>

        <div v-if="cnpj || params.cnpj">
          <label>CNPJ</label>
          <input v-model="params.cnpj" v-maska="'##.###.###/####-##'" placeholder="CNPJ" type="text"
            class="form-control" />
        </div>
      </div>
    </div>
    <div class="row pt-2">
      <span>Tipo Pessoa</span>
      <div class="col-6">
        <label style="padding: 25px;">Fisica:</label>
        <input type="checkbox" v-model="cpf" @click="changeCpfCnpj" />
        <label style="padding: 25px;">Juridica</label>
        <input type="checkbox" v-model="cnpj" @click="changeCpfCnpj" />
      </div>
    </div>
    <enderecoVue :params="params" />

  </div>
</template>
<script>
import InputVue from '@/components/Input-validate.vue';
import ImportarService from '@/service/import-service';
import { mapGetters } from 'vuex';
import enderecoVue from '@/views/components/endereco.vue';


export default {
  name: 'add',
  components: {
    InputVue,
    enderecoVue
  },
  data() {
    return {
      cnpj: false,
      cpf: false
    }
  },
  props: {
    params: {}
  },
  computed: {
    ...mapGetters(['usuario', 'cliente', 'token']),
  },
  created(){
    this.changeCpfCnpj()
  },
  methods: {
    changeCpfCnpj() {

      if (this.cpf) {
        this.cnpj = true;
      }
      else {
        this.cnpj = false;
        this.cpf = true
      }
      if(this.params.cpf && this.params.cnpj){
        this.cnpj = true;
        this.cpf = true

      }
    },
    async change_file(event) {

      const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  this.params.linkFoto = e.target.result
                  this.showMessage('Carregado com Sucesso')
                };
                reader.readAsDataURL(file);
            };   

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
  }

}
</script>