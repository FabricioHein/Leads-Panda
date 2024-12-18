<template src="./agendamento.html">

</template>

<script>
import AgendaService from '@/service/agenda-service';

export default {
  data() {
    return {
      links: [
       
      ],
      agenda: true,
      showAgenda: false,
      selectedDate: '',
      hasCpf: true,
      step: 1,
      nome: '',
      telefone: '',
      cpf: '',
      usuario: null,
      attendants: [],
      times: [],
      selectedAttendant: null,
      selectedTime: null,
      selectedDate: null,
    };
  },
  methods: {
    toggleAgenda() {
      this.showAgenda = !this.showAgenda;
    },
    async enviarAgendamento() {
      console.log(this.usuario)
      const enviarAgendamento = new AgendaService({
        title: this.nome,
        date_start: new Date(this.selectedDate),
        date_end: new Date(this.selectedDate),
        clients: [this.selectedAttendant],
        users: []
      }, '');
      const agendamento = await enviarAgendamento.criarAgendamentoExterno();

    },
    async getDateAtentend() {
      const getHorarios = new AgendaService({
        atendimentoId: this.selectedAttendant,
        date: this.selectedDate
      }, '');
      const dataHorarios = await getHorarios.getHorarios();

      if (dataHorarios) {
        this.times = dataHorarios;
        this.step++;
      };


    },
    async nextStepGetCpf() {

      if (this.step === 1 && (!this.cpf)) {
        this.showMessage('Por favor, preencha todos os campos.', 'error');
        return
      };
      this.params = this.$route.query;
      console.log(this.$route.query)
      this.params['cpf_usuario'] = (this.cpf);

      const getAllClienteAngendaUser = new AgendaService(this.params, '');
      const dataUsuario = await getAllClienteAngendaUser.getAllClienteAngendaUser();
      if (dataUsuario) {
        this.attendants = dataUsuario.works;

        if (dataUsuario.usuario) {
          this.usuario = dataUsuario.usuario;
          this.nome = dataUsuario.usuario.nome;
          this.cpf = dataUsuario.usuario.cpf;
          this.step++;
        }
        if (dataUsuario.usuario == null || !this.nome) {
          this.hasCpf = false;
        }
        if (this.nome && this.cpf) {
          this.step++;
        }

      }


    },
    async nextCreateCliente() {
      if (this.step === 1 && (!this.cpf)) {
        this.showMessage('Por favor, preencha todos os campos.', 'error');
        return
      };
      this.params = this.$route.query;
      console.log(this.$route.query)
      this.params['cpf_usuario'] = (this.cpf);
      this.params['nome'] = (this.nome);
      this.params['telefone'] = (this.telefone);


      const getAllClienteAngendaUser = new AgendaService(this.params, '');
      const dataUsuario = await getAllClienteAngendaUser.getAllClienteAngendaUser();
      if (dataUsuario) {
        this.attendants = dataUsuario.works;

        if (dataUsuario.usuario) {
          this.usuario = dataUsuario.usuario;
          this.nome = dataUsuario.usuario.nome;
          this.cpf = dataUsuario.usuario.cpf;
          this.step++;
        }
        if (dataUsuario.usuario == null || !this.nome) {
          this.hasCpf = false;
        }
        if (this.nome && this.cpf) {
          this.step++;
        }

      }


    },
    formatDateToBrazilian(dateString) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    nextStep() {
      if (this.step === 1 && (!this.nome)) {
        this.showMessage('Por favor, preencha todos os campos.', 'error');
      } else if (this.step === 2 && !this.selectedAttendant) {
        this.showMessage('Por favor, selecione um atendente.', 'error');
      } else if (this.step === 3 && !this.selectedTime) {
        this.showMessage('Por favor, selecione um horário.', 'error');
      } else if (this.step === 4 && !this.selectedDate) {
        this.showMessage('Por favor, selecione uma data.', 'error');
      } else {
        this.step++;
      }
    },
    prevStep() {
      if (this.step > 1) {
        this.step--;
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
    finish() {
      this.showMessage('Agendamento concluído com sucesso!');
      // Resetar o formulário
      this.step = 1;
      this.name = '';
      this.phone = '';
      this.selectedAttendant = null;
      this.selectedTime = null;
      this.selectedDate = null;
    },
  },
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
}

.logo {
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}

.links {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.links li {
  margin-bottom: 10px;
}

.links a {
  display: block;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.links a:hover {
  background-color: #0056b3;
}

.agenda-container {
  display: none;
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 8px;
}

.agenda-container.active {
  display: block;
}

.footer {
  text-align: center;
  margin-top: 20px;
}
</style>
