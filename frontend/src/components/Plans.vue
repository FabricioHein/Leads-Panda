<template>
    <div class="container">
      <h2 class="my-4">Tipos de Planos</h2>
      <div v-if="currentPlan" class="alert alert-success">
        <h4 class="alert-heading">Plano Atual: {{ currentPlan.name }}</h4>
        <p>Preço: {{ currentPlan.price }}</p>
        <button class="btn btn-warning" @click="$emit('change-plan')">Mudar Plano</button>
      </div>
      <div v-else class="row">
        <div class="col-md-6" v-for="plan in plans" :key="plan.id">
          <div class="card mb-3" @click="$emit('select-plan', plan)">
            <div class="card-body">
              <h5 class="card-title">{{ plan.name }}</h5>
              <p class="card-text">{{ plan.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['plans', 'currentPlan']
  };
  </script>
  