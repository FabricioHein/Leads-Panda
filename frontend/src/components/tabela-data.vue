<template>
  <DxDataGrid :data-source="dados" key-expr="chave" :allow-column-resizing="true" :column-resizing-mode="'nextColumn'"
    :column-min-width="50" :column-auto-width="true" :allow-column-reordering="true" :show-column-lines="true"
    :show-row-lines="true" :show-borders="true" :row-alternation-enabled="true">

    <!-- <DxDataGrid :data-source="dados" key-expr="chave" :allow-column-resizing="true"
  :column-resizing-mode="'nextColumn'" :column-min-width="50" :column-auto-width="true"
  :allow-column-reordering="true" :show-column-lines="true" :show-row-lines="true"
  :show-borders="true" :row-alternation-enabled="true"

   @RowClick="OnRowClick($event)"
 > -->

    <!-- CONFIGURACAO PADRAO -->
    <DxPaging :page-size="10" />

    <!-- COLUNAS -->

<!-- 
    <DxColumn caption="Competência" data-field="cadastro.informacoes_pessoais.nome" />
    <DxColumn caption="Pagamento" data-field="cadastro.informacoes_pessoais.cpf" />
    <DxColumn caption="Movimento" data-field="cadastro.informacoes_pessoais.email" />
    <DxColumn caption="Perfil" data-field="cadastro.informacoes_pessoais.email" />
    <DxColumn caption="Valor Cota" data-field="cadastro.informacoes_pessoais.email" />
    <DxColumn caption="Qtda Cotas" data-field="cadastro.informacoes_pessoais.email" :visible="false" />
    <DxColumn caption="Valor" data-field="cadastro.informacoes_pessoais.email" :visible="false" />
    <DxColumn caption="Valor Atualizado" data-field="cadastro.informacoes_pessoais.email" :visible="false" />
    <DxColumn caption="Rentabilidade" data-field="cadastro.informacoes_pessoais.email" :visible="false" /> -->


    <!-- SUB-GRID INTERNA -->

    <!-- <DxMasterDetail :enabled="true" template="masterDetailTemplate" />
  <template #masterDetailTemplate="{data}">
      <div class="row">
          <div class="col-lg-6 offset-3">
              <DxDataGrid :data-source="data.data.adi.regras" :show-borders="true"
                  :column-auto-width="true">
                  <DxColumn data-field="descricao" caption="Regra Cobrança" />

                  <DxMasterDetail :enabled="true" template="masterDetailTemplate2" />
                  <template #masterDetailTemplate2="{ data }">
                      <div class="row">
                          <div class="col-lg-10 offset-1">
                              <DxDataGrid :data-source="data.data.eventos" :show-borders="true"
                                  :column-auto-width="true">
                                  <DxColumn data-field="nome" caption="Evento"
                                      cell-template="eventoTemplate" />
                                  <DxColumn data-field="origemCobranca.valor" caption="Origem" />
                                  <DxColumn data-field="valor" caption="Valor"
                                      :format="{ type: 'fixedPoint', precision: 2}" />

                                  <template #eventoTemplate="{ data }">
                                      {{data.data.codigo}}-{{data.data.nome}}
                                  </template>
                              </DxDataGrid>
                          </div>
                      </div>
                  </template>

              </DxDataGrid>
          </div>
      </div>
  </template> -->

    <!-- CONFIGURACAO PADRAO -->
    <DxColumnChooser :enabled="true" />
    <DxFilterRow :visible="true" />
    <DxHeaderFilter :visible="true" />
    <DxGroupPanel :visible="true" />
    <DxPager :visible="true" :display-mode="'full'" :show-page-size-selector="true" :show-info="true"
      :show-navigation-buttons="true" :allowed-page-sizes="'true'" />
    <DxExport :enabled="true" :allow-export-selected-data="false" />

  </DxDataGrid>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxFilterRow,
  DxHeaderFilter,
  DxGroupPanel,
  DxGrouping,
  DxScrolling,
  DxPager,
  DxPaging,
  DxExport,
  DxColumnChooser,
  DxMasterDetail,
} from "devextreme-vue/data-grid";



export default {
  components: {

    //import tabela devextreme-vue
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxHeaderFilter,
    DxGroupPanel,
    DxGrouping,
    DxScrolling,
    DxPager,
    DxPaging,
    DxExport,
    DxColumnChooser,
    DxMasterDetail,
  },
  data(){
    return{
      isLoad: true,

    }
  }
  
};
</script>
<style >
/* .menu-3-dots-icon {
  background-image: url("../../../../../assets/icons/menu.svg");
  background-position: center;
  background-size: contain;
  width: 18px;
  height: 18px;
} */

.row {
  margin: 0px !important;
}

div .btn-md {
  margin: 1px !important;
  padding: 1px !important;
}


.card-label {
  font-size: 8px;
  line-height: 8px;
  padding: 0px;
}

.card-valor {
  font-size: 16px;
  line-height: 18px;
  padding: 2px;
}

.card-valor-total {
  font-size: 20px;
  line-height: 22px;
  padding: 2px;
}

.table {
  color: #3a3a3a;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table td,
.table th {
  border-color: #f3f3f3 !important;
  text-align: justify;
}

.table-bordered,
.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
  text-align: inherit;

}

.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 05px solid #dee2e6;
}
</style>
  