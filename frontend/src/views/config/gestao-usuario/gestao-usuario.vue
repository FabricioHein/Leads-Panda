
<template>
    <page :params="getAcesso()">
    <div class="layout-px-spacing app-contacts">
        <div class="row layout-spacing layout-top-spacing" id="cancel-row">
            <div class="col-lg-12">
                <div class="panel-body searchable-container" :class="[grid_type]">
                    <div class="p-3 row">
                        <h6>Gestão de Permissões e Acessos</h6>

                        <div
                            class="col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center">
                            <form class="form-inline my-2 my-lg-0">
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-search">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    <input type="text" v-model.trim="search_user" class="product-search form-control"
                                        v-on:keyup="search_contacts()" placeholder="Buscar Usuário..." />
                                </div>
                            </form>
                        </div>
                       
                    </div>

                    <div class="searchable-items" :class="[grid_type]">
                        <div class="items items-header-section">
                            <div class="item-content">
                                <div class="">                                

                                    <h4>Nome</h4>
                                </div>                                
                                <div>
                                    <h4>Email</h4>
                                </div>
                                <div class="user-nome">
                                    <h4>Telefone</h4>
                                </div>
                                <div class="action-btn" v-if="usuarioInit.isAdmin">
                                    
                                    
                                </div>
                            </div>
                        </div>

                        <div v-for="(user, index) in filterd_contacts_list" class="items" :key="index">
                            <div class="item-content">
                                
                                <div class="user-profile p-l-5">
                                 
                                    <div class="user-meta-info ">
                                        <p class="user-nome">{{ user.nome }}  {{ user.sobrenome }}</p>
                                    </div>
                                </div>
                                
                                <div class="user">
                                    <p class="user">{{ user.email }}</p>
                                </div>
                                <div class="user-phone">
                                    <p class="info-title">Telefone:</p>
                                    <p class="usr-ph-no">{{ user.telefone }}</p>
                                </div>
                                <div class="action-btn" v-if="usuarioInit.isAdmin">
                                    <a href="javascript:;" class="me-1" @click="edit_user(user, modulosSistema)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-edit-2 edit">
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lage modal -->
                    <div class="modal fade" id="addContactModal" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                                    <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close"
                                        class="btn-close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="panel-body justify-tab tabs">
                                        <ul class="nav nav-tabs mb-3 mt-3 nav-fill" id="justifyTab" role="tablist">                                      
                                            <li class="nav-item">
                                                <a class="nav-link" id="justify-profile-tab" data-bs-toggle="tab"
                                                    href="#user-permissao" role="tab" aria-controls="justify-profile"
                                                    aria-selected="true">Permissões</a>
                                            </li>
                                           
                                        </ul>
                                        <div class="tab-content" id="justifyTabContent">
                                       
                                            <div class="tab-pane fade active show" id="user-permissao" role="tabpanel"
                                                aria-labelledby="justify-profile-tab">
                                                <div class="add-contact-box">
                                                    <div class="add-contact-content">

                                                        <div class="container mt-4">

                                                            <form>
                                                                <div class="mb-3">
                                                                    <b class="form-label">Módulos:</b>
                                                                    <div class="form-check" v-for="mod in modulosSistema"
                                                                        :key="mod.id">
                                                                        <b class="form-label">{{ mod.nome }}:</b>
                                                                        <div v-for="s in mod.subModulo">
                                                                            {{ s.nome }}:
                                                                            <div>
                                                                                <label class="p-20">Editar:</label>
                                                                                <input type="checkbox" v-model="s.editar"
                                                                                    :checked="s.editar" />
                                                                                <label class="p-20">Ver:</label>
                                                                                <input type="checkbox" v-model="s.ver"
                                                                                    :checked="s.ver" />
                                                                                <label class="p-20">Deletar:</label>
                                                                                <input type="checkbox" v-model="s.deletar"
                                                                                    :checked="s.deletar" />
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
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i
                                            class="flaticon-cancel-12"></i> Cancelar</button>
                                    <button type="button" class="btn btn-primary" @click="save_user()">{{ params.id ?
                                        'Atualizar' : 'Salvar' }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</page>
</template>
<style scoped>
.p-20 {
    padding: 20px;
}

.searchable-container .switch {
    width: auto;
    height: auto;
}

.searchable-container .searchable-items.grid .items .user-profile .custom-checkbox {
    display: none !important;
}
</style>

<script setup>
import { computed, onMounted, ref } from 'vue';
import '@/assets/sass/apps/contacts.scss';
import { useStore } from 'vuex';
import { useMeta } from '@/composables/use-meta';
import usuarioService from '@/service/usuario-service';

import UsuarioModel from './usuarioModel';
import Acesso from '@/helpers/Acesso'
import page from '@/views/components/page.vue';

useMeta({ title: 'Permissões' });

let addContactModal = ref(null);
const params = ref({ id: null, linkFoto: '', nome: '', email: '', telefone: '', senha: '' });
const contacts_list = ref([]);
const filterd_contacts_list = ref([]);
const search_user = ref('');
const ids = ref([]);
const grid_type = ref('list');

const store = useStore();



const sistema = JSON.parse(JSON.stringify(store.getters.sistema));
const permissao = store.getters.permissao;

const modulosSistema = ref(sistema.modulos);
const sexo = sistema.enum.sexo;
const opcao = sistema.enum.opcao;

const usuarioInit = store.getters.usuario;
const cliente = store.getters.cliente;

onMounted(() => {
    initPopup();
    bind_contacts();
});
const getAcesso = () => {

const acesso = Acesso.getAcesso('Configuração', '/gestao/usuarios', permissao);
console.log(acesso);

return acesso
}
const check_all_checkbox = computed(() => {
    if (contacts_list.value.length && ids.value.length == contacts_list.value.length) {
        return true;
    } else {
        return false;
    }
});

const initPopup = () => {
    addContactModal = new window.bootstrap.Modal(document.getElementById('addContactModal'));
};

const bind_contacts = async () => {
    const usuarioServ = new usuarioService(null, store.getters.token, `/api/usuario/todos/${cliente.id}`);
    contacts_list.value = await usuarioServ.getAllUsuarios();
    search_contacts();
};

const search_contacts = () => {
    console.log(contacts_list);
    filterd_contacts_list.value = contacts_list.value.filter((d) => d.nome.includes(search_user.value));
};
const isAdmin = () => {
    console.log(params.admin)
}

const edit_user = (user, modulosSistema) => {
    params.value = { id: null, linkFoto: '', nome: '', email: '', telefone: '' };
    if (user) {
        params.value = JSON.parse(JSON.stringify(user));
        let usuarioPermissao = JSON.parse(JSON.stringify(user.permissao_modulos || []));

        if (usuarioPermissao.length > 0) {

            modulosSistema.forEach((mod) => {
                let subMod = mod.subModulo;
                usuarioPermissao.forEach((p) => {
                    let usuarioSubMod = p.modulo.subModulo;
                    if (mod.id === p.modulo.id) {
                        mod.ver = p.ver;
                        console.log(mod.ver, p);
                        mod.ativo_modulo = p.modulo.ativo;
                        if (usuarioSubMod.length > 0) {
                            subMod.forEach((i) => {
                                usuarioSubMod.forEach((j) => {
                                    if (i.id === j.id) {
                                        let permissaoMod = j.permissao_sub_modulos;
                                        if (permissaoMod.length > 0) {
                                            i.ver = j.permissao_sub_modulos[0].ver;
                                            i.editar = j.permissao_sub_modulos[0].editar;
                                            i.deletar = j.permissao_sub_modulos[0].deletar;
                                        }
                                    }
                                });
                            });
                        }
                    }
                });
            });
        }
    }

    addContactModal.show();
};

const GerarSenha = () => {
    params.value.senha = Math.floor(9861670000 + Math.random() * 900000).toString();
    console.log(params.value.senha)
    showMessage('Salve a Senha Gerada!.');
}

const NovaSenha = async () => {
    const usuarioModel = new UsuarioModel(params.value);
    const recupearSenhaEmail = new usuarioService();

    const envioEmail = await recupearSenhaEmail.recupearSenhaEmail(usuarioModel.email);
    if (envioEmail) {
        showMessage('Verifique o Seu Email para Alterar sua Senha');
    }


}

const save_user = async () => {
    const usuarioModel = new UsuarioModel(params.value);

    usuarioModel.operador = `Add/Atualizado por ${usuarioInit.nome} ${usuarioInit.sobrenome}`;

  
    if (usuarioModel.id) {
        const usuarioServ = new usuarioService(usuarioModel, store.getters.token);
        await usuarioServ.AtualizarUsuario();
        novaPermissao(usuarioModel.id);
    } else {

        delete usuarioModel["id"];
        usuarioModel["senha"] = params.value.senha;
        usuarioModel["empresa_configId"] = Number(cliente.id);
        const usuarioServ = new usuarioService(usuarioModel, store.getters.token);
        const novoUsuario = await usuarioServ.criarUsuario();
        if (novoUsuario.id) {
            novaPermissao(novoUsuario.id);
        }
        else {
            showMessage('Usuário Já Existe ou Encontrado um problema no preencimento!', 'error');

        }
    }

    bind_contacts();
    showMessage(usuarioModel.id ? 'Criado com Sucesso' : 'Salvo com Sucesso!');
    addContactModal.hide();

};
const novaPermissao = async (usuarioId) => {
    if (usuarioId) {
        const permissoesUsuario = JSON.parse(JSON.stringify(modulosSistema.value));
        let permissaoModulos = [];
        let permissaSubmodulos = [];

        permissoesUsuario.forEach((i) => {
            let subModulo = i.subModulo;

            permissaoModulos.push({
                moduloId: i.id,
                userId: usuarioId,
                ver: i.ver ? true : false,
                updated_at: new Date(),
            });

            subModulo.forEach((j) => {
                permissaSubmodulos.push({
                    subModuloId: j.id,
                    userId: usuarioId,
                    editar: j.editar ? true : false,
                    ver: j.ver ? true : false,
                    deletar: j.deletar ? true : false,
                });
            });
        });

        const permissao = {
            id: usuarioId,
            modulos: [...permissaoModulos],
            sub: [...permissaSubmodulos],
        };

        const permissaoUsuario = new usuarioService(permissao, store.getters.token);
        return await permissaoUsuario.atualizarPermissaoModulos();

    }
    else {
        showMessage('Usuário Já Existe ou Encontrado um problema no preencimento!', 'error');

    }

};

const check_all = (is_checked) => {
    if (is_checked) {
        ids.value = contacts_list.value.map((d) => {
            return d.id;
        });
    } else {
        clear_selection();
    }
};

const clear_selection = () => {
    ids.value = [];
};

const showMessage = (msg = '', type = 'success') => {
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
};
</script>
