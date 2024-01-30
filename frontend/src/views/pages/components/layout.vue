<template>
    <div class="layout-px-spacing">      
       <div class="row">
           <div class="col-lg-12 layout-spacing layout-top-spacing">
               <div class="statbox panel box box-shadow">
             
                  <div class="panel-body">
                   <slot></slot>
                   </div>
               </div>
           </div>

       </div>
   </div>   

</template>

<script setup>
   import '@/assets/sass/pricing-table.scss';
</script>
