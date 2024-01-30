<template>
    <input @input="$emit('update:value', $event.target.value)" :value="value" :type="type"
        class="form-control"  :disabled="disabled"/>
    
</template>
<script>
export default {
    emits: ['update:value'],
    name: "InputVue",

    props: {
        disabled: Boolean,
        type: String,
        label: String,
        value: String || Number
    }
}
</script>