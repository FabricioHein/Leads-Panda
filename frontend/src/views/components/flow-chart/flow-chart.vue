<template>
  <div class="conteiner">
    <div class="row">

      <div class="col">Escala: {{ (transform * 10).toFixed() }}
        <div class="painel-modelo painel-color">

          <div class="btn-group p-4" role="group" aria-label="Basic example">
            <svg @click="zooOut" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-zoom-in" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
              <path
                d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
              <path fill-rule="evenodd"
                d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5" />
            </svg>
            <svg @click="zooIn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-zoom-out" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
              <path
                d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
              <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>

          <div id="flow" @mousedown="handlePanelMouseDown" style="position: relative; width: 100%; height: 500px;">
            <Node v-for="node in nodes" :key="node.id" :node="node" @startDrag="handleStartDrag"
              @dragging="handleDragging">
              <button @click="deletNode(node)" type="button" class="btn rounded-circle btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-trash3"
                  viewBox="0 0 16 16">
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
              <button @click="editNode(node)" type="button" class="btn rounded-circle btn-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-pencil"
                  viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </button>

              <button id="conect-node" @mousedown="startConectarNode(node)" type="button" class="btn rounded-circle "
                v-if="!editConnection">
                <svg viewBox="0 0 120 120" version="1.1" xmlns="https://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="50" />
                </svg>
              </button>
              <button type="button" class="btn rounded-circle btn-pisca" v-if="editConnection && nodes.length >= 2"
                @mouseup="endConectarNode(node)">
                <svg viewBox="0 0 120 120" version="1.1" xmlns="https://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="50" />
                </svg>
              </button>
            </Node>

            <svg class="connection-container">
              <path v-for="(connection, index) in connections" :key="index" :d="getLinePath(connection)"
                class="connection">
              </path>
            </svg>

          </div>
        </div>

      </div>
      <div class="col-md-auto">
        <div class="painel-modelo">
          <div class="mt-container">
            <div class="btn-group p-4">
              <button class="btn btn-success" v-if="!editar" @click="criarNode(node)">Criar Opção</button>
              <button class="btn btn-success" v-if="editar" @click="alterar">Alterar</button>

            </div>

          </div>
          <div class="mt-container">

            <div class="p-4">
              <label>Interação:</label>
              <select v-model="novoCampo.type" class="form-control">
                <option v-for="s in selectedType" :value="s.value">
                  {{ s.value }}</option>

              </select>
              <label>Pergunta:</label>
              <textarea class="form-control" v-model="novoCampo.ask" />
              <label>Resposta:</label>
              <textarea class="form-control" v-model="novoCampo.text" />

            </div>



          </div>


        </div>
      </div>


    </div>

  </div>
</template>

<script>
import { end } from '@popperjs/core';
import Node from './Node.vue';

