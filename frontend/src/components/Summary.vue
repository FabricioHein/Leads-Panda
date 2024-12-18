<template>
    <div class="container mt-5">
      <h2>Resumo</h2>
      <p><strong>Atendente:</strong> {{ attendant }}</p>
      <p><strong>Horário:</strong> {{ time }}</p>
      <p><strong>Data:</strong> {{ date }}</p>
      <button class="btn btn-success" @click="finish">Concluir</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      attendant() {
        return this.$route.query.attendant;
      },
      time() {
        return this.$route.query.time;
      },
      date() {
        return this.$route.query.date;
      },
    },
    methods: {
      finish() {
        alert('Agendamento concluído com sucesso!');
        this.$router.push({ name: 'AttendantSelection' });
      },
    },
  };
  </script>
  