<template>
    <div class="container my-4">
      <h2>Histórico de Pagamentos</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in payments" :key="payment.id">
            <td>{{ payment.date }}</td>
            <td>{{ payment.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ['payments']
  };
  </script>
  