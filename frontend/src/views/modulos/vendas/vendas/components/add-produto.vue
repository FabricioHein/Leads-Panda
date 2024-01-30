<template>
  <div class="form">
    <div class="row">
      <div class="col-6">
        <div class="upload mt-4 pe-md-4">
          <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
          <img :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')" alt="profile"
            class="profile-preview" @click="$refs.fl_profile.click()" />
          <p class="mt-2">Carregar Imagem </p>
        </div>
        <label>Nome</label>
        <InputVue type="text" v-model:value="params.nome" />
        <label>Preço Venda</label>
        <input class="form-control" v-model.lazy="params.preco_venda" v-money3="config" />
        <label>Preço Mínimo</label>
        <input class="form-control" v-model.lazy="params.preco_venda_min" v-money3="config" />
        <label>Preço Máximo</label>
        <input class="form-control" v-model.lazy="params.preco_venda_max" v-money3="config" />


      </div>

      <div class="col-6">



        <label>Código</label>
        <InputVue type="text" v-model:value="params.codigo" />
        <label>Qtd Estoque</label>
        <InputVue type="number" v-model:value="params.qtd_estoque" />
        <label>Qtd Estoque Real</label>
        <InputVue type="number" v-model:value="params.qtd_estoque_real" />



      </div>
    </div>
  </div>
</template>
<script>
import InputVue from '@/components/Input-validate.vue';
import { Money3Directive } from "v-money3";


export default {
  name: 'add',
  components: {
    InputVue

  },
  directives: {
    money3: Money3Directive,
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
  props: {
    params: {},

  }

}
</script>