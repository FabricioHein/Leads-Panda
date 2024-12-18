<template>
  <div>
  
    <div class="settings-panel">
      <div class="modal-header">
        <h5 class="modal-title">Personalize seu Link</h5>
      </div>
      <div class="modal-body">
        <h6>Links</h6>
        <div class="mb-2">
          <label>URL (Exemplo: /MinhaEmpresa)</label>
          <input type="text" v-model="nome_link" class="form-control" placeholder="Adicione como a sua Url" @input="updateLink" :disabled="setDisable()">
          <div v-if="msg != '' && !error" class="success"> {{ msg }} </div>
          <div v-else class="error"> {{ msg }}</div>
        </div>
        <div class="mb-3">
          <label for="background-image" class="form-label">Imagem de Perfil</label>
          <input type="file" id="background-image" @change="uploadPerfil" class="form-control">
        </div>
        <div class="mb-3">
          <label for="profile-text" class="form-label">Texto abaixo do perfil</label>
          <input type="text" id="profile-text" v-model="profileText" @input="textTitle" class="form-control">
        </div>
        <label>Links </label>
        <div v-for="(link, index) in localLinks" :key="index" class="mb-3">
          <div class="mb-2">
            <input type="text" v-model="link.label" class="form-control" placeholder="Título do Link">
          </div>
          <div class="mb-2">
            <input type="url" v-model="link.href" class="form-control" placeholder="URL do Link">
          </div>
          <div class="d-flex align-items-center mb-2">
            <select v-model="link.icon" class="form-select me-2" style="width: auto;">
              <option value="">Selecionar Ícone</option>
              <option v-for="icon in availableIcons" :key="icon" :value="icon">
                {{ icon }}
              </option>
            </select>
            <button v-if="link.label && link.href" @click="addLinkToHome(link)" class="btn btn-primary btn-sm me-2">
              Adicionar Link
            </button>
            <button @click="deleteLink(index)" class="btn btn-danger btn-sm me-2">
              Excluir
            </button>
          </div>
          <div>
            <button v-if="index !== 0" @click="moveLinkUp(index)" class="btn btn-secondary btn-sm me-2">
              ↑
            </button>
            <button v-if="index !== localLinks.length - 1" @click="moveLinkDown(index)" class="btn btn-secondary btn-sm">
              ↓
            </button>
          </div>
        </div>
        <button @click="addNewLink" class="btn btn-success btn-sm mb-3">
          Adicionar Novo Botão
        </button>
        <h6>Fundo</h6>
        <div class="mb-3">
          <label for="background-color-1" class="form-label">Cor de Fundo 1 &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="color" id="background-color-1" v-bind:value="localBackgroundColor1" @input="updateBackgroundColor1">
        </div>
        <div class="mb-3">
          <label for="background-color-2" class="form-label">Cor de Fundo 2 &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="color" id="background-color-2" v-bind:value="localBackgroundColor2" @input="updateBackgroundColor2">
        </div>
        <div class="mb-3">
          <label for="background-image" class="form-label">Imagem de Fundo</label>
          <input type="file" id="background-image" @change="uploadBackground" class="form-control">
        </div>
        <h6>Cor </h6>
        <div class="mb-3">
          <label for="button-color" class="form-label">Cor do Botão Link</label>
          <input type="color" id="button-color" v-bind:value="localButtonColor" @input="updateButtonColor" class="form-control form-control-color">
        </div>
         <!-- <h6>Tamanho e Cor do Texto do Botão</h6> -->
        <!-- <div class="mb-3">
          <label for="button-text-size" class="form-label">Tamanho do Texto</label>
          <input type="number" id="button-text-size" v-model="buttonTextSize" class="form-control">
        </div>  -->
        <div class="mb-3">
          <label for="button-text-color" class="form-label">Cor do Texto - Título</label>
          <input type="color" id="button-text-color" v-model="colorText1" @input="updateColorText" class="form-control form-control-color">
        </div>
        <div class="mb-3">
          <label for="button-text-color" class="form-label">Cor do Texto - Botões</label>
          <input type="color" id="button-text-color" v-model="colorText2" @input="updateColorText2" class="form-control form-control-color">
        </div>
        <h6>Sugestões de Gradiente</h6>
        <div class="mb-3">
          <div v-for="(gradient, index) in gradientOptions" :key="index" :style="{ background: gradient }" class="gradient-option" @click="applyGradient(gradient)"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkService from '@/service/link-service';
