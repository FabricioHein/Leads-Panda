<template>
  <div class="form">
    <div class="row">
      <div class="col-6">
        <div class="upload mt-4 pe-md-4">
          <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
          <img :src="params.profilePicUrl ? params.profilePicUrl : require('@/assets/images/contato.png')" alt="profile"
            class="profile-preview" @click="$refs.fl_profile.click()" />
          <p class="mt-2">Carregar Imagem </p>
        </div>
        <label>Nome</label>
        <InputVue type="text" v-model:value="params.name" />

      </div>
     
      <div class="col-6">
        <label>Telefone</label>
        <input v-model="params.number" v-maska="'+55(##)#####-####'" placeholder="(__) ____-____" type="text"
          class="form-control" />
        <label>Email</label>
        <InputVue type="text" v-model:value="params.email" />
        

      </div>

    </div>
    
    <div class="row">
      <div class="col p-4">    
    
        <enderecoVue :params="params"/>

    </div>
        
      </div>
      




  </div>
</template>
<script>
import InputVue from '@/components/Input-validate.vue';
import { Money3Directive } from "v-money3";
import ImportarService from '@/service/import-service';
import { mapGetters } from 'vuex';
import enderecoVue from '../../../../components/endereco.vue'




export default {
  name: 'add',
  components: {
    InputVue,
    enderecoVue 

  },
  directives: {
    money3: Money3Directive,
  },
  computed: {
    ...mapGetters(['usuario', 'cliente', 'token']),
  },
  data() {
    return {
      config: {
        masked: false,
        prefix: '',
        suffix: '',
        thousands: ',',
        decimal: '.',
        precision: 2,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
      }
    }
  },
  methods: {
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
    async change_file(event) {
      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      console.log('>> formData >> ', formData);

      const importar = new ImportarService(
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        },
        this.token,
        `/api/importar/file/${this.usuario.id}`,
        formData
      )
      const upload = await importar.importarFile()
      if (upload) {
        this.showMessage('Carregado com Sucesso')
      }

      this.params.profilePicUrl = upload.downloadURL;


    }
  },
  props: {
    params: {},

  }

}
</script>