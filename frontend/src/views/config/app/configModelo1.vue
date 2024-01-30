<template>
    <div class="layout-px-spacing">
     

        <div class="faq">
            <div class="faq-layouting layout-spacing">
                <div class="fq-tab-section layout-top-spacing">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Configurações</h2>

                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="accordion" id="simple_faq">
                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseOne" aria-expanded="false" aria-controls="fqcollapseOne">
                                                    <span class="faq-q-title">Aplicação</span>
                                                    <div class="icons">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseOne" class="collapse" aria-labelledby="fqcollapseOne" data-bs-parent="#simple_faq">
                                                <div class="card-body">
                                                    <form id="general-info" class="section general-info">
                                <div class="info">
                                    <h6 class="">Informação Pessoal</h6>
                                    <div class="row">
                                        <div class="col-lg-11 mx-auto">
                                            <div class="row">
                                             
                                                <div class="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                                                    <div class="form">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="fullName">Nome</label>
                                                                    <input class="form-control mb-4" placeholder="Nome"
                                                                       />
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="fullName">CPF</label>
                                                                    <input class="form-control mb-4" placeholder="cpf"
                                                                        />
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="fullName">Email</label>
                                                                    <input class="form-control mb-4" placeholder="cpf"
                                                                        disabled />
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="fullName">Tipo Usuário</label>
                                                                    <input class="form-control mb-4"
                                                                       disabled />
                                                                </div>

                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="form-group">
                                                                    <label for="fullName">Sobrenome</label>
                                                                    <input class="form-control mb-4"
                                                                        placeholder="Sobrenome"
                                                                         />
                                                                </div>

                                                                <div class="form-group">
                                                                    <label for="fullName">Telefone</label>

                                                                    <input type="text" 
                                                                        class="form-control" v-maska="'+55(##)#####-####'"
                                                                        placeholder="__-_______" />


                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                                                
                                                </div>
                                            </div>
                                        </div>                                     
                                      
                                    </div>
                                    
                                </div>
                                <div class="col-lg-6">
                                    <div class="accordion" id="simple_faq">
                                        <div class="card">
                                            <div class="card-header" role="tab">
                                                <div class="mb-0 collapsed" role="menu" data-bs-toggle="collapse" data-bs-target="#fqcollapseOne" aria-expanded="false" aria-controls="fqcollapseOne">
                                                    <span class="faq-q-title">Permissões</span>
                                                    <div class="icons">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-chevron-down"
                                                        >
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="fqcollapseOne" class="collapse" aria-labelledby="fqcollapseOne" data-bs-parent="#simple_faq">
                                                <div class="card-body">
                                                
                                                </div>
                                            </div>
                                        </div>                                     
                                      
                                    </div>
                                    
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import '@/assets/sass/pages/faq/faq2.scss';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'FAQ' });
</script>
