<!-- CodeHighlighter.vue -->
<template>
    <pre class="code-container">
    <code class="highlighted-code" v-html="codigoHtmlDestacado"></code>
  </pre>
</template>
  
<script>
import 'prismjs';
import 'prismjs/components/prism-javascript'; // Importe os componentes Prism para a linguagem desejada

export default {
    props: {
        codigoJs: String,
    },
    computed: {
        codigoHtmlDestacado() {
            return this.destacarCodigo(this.codigoJs);
        },
    },
    methods: {
        destacarCodigo(codigo) {
            return Prism.highlight(codigo, Prism.languages.javascript, 'javascript');
        },
    },
};
</script>
  
<style>
.code-container {
    background-color: #272822;
    /* Cor de fundo */
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
}

.highlighted-code {
    color: #f8f8f2;
    /* Cor do texto */
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
}
</style>
  