<template>
  <div class="form">
    <div class="row">

      <div class="col-6">
        <h5>Status: {{ params.status ? params.status : status }}</h5>

        <label>Nome da Conexão </label>
        <InputVue type="text" v-model:value="params.session" />
      </div>
    </div>
  </div>
  <div style="padding: 25px;">
    <div v-if="!isLoad && conectado !=='Conectado'">
      <div class="loader dual-loader mx-auto">
      </div>
      
    </div>


    <img v-if="isLoad && linkQrcode" style="padding-left: 220px;width: 500px" :src="linkQrcode">

  </div>
  <button v-if="params.session" type="button" class="btn btn-success" @click="qrcodeGerar">{{ "Gerar QRCode" }}</button>

  <div>
  </div>
</template>
<script>
import InputVue from '@/components/Input-validate.vue';



export default {
  name: 'add',
  components: {
    InputVue

  },
  data() {
    return {
      isLoad: true,
      linkQrcode: '',
      status: 'Não Conectado',
      config: {
        masked: false,
        prefix: '',
        suffix: '',
        thousands: ',',
        decimal: '.',
        precision: 2,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
      }
    }
  },
  props: {
    params: {},

  },
  async created() {
    if (this.params.id) {

      await this.qrcodeGerar()
    }

  },
  methods: {
    async qrcodeGerar() {
      this.isLoad = !this.isLoad
      socket.emit('gerar-qrcode', this.params);

      socket.on("status", (status) => {

        if (status === "successChat") {
          this.status = "Conectado";
          this.params.status = "conectado";
          this.showMessage('Conectado com Sucesso');
        }else{
          this.status = "Não Conectado";
          this.params.status = "Não Conectado";

        }
      })
      socket.on("qrcode-status", (status) => {

        if (status === "ok") {
          socket.emit('emit-qrcode');
          socket.on("emit-qrcode", (data) => {
            this.linkQrcode = data;
            this.isLoad = !this.isLoad;


            // socket.close()

          })
        }

      })


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