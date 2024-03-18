<template>
    
   
   <div class="layout-px-spacing">      
       <div class="row">
           <div class="col-lg-12 layout-spacing layout-top-spacing">
               <div class="statbox panel box box-shadow">
             
                   <div class="panel-body">
                       <div class="container pricing-table">
                           <!-- Billing Cycle  -->
                           <div class="billing-cycle-radios mt-5">
                               <div class="radio billed-yearly-radio" :class="{ 'billed-yearly-switch': chk_demo }">
                                   <div class="d-flex justify-content-center">
                                       <span class="txt-monthly">Mês</span>
                                       <label class="switch s-icons s-outline s-outline-primary">
                                           <input type="checkbox" v-model="chk_demo" />
                                           <span class="slider round"></span>
                                       </label>

                                       <span class="txt-yearly">Anual <span class="badge rounded-pill badge-success">20% Off</span></span>
                                   </div>
                               </div>
                           </div>

                           <!-- Pricing Plans Container -->
                           <div class="pricing-plans-container mt-5 d-md-flex d-block">
                               <div class="pricing-plan mb-5">
                                   <h3>Start</h3>
                                   <p class="margin-top-10">.</p>
                                   <div class="pricing-plan-label billed-monthly-label"><strong>R$ 0</strong>/ mês</div>
                                   <div class="pricing-plan-label billed-yearly-label"><strong>$ 0</strong>/ ano</div>
                                   <div class="pricing-plan-features mb-4">
                                       <strong>Cloud Hosting Features</strong>
                                       <ul>
                                           <li>Single Domain</li>
                                           <li>50 GB SSD</li>
                                           <li>1 TB Premium Bandwidth</li>
                                       </ul>
                                   </div>
                                   <button type="button" class="btn btn-secondary w-100 button margin-top-20">Buy Now</button>
                               </div>
                               <div class="pricing-plan mb-5 mt-md-0 recommended">
                                   <div class="recommended-badge price">Mais Popular</div>
                                   <h3>VPS Hosting</h3>
                                   <p class="margin-top-10">cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.</p>
                                   <div class="pricing-plan-label billed-monthly-label"><strong>$70</strong>/ monthly</div>
                                   <div class="pricing-plan-label billed-yearly-label"><strong>$670</strong>/ yearly</div>
                                   <div class="pricing-plan-features mb-4">
                                       <strong>VPS Hosting Features</strong>
                                       <ul>
                                           <li>5 Domains</li>
                                           <li>100 GB SSD</li>
                                           <li>2 TB Premium Bandwidth</li>
                                       </ul>
                                   </div>
                                   <button type="button" class="btn btn-secondary w-100 button margin-top-20">Buy Now</button>
                               </div>
                               <div class="pricing-plan mb-5">
                                   <h3>Business Hosting</h3>
                                   <p class="margin-top-10">cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.</p>
                                   <div class="pricing-plan-label billed-monthly-label"><strong>$115</strong>/ monthly</div>
                                   <div class="pricing-plan-label billed-yearly-label"><strong>$1100</strong>/ yearly</div>
                                   <div class="pricing-plan-features mb-4">
                                       <strong>Business Hosting Features</strong>
                                       <ul>
                                           <li>Unlimited Domains</li>
                                           <li>1 TB SSD</li>
                                           <li>5 TB Premium Bandwidth</li>
                                       </ul>
                                   </div>
                                   <button type="button" class="btn btn-secondary w-100 button margin-top-20">Buy Now</button>
                               </div>
                           </div>                           
                       </div>
                   </div>
               </div>
           </div>

       </div>
   </div>
</template>
<style>
.price{
    background-color: #805dca;
}
</style>

<script setup>
   import { ref } from 'vue';
   import '@/assets/sass/pricing-table.scss';

   import { useMeta } from '@/composables/use-meta';
   useMeta({ title: 'Pricing Tables' });

   const code_arr = ref([]);
   const chk_demo = ref(false);

   const toggleCode = (name) => {
       if (code_arr.value.includes(name)) {
           code_arr.value = code_arr.value.filter((d) => d != name);
       } else {
           code_arr.value.push(name);
       }
   };
</script>