export default {
  components: {
    Node,
  },
  data() {
    return {
      transform: 0.9,
      selectedType: [
        {
          value: 'btn',
          label: 'Botão',
          link: '',
          name: ''
        }
      ],
      editConnection: false,
      connection: null,
      editar: false,
      novoCampo: { text: 'Algum texto', ask: 'Alguma Pergunta', type: '', position: { x: 150, y: 300 } },
      condicao: [
        {
          label: 'Igual',
          value: '=='
        }
      ],
      nodes: [
        { id: '1', text: '', ask: 'Pergunta', type: '', position: { x: 150, y: 300 } },
        { id: '2', text: '', ask: 'Pergunta', type: '', position: { x: 150, y: 300 } },

      ],
      connections: [

        // Adicione mais conexões conforme necessário
      ],
      panelDragging: false,
    };
  },
  methods: {
    zooOut() {
      this.$nextTick(() => {
        var scale = this.transform + 0.1;
        this.transform = scale;
        var w = document.getElementById('flow');

        if (scale < 0.9) {
          w.style.transform = `scale(${scale})`
        } else {
          w.style.transform = `scale(0.9)`;
          this.transform = 0.9;
        }




      })
    },
    zooIn() {
      this.$nextTick(() => {
        var scale = this.transform - 0.1;
        this.transform = scale;
        var w = document.getElementById('flow');

        if (scale >= 0.1 && scale <= 0.9) {
          w.style.transform = `scale(${scale})`

        } else {
          w.style.transform = `scale(0.9)`;
          this.transform = 0.9;
        }





      })
      this.$forceUpdate();
    },
    startConectarNode(node) {

      this.connection = node;
      this.editConnection = !this.editConnection

    },
    endConectarNode(node) {

      console.log(node.id)

      const id = node.id

      // Adicionar uma nova conexão ao clicar no botão com id="conect-node"
      if (this.nodes.length > 0) {
        const novaConexao = {
          id: `connection-${this.connections.length + 1}`,
          source: this.connection.id, // Source é o primeiro node (ajuste conforme necessário)
          target: id // Target é o segundo node (ajuste conforme necessário)
        };
        this.connections.push(novaConexao);

        this.connection = null;
        this.editConnection = !this.editConnection
      }
      this.editConnection = !this.editConnection

    },
    criarNode(node) {


      if (this.nodes.length == 0) {
        this.novoCampo['id'] = 1;
      } else {
        this.novoCampo['id'] = this.nodes.length + 1
      }

      this.nodes.push(this.novoCampo)
      console.log(this.novoCampo)

      this.editar = false;

    },
    editNode(node) {
      this.novoCampo = node;
      this.editar = !this.editar;
    },
    alterar() {
      const index = this.nodes.findIndex((node) => node.id === this.novoCampo.id);
      if (index !== -1) {


        if (this.nodes[index]) {
          this.nodes[index] = this.novoCampo;
          this.novoCampo = {};
        } else {
          this.nodes.push(this.novoCampo)

        }

      }
      this.editar = false;

    },
    deletNode(node) {
      this.nodes = this.nodes.filter(i => i.id != node.id);
      this.connections = this.connections.filter(i => i.source != node.id || i.target != node.id)
    },
    handleNodeDrag(event) {
      // Lide com a mudança de ordem das nodes, se necessário
    },
    handleStartDrag(payload) {
      const newPosition = {
        x: payload.x - 200,
        y: payload.y - 200,
      };

      // Verifica se a nova posição está dentro do painel
      if (this.isPositionInsidePanel(newPosition)) {
        const index = this.nodes.findIndex((node) => node.id === payload.nodeId);
        if (index !== -1) {
          this.nodes[index] = { ...this.nodes[index], position: newPosition };
        }
      }
    },
    handleDragging(payload) {
      const newPosition = {
        x: payload.x - 200,
        y: payload.y - 200,
      };

      // Verifica se a nova posição está dentro do painel
      if (this.isPositionInsidePanel(newPosition)) {
        const index = this.nodes.findIndex((node) => node.id === payload.nodeId);
        if (index !== -1) {
          this.nodes[index] = { ...this.nodes[index], position: newPosition };
        }
      }
    },
    handlePanelMouseDown() {
      // Ativa o flag de arrasto do painel
      this.panelDragging = true;
    },
    isPositionInsidePanel(position) {
      const panelWidth = 600; // Ajuste conforme o tamanho do seu painel
      const panelHeight = 400; // Ajuste conforme o tamanho do seu painel

      // Verifica se a posição está dentro do painel
      return position.x >= 0 && position.y >= 0 && position.x <= panelWidth && position.y <= panelHeight;
    },
    getLinePath(connection) {
      const sourceNode = this.nodes.find((node) => node.id === connection.source);
      const targetNode = this.nodes.find((node) => node.id === connection.target);

      if (sourceNode && targetNode && sourceNode.position && targetNode.position) {
        const sourcePosition = sourceNode.position;
        const targetPosition = targetNode.position;

        // Verifica se as coordenadas são válidas
        if (
          !isNaN(sourcePosition.x) &&
          !isNaN(sourcePosition.y) &&
          !isNaN(targetPosition.x) &&
          !isNaN(targetPosition.y)
        ) {
          // Ajusta os pontos de controle Bezier para fazer a curva mais pronunciada
          const controlX = (sourcePosition.x + targetPosition.x) / 2;
          const controlY = (sourcePosition.y + targetPosition.y) / 2 - 50; // Ajuste conforme necessário

          // Verifica se as coordenadas dos pontos de controle são válidas
          if (!isNaN(controlX) && !isNaN(controlY)) {
            const curve = `Q ${controlX} ${controlY}, ${targetPosition.x} ${targetPosition.y}`;
            return `M ${sourcePosition.x} ${sourcePosition.y} ${curve}`;
          }
        }
      }

      return '';
    },
  },
};
</script>

<style scoped>
@keyframes btn-pisca {

  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

.painel-color {
  background-color: rgb(234, 234, 234, 1);
}

.btn-pisca {

  background-color: #fcf825;

  -webkit-animation: btn-pisca .9s linear infinite;
  -moz-animation: btn-pisca .9s linear infinite;
  -ms-animation: btn-pisca .9s linear infinite;
  -o-animation: btn-pisca .9s linear infinite;
  animation: btn-pisca .9s linear infinite;
}

.connection-container {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Para permitir interação com nodes abaixo do SVG */
}

.connection {
  fill: none;
  stroke: #000;
  stroke-width: 1px;
  /* Reduz a largura do traço */
}
</style>
