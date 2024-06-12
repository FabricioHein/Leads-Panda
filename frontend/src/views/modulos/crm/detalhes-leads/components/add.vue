<template>
  <div class="form" style="padding: 20px;">
    <div class="row">
      <div class="col-6">
        <label>Título</label>
        <input type="text" class="form-control" v-model="params.title" />
        <label>Temperatura da Venda</label>
        <select v-model="params.status" class="form-select">
          <option v-for="m in statusTemperatura" :value="m.value">{{ m.nome }}</option>
        </select>

        <label>Nome Contato</label>
        <input type="text" class="form-control" placeholder="Pesquise o Contato" v-model="params.contato_nome"
          @input="findContato()" />      
       
        <div v-if="contatoNome">
          <ul>
            <li v-for="contato in contatosLista" @click="setContato(contato)">
             {{ contato.nome }}   {{ contato.sobrenome }} {{' - ' }}   {{ contato.cpf }}
            </li>
          </ul>
        </div>
        <label for="cpf">CPF</label>
        <input v-model="params.cpf" v-maska="'###.###.###-##'" placeholder="CPF" type="text" class="form-control" />
        <label>Valor Inicial</label>
        <inputMoney v-model="params.valor_Inicial" :options="options" />
        <label>Valor Final</label>
        <inputMoney v-model="params.valor_Final" :options="options" />
        <label>Vendedor</label>
        <select v-model="params.usersId" class="form-select">
          <option v-for="m in vendedor" :value="m.id">{{ m.nome }}</option>
        </select>


      </div>
      <div class="col-6">
        <label>Previsão de Fechamento</label>
        <input v-model="params.previsao_fechamento" class="form-control" type="date" />
        <label>Número</label>
        <input type="text" class="form-control" v-maska="'+55(##)#####-####'" placeholder="__-_______"
          v-model="params.contato_numero" />
        <label>Empresa</label>
        <input type="text" class="form-control" v-model="params.empresa" />
        <label>Motivos</label>
        <select v-model="params.motivosId" class="form-select">
          <option v-for="m in motivos" :value="m.id">{{ m.nome }}</option>
        </select>
        <label>Produtos / Serviços</label>
        <select v-model="params.produtoId" class="form-select">
          <option v-for="m in produtos" :value="m.id">{{ m.nome }}</option>
        </select>


      </div>

    </div>
    <div class="col">
      <quill-editor theme="snow" v-model:value="params.description" :options="descricao"
        style="min-height: 20px"></quill-editor>
    </div>

  </div>
  <div class="account-settings-footer">
    <div class="as-footer-container">
      <button type="button" class="btn btn-success" @click="saveTask">Salvar</button>
      <button type="button" class="btn btn-danger" @click="back">Cancelar</button>
    </div>
  </div>
</template>
<style>
.ql-container,
.ql-editor {
  min-height: inherit;
}

.ql-editor {
  max-height: 200px;
}

.ql-toolbar.ql-snow .ql-picker-label {
  border: 1px solid transparent;
  color: #000000;
}

.ql-snow .ql-stroke {
  fill: none;
  stroke: #000000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
  fill: #000000;
}

#addTaskModal .ql-toolbar.ql-snow {
  border: 1px solid #bfc9d4;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: 8px;
  border-radius: 6px;
  margin-top: 0;
}

.ql-container.ql-snow {
  border-top: 0px;
  margin-top: 10px;
  padding: 13px 0;
  border: 1px solid #bfc9d4 !important;
  border-radius: 6px;
}
</style>

<script>
import InputVue from '@/components/Input-validate.vue';
import ContatosService from '@/service/contatos-service';
import motivosService from '@/service/motivos-service';
import produtoService from '@/service/produto-service';
import usuarioService from '@/service/usuario-service';


import { mapGetters } from 'vuex';
import TaskCrmService from '@/service/task-service';
import inputMoney from '@/views/components/input-money.vue';

