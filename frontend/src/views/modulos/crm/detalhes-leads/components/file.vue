<template>
    <div class="container">
        <div v-if="show">
            <div class="loader dual-loader mx-auto"></div>
        </div>
        <div class="row" v-if="!show">
            <div class="col-6" style="padding-left: 400px;">
                <p class="mt-2">Importar Documentos</p>
                <input ref="fl_profile" type="file" class="d-none" accept="*" @change="change_file" />
                <img :src="require('@/assets/images/file-preview.png')" alt="profile" class="profile-preview"
                    @click="$refs.fl_profile.click()" />
            </div>

        </div>
    </div>
    <div class="table-light table-responsive" v-if="params">
        <table role="table" aria-busy="false" aria-colcount="5" class="table b-table table-hover" id="__BVID__310">
            <thead role="rowgroup" class="">
                <tr role="row" class="">
                    <th role="columnheader" scope="col" aria-colindex="2" class="">
                        <div>Arquivos</div>
                    </th>
                    <th role="columnheader" scope="col" aria-colindex="5" aria-label="Action" class="text-center">
                        <div></div>
                    </th>
                </tr>
            </thead>
            <tbody role="rowgroup">
                <tr v-for="arquivo in params.arquivos" role="row" class="">
                    <td aria-colindex="2" role="cell" class=""> {{ arquivo.description }}</td>
                    <td @click="openArquivo(arquivo)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye"
                            viewBox="0 0 16 16">
                            <path
                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path
                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </td>
                    <td @click="deleteArquivo(arquivo)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash3" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                    </td>

                </tr>

            </tbody>
        </table>
    </div>
</template>
<script>
import ImportarService from '@/service/import-service';
import TaskService from '@/service/task-service';

import { mapGetters } from 'vuex';

export default {
    name: 'Upload',
    props: {
        params: {},
    },
    data() {
        return {
            show: false
         }
    },
    created() {

    },
    computed: {
        ...mapGetters(['usuario', 'token'])
    },
    methods: {
        openArquivo(arquivo) {
            window.open(arquivo.link)
        },
        async deleteArquivo(arquivo) {
            this.show = !this.show;

            const taskNovo = new TaskService({
                id: Number(arquivo.id)
            }, this.token);
            const anexos = await taskNovo.deleteTaskAnexo();

            if (anexos) {
                this.showMessage('Deletado com Sucesso');
                this.show = false;
                this.params.arquivos = this.params.arquivos.filter( i => i.id !== arquivo.id);

            }
        },
        async change_file(event) {
            this.show = !this.show;
            let formData = new FormData();
            const file = event.target.files[0];
            formData.append('file', file);
            const importar = new ImportarService(
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                },
                this.token,
                `/api/importar/file/${this.usuario.id}`,
                formData
            )
            const upload = await importar.importarFile();

            if (upload && this.params.id) {
                const taskNovo = new TaskService({
                    link: upload.downloadURL,
                    description: file.name,
                    taskId: Number(this.params.id)
                }, this.token);
                const anexos = await taskNovo.criarTaskAnexos();

                if (anexos) {
                    this.params.arquivos.push(anexos.data);
                    this.showMessage('Importado com Sucesso');
                    this.show = false;
                }
            } else {
                this.showMessage('Lead não existe', 'error');
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
        }

    }
}
</script>