<template>
    <input @input="$emit('update:value', $event.target.value)" :value="value" :type="type"
        class="form-control" :class="[value
        ?
        'is-valid'
        :
        'is-invalid']" />
    <div class="invalid-feedback">
        Campo
        obrigatório!
    </div>
</template>
<script>
export default {
    emits: ['update:value'],
    name: "InputVue",

    props: {
        type: String,
        label: String,
        value: String || Number
    }
}
</script>