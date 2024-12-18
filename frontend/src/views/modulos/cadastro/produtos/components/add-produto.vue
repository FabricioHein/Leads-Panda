<template>
  <div class="form">
    <div class="row">
      <div class="col-6">
        <div class="upload mt-4 pe-md-4">
          <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
          <img :src="params.link_img ? params.link_img : require('@/assets/images/produto.png')" alt="profile"
            class="profile-preview" @click="$refs.fl_profile.click()" />
          <p class="mt-2">Carregar Imagem</p>
        </div>
        <label>Nome</label>
        <InputVue type="text" v-model:value="params.nome" />
        <label>Preço Venda</label>
        <inputMoney v-model="params.preco_venda" :options="options" />


      </div>

      <div class="col-6">
        <label>Código</label>
        <InputVue type="text" v-model:value="params.codigo" />
        <label>Descrição</label>
        <textarea v-model="params.descricao" class="form-control mb-4" rows="3"></textarea>


      </div>
    </div>
  </div>
</template>
<script>
import InputVue from "@/components/Input-validate.vue";

import { Money3Directive } from 'v-money3';
import { mapGetters } from 'vuex';
import ImportarService from '@/service/import-service';
import inputMoney from '@/views/components/input-money.vue';

export default {
  name: 'add',
  components: {
    InputVue,
    inputMoney
  },
  directives: {
    money3: Money3Directive,
  },
  computed: {
    ...mapGetters(['usuario', 'cliente', 'token']),
  },
  data() {
    return {
      options: {
        currency: 'BRL',
        hideCurrencySymbolOnFocus: false,
        hideGroupingSeparatorOnFocus: false,
        hideNegligibleDecimalDigitsOnFocus: false,
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

      const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  this.params.link_img = e.target.result
                  this.showMessage('Carregado com Sucesso')
                };
                reader.readAsDataURL(file);
            };


    },
  },
};
</script>
