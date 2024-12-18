<template src="./pagamento.html"></template>

<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import store from '@/store';
import CreditCardModal from '@/components/CreditCardModal.vue';
import Plans from '@/components/Plans.vue';
import PaymentHistory from '@/components/PaymentHistory.vue';

export default {
    components: {
        CreditCardModal,
        Plans,
        PaymentHistory
    },
    data() {
        return {
            showModal: false,
            plans: [    
                { id: 1, name: 'Plano Mensal', price: 129.90 },
                { id: 2, name: 'Plano Anual', price: 890.90 }
            ],
            currentPlan: null,
            payments: [
                { id: 2, date: '01/02/2024', amount: 'R$ 129.90' }
            ]
        }
    },
    setup() {
        useMeta({ title: 'Configuração' });
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token'])
    },
    created() {
        this.currentPlan = this.plans.filter(plano => plano.id == this.cliente.currentPlanId)[0];
        console.log('plano', this.plans);
        console.log('plano', this.currentPlan);
        this.$emit('change-plan');

    },
    onMounted() {


        console.log('plano', this.currentPlan)
        this.setTemplateStyle();
        this.setMenuStyle();
        this.setLayoutStyle();
    },
    methods: {
        selectPlan(plan) {
            this.currentPlan = plan;
        },
        changePlan() {
            this.currentPlan = null;
        },
        setTemplateStyle() {
            store.commit('toggleDarkMode', store.state.app.dark_mode);
        },
        setMenuStyle() {
            store.commit('toggleMenuStyle', store.state.app.menu_style);
        },
        setLayoutStyle() {
            store.commit('toggleLayoutStyle', store.state.app.layout_style);
        },
        change_file(event) {

            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    e.target.result
                };
                reader.readAsDataURL(file);
            };


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

    },
};


</script>
