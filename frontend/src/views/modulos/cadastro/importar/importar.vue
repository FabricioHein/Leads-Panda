<template src="./importar.html"></template>
<style scoped src="./importar.css">

</style>
<script>
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/users/account-setting.scss';
import { mapGetters, mapActions } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import * as XLSX from 'xlsx'

const xlsTabela = XLSX


const fileToBlob = async (file) => new Blob([new Uint8Array(await file.arrayBuffer())], { type: file.type });


export default {
    setup() {
        useMeta({ title: 'Importar de Dados' });
    },
    data() {
        return {
            add: false,
            page: 'Importar Dados',
            table: undefined,
            params: {},
            show: false,
            fileJson: null,
            selected: null,
            options: [
                {
                    id: 1,
                    label: 'Produtos'
                },
                {
                    id: 2,
                    label: 'Clientes'
                },
                {
                    id: 3,
                    label: 'Fornecedores'
                }
            ]


        }
    },
    computed: {
        ...mapGetters(['usuario', 'cliente', 'token']),
    },
    methods: {

        onChange(event) {
            this.file = event.target.files ? event.target.files[0] : null;

            if (this.file) {

                console.log(this.excelFileToJSON(this.file))
                return this.excelFileToJSON(this.file)
            }
        },
        excelFileToJSON(file) {
            try {
                var reader = new FileReader();
                reader.readAsBinaryString(file);
                reader.onload = function (e) {

                    var data = e.target.result;

                    var workbook = xlsTabela.read(data, {
                        type: 'binary'
                    });

                    console.log(workbook)

                    workbook.SheetNames.forEach(sheetName => {
                        let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                        console.log(rowObject)
                    });




                }
            } catch (e) {
                console.error(e);
            }
        }

    },
    created() {

    },

};


</script>
