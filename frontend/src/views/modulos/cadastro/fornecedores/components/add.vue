<template>
  <div class="form">
    <div class="row">
      <h6>Dados Básicos</h6>
      <div class="col-6">
        <div class="upload mt-4 pe-md-4">
          <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
          <img :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')" alt="profile"
            class="profile-preview" @click="$refs.fl_profile.click()" />
          <p class="mt-2">Carregar Imagem </p>
        </div>
        <label>Empresa</label>
        <InputVue type="text" v-model:value="params.empresa" />
        <label>Email</label>
        <InputVue type="text" v-model:value="params.email" />
        <label>CNPJ</label>
        <InputVue type="text" v-model:value="params.cnpj" />       

      </div>
      <div class="col-6">
        <label>Celular</label>
        <InputVue type="text" v-model:value="params.celular" />   
        <label>Telefone</label>
        <InputVue type="text" v-model:value="params.telefone" /> 
        <label>Responsável</label>
        <InputVue type="text" v-model:value="params.nome_responsavel" />    

      </div>
      <hr>

    </div>
    <div class="row">
      <hr>

      <h6>Endereço</h6>
      <div class="col-6">
        <label>Rua</label>
        <InputVue type="text" v-model:value="params.logradouro" />
        <label>Bairro</label>
        <InputVue type="text" v-model:value="params.bairro" />
        <label>Cidade</label>
        <InputVue type="text" v-model:value="params.cidade" />  
        <label>Complemento</label>
        <InputVue type="text" v-model:value="params.complemento" />       

      </div>
      <div class="col-6">
        <label>Cidade</label>
        <InputVue type="text" v-model:value="params.cidade" />   
        <label>Pais</label>
        <InputVue type="text" v-model:value="params.pais" /> 
        <label>Número</label>
        <InputVue type="text" v-model:value="params.numero" />         

      </div>
      <hr>

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