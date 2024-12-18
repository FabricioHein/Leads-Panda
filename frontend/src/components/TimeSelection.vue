<template>
    <div class="container mt-5">
      <h2>Escolha um Horário</h2>
      <div v-for="time in times" :key="time" class="form-check">
        <input class="form-check-input" type="radio" :value="time" v-model="selectedTime">
        <label class="form-check-label">{{ time }}</label>
      </div>
      <button class="btn btn-primary mt-3" @click="nextStep">Próximo</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        times: this.generateTimes(),
        selectedTime: null,
      };
    },
    methods: {
      generateTimes() {
        const times = [];
        const start = 8 * 60; // 08:00
        const end = 18 * 60; // 18:00
        for (let time = start; time <= end; time += 30) {
          const hours = Math.floor(time / 60);
          const minutes = time % 60;
          const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
          times.push(formattedTime);
        }
        return times;
      },
      nextStep() {
        if (this.selectedTime) {
          this.$router.push({ name: 'DateSelection' });
        } else {
          alert('Por favor, selecione um horário.');
        }
      },
    },
  };
  </script>
  