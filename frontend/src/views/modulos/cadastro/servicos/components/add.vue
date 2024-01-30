<template>
  <div class="form">
    <div class="row">
      <div class="col-6">
        <label>Empresa</label>
        <InputVue type="text" v-model:value="params.empresa" />
        <label>Email</label>
        <InputVue type="text" v-model:value="params.email" />
        <label>CNPJ</label>
        <InputVue type="text" v-model:value="params.cnpj" />
        <label>Telefone</label>
        <InputVue type="text" v-model:value="params.telefone" />

      </div>
      <div class="col-6">
        <label>Celular</label>
        <InputVue type="text" v-model:value="params.codigo" />       


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