import { mapGetters } from 'vuex';

export default {
  props: {
    initId: String,
    initialerror: Boolean,
    initiallinkMsg: String,
    initiallinkProfile: String,
    initialnome_link: String,
    initialBackgroundColor1: String,
    initialBackgroundColor2: String,
    initialBackgroundImage: String,
    initialButtonColor: String,
    initialLinks: Array,
    initialShowProfilePicture: Boolean,
    initialShowShareLink: Boolean,
  },
  data() {
    return {
      id: this.initId,
      msg: this.initiallinkMsg,
      error: this.initialerror,
      linkProfile: this.initiallinkProfile,
      page_link_id: null,
      public: false,
      nome_link: this.initialnome_link,
      localLinks: this.initialLinks || [],
      localBackgroundColor1: this.initialBackgroundColor1,
      localBackgroundColor2: this.initialBackgroundColor2,
      localBackgroundImage: this.initialBackgroundImage || null,
      localButtonColor: this.initialButtonColor,
      localShowProfilePicture: this.initialShowProfilePicture || false,
      localShowShareLink: this.initialShowShareLink || false,
      profileText: "",
      buttonTextSize: 14,
      colorText1: '#ffffff"',
      colorText2: '#ffffff"',
      buttonTextColor: "#ffffff",
      gradientOptions: [
        'linear-gradient(#ff9a9e, #fad0c4)',
        'linear-gradient(#a18cd1, #fbc2eb)',
        'linear-gradient(#fad0c4, #ffd1ff)',
        'linear-gradient(#ff9a9e, #fecfef)',
        'linear-gradient(#fbc2eb, #a6c1ee)',
        'linear-gradient(#a1c4fd, #c2e9fb)',
        'linear-gradient(#d4fc79, #96e6a1)',
        'linear-gradient(#84fab0, #8fd3f4)',
        'linear-gradient(#a6c0fe, #f68084)',
        'linear-gradient(#fccb90, #d57eeb)',
        'linear-gradient(#f0f0f0, #d0d0d0)',
      ],
      availableIcons: [
        'facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'github', 'envelope',
      ],
      showShareMenu: false,
    };
  },
  computed: {
    ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    linkContainerStyle() {
      return {
        backgroundColor: this.localBackgroundColor1,
        backgroundImage: this.localBackgroundImage ? `url(${this.localBackgroundImage})` : `linear-gradient(${this.localBackgroundColor1}, ${this.localBackgroundColor2})`,
      };
    },
    buttonStyle() {
      return {
        backgroundColor: this.localButtonColor,
        fontSize: `${this.buttonTextSize}px`,
        color: this.buttonTextColor,
      };
    },
  },
  methods: {
    addLinkToHome(link) {
      this.localLinks.push({ ...link });
    },
    deleteLink(index) {
      this.localLinks.splice(index, 1);
    },
    moveLinkUp(index) {
      if (index > 0) {
        const temp = this.localLinks[index];
        this.localLinks.splice(index, 1);
        this.localLinks.splice(index - 1, 0, temp);
      }
    },
    moveLinkDown(index) {
      if (index < this.localLinks.length - 1) {
        const temp = this.localLinks[index];
        this.localLinks.splice(index, 1);
        this.localLinks.splice(index + 1, 0, temp);
      }
    },
    addNewLink() {
      this.localLinks.push({ label: '', href: '', icon: '' });
    },
    textTitle(){
      this.$emit('update-profileText', {
        profileText: this.profileText,
          });
    },
    uploadBackground(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.localBackgroundImage = e.target.result;
          this.$emit('update-updateImage', {
            image: this.localBackgroundImage,
          });
        };
        reader.readAsDataURL(file);
      }
    },
    setDisable(){
      return this.id ? true : false;
    },
    uploadPerfil(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.linkProfile = e.target.result;
          this.$emit('update-linkProfile', {
            image: this.linkProfile,
          });
        };
        reader.readAsDataURL(file);
      }
    },
    applyGradient(gradient) {
      const colors = gradient.match(/#([0-9a-f]{6}|[0-9a-f]{3})/gi);
      if (colors) {
        this.localBackgroundColor1 = colors[0];
        this.localBackgroundColor2 = colors[1];
        this.localBackgroundImage = null;
        this.$emit('update-background', {
          color1: this.localBackgroundColor1,
          color2: this.localBackgroundColor2,
          image: this.localBackgroundImage,
        });
      }
    },
    async updateLink(event) {
      this.nome_link = (event.target.value).toLowerCase();
      this.$emit('update-nome_link', {
        nome_link: this.nome_link,
        msg: this.msg,
        error: this.error
      });
      if (this.nome_link.length > 4) {
        const link = new LinkService({}, this.token, `/api/pageLink/get-nome-existe-link/${this.nome_link}`);
        const nomeLink = await link.getLink();
        if (nomeLink.msg) {
          this.error = nomeLink.error;
          this.msg = nomeLink.msg;
          this.$emit('update-nome_link', {
            nome_link: this.nome_link,
            msg: this.msg,
            error: this.error
          });
        }
      }
    },
    updateBackgroundColor1(event) {
      this.localBackgroundColor1 = event.target.value;
      this.$emit('update-background', {
        color1: this.localBackgroundColor1,
        color2: this.localBackgroundColor2,
        image: this.localBackgroundImage,
      });
    },
    updateBackgroundColor2(event) {
      this.localBackgroundColor2 = event.target.value;
      this.$emit('update-background', {
        color1: this.localBackgroundColor1,
        color2: this.localBackgroundColor2,
        image: this.localBackgroundImage,
      });
    },
    updateColorText(event){
      this.colorText1 = event.target.value;
      this.$emit('update-colorText1', {
        colorText1: this.colorText1
      });
    },
    updateColorText2(event){
      this.colorText2 = event.target.value;
      this.$emit('update-colorText2', {
        colorText2: this.colorText2
      });
    },
    updateButtonColor(event) {
      this.localButtonColor = event.target.value;
      this.$emit('update-button', {
        color: event.target.value
      });
    },
    toggleShareMenu() {
      this.showShareMenu = !this.showShareMenu;
    },
    share(platform) {
      alert(`Compartilhado no ${platform}`);
      this.showShareMenu = false;
    },
  },
};
</script>
<style>
.form-color {
  height: auto;
  border: 1px solid #bfc9d4;
  color: #3b3f5c;
  font-size: 15px;
  padding: 8px 10px;
  letter-spacing: 1px;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  line-height: 19px;
}

.settings-panel {
  width: 600px;
  border-left: 1px solid #ffff;
  /* position: fixed;
  top: 0;
  right: 0; */
  height: 100vh;
  background-color: #fff;
  padding: 20px;

}

.gradient-option {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

.gradient-option:hover {
  transform: scale(1.05);
}

button {
  background-color: var(--button-color, #007bff);
  color: var(--button-text-color, #ffffff);
  font-size: var(--button-text-size, 14px);
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: darken(var(--button-color, #007bff), 10%);
}

button:active {
  background-color: lighten(var(--button-color, #007bff), 10%);
}

.success {
  color: #1abc3d;
}

.error {
  color: #d13f3a;
}

.link-container {
  text-align: center;
  padding: 20px;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.profile-text {
  margin-bottom: 20px;
  font-size: 14px;
  color: #333;
}

.share-btn {
  background-color: var(--button-color, #007bff);
}

.share-menu {
  margin-top: 10px;
}

.share-menu button {
  display: block;
  width: 100%;
  margin-bottom: 5px;
}
</style>
