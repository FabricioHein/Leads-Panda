<template>
  <div class="form">
    <div class="row">
      <div class="col-6">
        <label>Nome</label>
        <InputVue type="text" v-model:value="params.nome" />
        <label>Descrição</label>
        <textarea v-model="params.descricao" class="form-control mb-4" rows="3"></textarea>

      </div>

      <div class="col-6">
        <label>Código</label>
        <InputVue type="text" v-model:value="params.codigo" />


      </div>
    </div>
  </div>
</template>
<script>
import InputVue from "@/components/Input-validate.vue";

import { Money3Directive } from 'v-money3';
import { mapGetters } from 'vuex';
import ImportarService from '@/service/import-service';


export default {
  name: 'add',
  components: {
    InputVue,
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
      },
    };
  },
  props: {
    params: {},
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
        `/importar/file/${this.usuario.id}`,
        formData
      )
      const upload = await importar.importarFile()
      if (upload) {
        this.showMessage('Carregado com Sucesso')
      }

      this.params.link_img = upload.downloadURL;

    },
  },
};
</script>
