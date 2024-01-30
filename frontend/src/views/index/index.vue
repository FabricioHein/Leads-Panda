<template>
<div>
    
<preco></preco>
</div>
</template>


<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import preco from '@/views/components/preco.vue'

export default {
    setup() {
    },
    data() {
        return {
            
        }
    },
    components: {
        preco
  
    },
    computed: {
     
    },
    created() {
     

    },
    methods: {
     
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
