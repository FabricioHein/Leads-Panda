<template>
    <div class="container mt-5">
      <h2>Escolha uma Data</h2>
      <input type="date" v-model="selectedDate" class="form-control">
      <button class="btn btn-primary mt-3" @click="nextStep">Próximo</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate: null,
      };
    },
    methods: {
      nextStep() {
        if (this.selectedDate) {
          this.$router.push({ name: 'Summary' });
        } else {
          alert('Por favor, selecione uma data.');
        }
      },
    },
  };
  </script>
  