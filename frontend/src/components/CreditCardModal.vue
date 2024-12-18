<template>
    <div v-if="showModal" class="modal d-block" tabindex="-1">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Cadastro de Cartão de Crédito</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="cardNumber" class="form-label">Número do Cartão:</label>
                <input type="text" id="cardNumber" v-model="cardNumber" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="expiryDate" class="form-label">Data de Validade:</label>
                <input type="text" id="expiryDate" v-model="expiryDate" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="cvv" class="form-label">CVV:</label>
                <input type="text" id="cvv" v-model="cvv" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['showModal'],
    data() {
      return {
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      submitForm() {
        // Lógica para salvar os dados do cartão de crédito
        this.closeModal();
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    background: rgba(0, 0, 0, 0.5);
  }
  </style>
  