import { quillEditor } from 'vue3-quill';
import 'vue3-quill/lib/vue3-quill.css';
import TaskModel from './model/taskModel'


export default {
  name: 'add',
  components: {
    InputVue,
    inputMoney,
    quillEditor

  },
  computed: {
    ...mapGetters(['usuario', 'cliente', 'token']),
  },
  data() {
    return {
      descricao: {
        placeholder: 'Escreva',
        modules: {
          toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']],
        },
      },
      valorInit: 0,
      valorFinal: 0,
      motivos: null,
      produtos: null,
      vendedor: null,
      etapa: null,
      statusTemperatura: [{
        value: 'frio',
        nome: 'Frio - ✩'
      },
      {
        value: 'morno',
        nome: 'Morno - ✩✩'
      },
      {
        value: 'quente',
        nome: 'Quente - ✩✩✩'
      }],
      add: null,
      options: {
        currency: 'BRL',
        hideCurrencySymbolOnFocus: false,
        hideGroupingSeparatorOnFocus: false,
        hideNegligibleDecimalDigitsOnFocus: false,
      },
      conteudo: '',
      contatoNome: false,
      contatosLista: []
    }
  },
  props: {
    params: Object
  },
  async created() {
    if (!this.motivos) {
      const motivos = new motivosService(
        {}, this.token,
        `/api/task/getAllMotivos/${this.cliente.id}`);
      this.motivos = await motivos.getAllMotivos();

    }
    if (!this.produtos) {
      const produto = new produtoService(
        {}, this.token,
        `/api/produto/todos/${this.cliente.id}`);
      this.produtos = await produto.getAllProdutos();
    }
    if (!this.vendedor) {
      const usuarioServ = new usuarioService({}, this.token, `/api/usuario/todos/${this.cliente.id}`);
      const data = await usuarioServ.getAllUsuarios();
      this.vendedor = data.map((v) => {

        if (v.sobrenome) {
          return {
            id: v.id,
            nome: v.nome + ' ' + v.sobrenome
          }
        }
        return {
          id: v.id,
          nome: v.nome
        }
      })
      console.log(this.vendedor)
    }


  },
  methods: {
    selectedMotivos(e) {
      // this.params.motivosId = e.target.value;
      console.log(e, 'teste')
    },
    setContato(evento) {
      this.params.Contacts = evento;
      this.contatoNome = false;
      this.params.contato_nome = evento.nome + ' ' + evento.sobrenome;
      this.params.contato_numero = evento.telefone;
      this.params.cpf = evento.cpf;
      this.params.empresa = evento.empresa;
    },
    async findContato() {

      this.contatoNome = !this.contatoNome;

      if((this.params.contato_nome).length > 3){
        const contatos = new ContatosService({}, this.token, `/api/clientes/filter/name/${this.params.contato_nome}`);
      this.contatosLista = await contatos.getByIdNomeOrNumber();
      }
    

     
    },
    back() {
      this.$router.push('/crm/oportunidades')
    },
    async saveTask() {
      if (!this.params.title) {
        this.showMessage('Título é Obrigatório.', 'error');
        return true;
      }
      if (this.params.id) {
        //update task
        let taskUpdate = new TaskModel(this.params);
        taskUpdate['id'] = Number(this.params.id);
        taskUpdate['processoId'] = this.params.processoId;
        const taskCrm = new TaskCrmService(taskUpdate, this.token);
        await taskCrm.atualizarTask();
        this.showMessage('Atualizado com Sucesso');
        this.$router.push(`/crm/fluxo/${this.params.processo.projeto.id}`);


      } else {
        let projetoId = (window.location.pathname).replace('/crm/leads/novo-', '');
        this.params['projetoId'] = Number(projetoId)
        let task = new TaskModel(this.params);
        const taskCrm = new TaskCrmService(task, this.token);
        await taskCrm.criarTask();
        this.showMessage('Criado com Sucesso');
        this.$router.push(`/crm/fluxo/${projetoId}`);
      }
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