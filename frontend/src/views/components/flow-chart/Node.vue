<template>
  <div class="card component-card_1 node" :style="{ left: node.position.x + 'px', top: node.position.y + 'px' }"
    @mousedown="startDrag" @touchstart="startDrag">
    <div class="card-body">
      <button class="btn btn-primary" v-if="node.type == 'btn'"> {{ 'Texto' }}</button>

     
      <p class="card-text p-2">
        {{ node.ask }}
      </p>
      <p class="card-text">
        {{ node.text }}
      </p>



      <slot></slot>

    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    nodeField: {
      label: '',
      ask:''
    },
    node: {
      type: Object,
      required: true,
    },
  },
  methods: {
    startDrag(event) {
      // Iniciar a captura das coordenadas ao clicar ou tocar na node
      const startX = event.clientX || event.touches[0].clientX;
      const startY = event.clientY || event.touches[0].clientY;

      // Adicionar manipuladores de evento para continuar o rastreamento
      document.addEventListener('mousemove', this.dragging);
      document.addEventListener('touchmove', this.dragging);

      // Adicionar manipuladores de evento para finalizar o rastreamento
      document.addEventListener('mouseup', this.endDrag);
      document.addEventListener('touchend', this.endDrag);

      // Emitir evento para informar ao componente pai sobre o início do arrasto
      this.$emit('startDrag', { startX, startY, nodeId: this.node.id });
    },
    dragging(event) {
      // Continuar a captura das coordenadas enquanto a node está sendo arrastada
      const x = event.clientX || event.touches[0].clientX;
      const y = event.clientY || event.touches[0].clientY;

      // Emitir evento para informar ao componente pai sobre a mudança de posição
      this.$emit('dragging', { x, y, nodeId: this.node.id });
    },
    endDrag() {
      // Finalizar a captura das coordenadas ao soltar o clique ou levantar o dedo
      document.removeEventListener('mousemove', this.dragging);
      document.removeEventListener('touchmove', this.dragging);
      document.removeEventListener('mouseup', this.endDrag);
      document.removeEventListener('touchend', this.endDrag);

      // Emitir evento para informar ao componente pai sobre o término do arrasto
      this.$emit('endDrag', { nodeId: this.node.id });
    },
  },
};
</script>

<style scoped>
.node {
  z-index: 9999;
  position: absolute;

  background-color: rgb(255, 255, 255);
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: move;
}
</style>
