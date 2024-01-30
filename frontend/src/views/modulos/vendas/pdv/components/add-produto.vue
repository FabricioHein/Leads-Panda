<template>
  <div class="form">
    <div class="row">
       <div class="col-5">
      
        <label>Código:</label>
        <v-select  v-model="selected" :reduce="(option) => option.id" :options="options" />
        <label>Quantidade:</label>
        <InputVue type="number" v-model:value="params.email" />
        <label>Valor Unitário</label>
        <InputVue type="numer" v-model:value="params.cnpj" />
        <label>Valor Unitário</label>
        <InputVue type="numer" v-model:value="params.cnpj" />
      </div>
      <div class="col">
        <label>Valor Total</label>
        <InputVue type="numer" v-model:value="params.cnpj" disabled="true" />
        <div class="table-responsive">
          <table role="table" aria-busy="false" aria-colcount="5" class="table table-hover table-bordered"
            id="__BVID__415">
            <thead role="rowgroup">
              <tr role="row">
                <th role="columnheader" scope="col" aria-colindex="1">
                  <div>Produto</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="2">
                  <div>Quantidade</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="3">
                  <div>Valor Unitário</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="4" class="text-center">
                  <div>Total</div>
                </th>
                <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center">
                  <div>Ação</div>
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              <tr role="row">
                <td aria-colindex="1" role="cell">{{ "Café" }}</td>
                <td aria-colindex="2" role="cell">{{ 2 }}</td>
                <td aria-colindex="3" role="cell">{{ 10 }}</td>
                <td aria-colindex="4" role="cell" class="text-center">
                  {{ 20 }}
                </td>

                <td aria-colindex="5" role="cell" class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-trash-2 icon">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  </div>

</template>
<script>
import InputVue from '@/components/input.vue';
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
      options: [
        {
          id: 1,
          label: 'Teste'
        }
      ],
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

  },
  methods: {
    buscarCodigo(e) {

      console.log(e.target.value)

    }
  }

}
</script>