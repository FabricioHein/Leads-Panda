<template>
    <div class="form">
        <div class="row">
            <hr>
            <h6>Endereço</h6>

            <div class="col-6">
                <label>CEP</label>
                <input type="text" v-maska="'#####-###'" placeholder="Digite um CEP" v-model="params.cep" @input="setCep()"
                    class="form-control" />
                <label>Cidade</label>
                <input type="text" v-model="params.cidade" class="form-control" />
                <label>Bairro</label>
                <input type="text" v-model="params.bairro" class="form-control" />
                <label>Complemento</label>
                <input type="text" v-model="params.complemento" class="form-control" />

            </div>
            <div class="col-6">
                <label>Rua</label>
                <input type="text" v-model="params.logradouro" class="form-control" />
                <label>Pais</label>
                <input type="text" v-model="params.pais" class="form-control" />
                <label>Número</label>
                <input type="text" v-model="params.numero" class="form-control" />

            </div>
            <hr>

        </div>
    </div>
</template>
<script>
import InputVue from '@/components/Input-validate.vue';
import { mapGetters } from 'vuex';
import ApiCep from '@/api/apiCep'

export default {
    name: 'endereco',
    components: {
        InputVue
    },
    props: {
        params: {
            cep: String
        }
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token']),
    },
    methods: {
        async setCep() {
            if (this.params.cep.length === 9) {
                const cep = new ApiCep(this.params.cep);
                const endereco = await cep.get();

                if (endereco.status === 200 || endereco.statusText === 'ok') {
                    this.params.logradouro = endereco.address;
                    this.params.cidade = endereco.city;
                    this.params.estado = endereco.state;
                    this.params.bairro = endereco.district;
                    this.params.cep = endereco.code;
                    this.params.pais = 'Brasil';
                    this.showMessage('Endereço encontrado')
                } else {
                    this.showMessage('Endereço não encontrado', 'error')
                }

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
    }

}
</script>