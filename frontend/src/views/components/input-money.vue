<template>
  <input class="form-control" ref="inputRef" type="text" />
</template>
  
<script>
import { useCurrencyInput } from 'vue-currency-input'
import { watchDebounced } from '@vueuse/core'

export default {
  props: {
    modelValue: Number, // Vue 2: value
    options: Object
  },
  setup(props, { emit }) {
    const { inputRef, numberValue } = useCurrencyInput(props.options, false);
    watchDebounced(numberValue, (value) => {

      console.log(value)
      emit('update:modelValue', Number(value)), { debounce: 1000 }
    } )// Vue 2: emit('input', value)

    return { inputRef }
  }
}
</script>

