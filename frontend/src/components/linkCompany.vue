<template>
  <div class="d-flex">
    
    <div :style="{ background: backgroundStyle }" class="link-container flex-grow-1">
      <img v-if="link.showProfilePicture && link.linkProfile" :src="link.linkProfile" alt="Profile"
        class="profile-picture">
        <img style="height: 10%;" :src="require('@/assets/images/odin-logo.png')" v-else/>
        <span :style="colorText" >{{ link.profileText }}</span>

      <a v-for="link in link.links" :key="link.id" :href="link.href" :style="buttonStyle"
        class="a-btn rounded-pill my-2 px-5 py-3">
        <i :class="returnIcon(link)"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;{{ link.label }}
      </a>
      <button v-if="link.showShareLink" :style="buttonStyleShare" class="a-btn rounded-pill my-2 px-5 py-3"
        @click="toggleShareMenu">Compartilhar</button>

      <!-- Share Menu -->
      <div v-if="showShareMenu" class="share-menu" :style="buttonStyleShare">
        <button @click="share('facebook')"> 
          <i class="bi bi-facebook"></i>
          Facebook</button>
        <button @click="share('twitter')">
          <i class="bi bi-twitter"></i>
          Twitter</button>
        <button @click="share('email')">
          <i class="bi bi-envelope"></i>
          Email</button>
        <button v-if="canUseWebShare" @click="share('web')">
          <i class="bi bi-share"></i>
          Compartilhar via...</button>
      </div>
    </div>

     <!-- Modal de configuração -->
 <div v-if="isModalVisible" class="settings-modal">
      <SettingsPanel :initialnome_link="link.nome_link" :initialBackgroundColor1="link.backgroundColor1"
        :initialBackgroundColor2="link.backgroundColor2" :initialBackgroundImage="link.backgroundImage"
        :initId="link.id" :initialButtonColor="link.buttonColor" :initialLinks="link.links" :initialerror="error"
        :initiallinkMsg="msg" :initialShowProfilePicture="link.showProfilePicture"
        :initialShowShareLink="link.showShareLink" @update-nome_link="updateNomeLink"
        @update-linkProfile="updatelinkProfile" @update-background="updateBackground" @update-links="updateLinks"
        @update-updateImage="updateImage" @update-visibility="updateVisibility" @update-button="updateButtonColor" 
        @update-profileText="textTitle"
        @update-colorText1="updateColorText"
        @update-colorText2="updateColorText2"
        />
    </div>
   
    <!-- Botão para alternar a visibilidade do modal -->
    <!-- <button @click="toggleModal" class="btn btn-primary toggle-modal-btn">
      <i v-if="isModalVisible" class="bi bi-eye-slash"></i>
      <i v-else class="bi bi-pencil"></i>
    </button> -->

    <button class="btn btn-success save-btn" v-if="!error && link.nome_link.length > 4 && link.nome_link != ''"
      @click="saveConfigurations">
      {{ link.id ? 'Atualizar Página' : 'Criar Página'
      }}
    </button>
    <button class="btn btn-info ver-btn " v-if="link.nome_link && link.id && !error" @click="ver">
      Ver Link
    </button>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import SettingsPanel from '@/components/SettingsPanel.vue';
import router from '@/router';
import LinkService from '@/service/link-service';
import appSettings from './app-settings';

export default {
  components: {
    SettingsPanel,
    appSettings
  },
  data() {
    return {
      msg: 'Digite um nome para a URL.',
      error: false,
      isModalVisible: true,
      showShareMenu: false,
      canUseWebShare: !!navigator.share,
      link: {
        colorText1: '#fff',
        colorText2: '',
        profileText: 'Bem-vindo a minha página',
        public: true,
        nome_link: '',
        backgroundColor1: '#a18cd1',
        backgroundColor2: '#fbc2eb',
        backgroundImage: null,
        buttonColor: '#ffffff',
        buttonBorderColor: '#fbc2eb',
        showProfilePicture: true,
        showShareLink: true,
        linkProfile: null,
        links: [
          { id: 1, label: 'Instagram', href: 'https://example.com/link1', icon: 'instagram' },
          { id: 2, label: 'Facebook', href: 'https://example.com/link2', icon: 'facebook' },
          { id: 3, label: 'Github', href: 'https://example.com/link3', icon: 'github' }
        ],
      },
    };
  },
  computed: {
    ...mapGetters(['usuario', 'cliente', 'token', 'permissao']),
    colorText(){
      return {
        color: this.link.colorText1
      }
    },
    colorText2(){
      return {
        color: this.link.colorText2
      }
    },
    backgroundStyle() {
      if (this.link.backgroundImage) {
        return `url(${this.link.backgroundImage})`;
      } else {
        return `linear-gradient(${this.link.backgroundColor1}, ${this.link.backgroundColor2})`;
      }
    },
    buttonStyleShare() {
      return { background: this.link.backgroundColor1, borderColor: this.link.buttonBorderColor, color: this.link.colorText2 };
    },
    buttonStyle() {
      return { background: this.link.buttonColor, borderColor: this.link.buttonBorderColor, color: this.link.colorText2 };
    },
  },
  async created() {
    if (this.$route.params.id != 'novo') {
      const getLink = new LinkService({}, this.token, `/api/pageLink/getlink/${this.$route.params.id}`);
      const findLink = await getLink.getLink();
      if (findLink.id) {
        this.link = findLink;
      }
    };
  },
  mounted() { },
  methods: {
    async saveConfigurations() {
      if (this.link.id) {
        const configData = {
          id: this.link.id,
          nome_link: this.link.nome_link != '' ? this.link.nome_link : this.usuario.nome + Math.random() * 100,
          backgroundColor1: this.link.backgroundColor1,
          backgroundColor2: this.link.backgroundColor2,
          backgroundImage: this.link.backgroundImage,
          buttonColor: this.link.buttonColor,
          linkProfile: this.link.linkProfile,
          showProfilePicture: this.link.showProfilePicture,
          showShareLink: this.link.showShareLink,
          clientId: this.cliente.id,
          links: this.link.links
        };

        const update = new LinkService(configData, this.token, '/api/pageLink');
        const updateLinkPage = await update.atualizarLink();
        if (updateLinkPage.id) {
          this.link = updateLinkPage;
          this.showMessage('Atualizado com sucesso!')

        };
      } else {
        const configData = {
          nome_link: this.link.nome_link != '' ? this.link.nome_link : this.usuario.nome + Math.random() * 100,
          backgroundColor1: this.link.backgroundColor1,
          backgroundColor2: this.link.backgroundColor2,
          backgroundImage: this.link.backgroundImage,
          buttonColor: this.link.buttonColor,
          linkProfile: this.link.linkProfile,
          showProfilePicture: this.link.showProfilePicture,
          showShareLink: this.link.showShareLink,
          clientId: this.cliente.id,
          links: this.link.links,
        };

        const saveLinkPage = new LinkService(configData, this.token, '/api/pageLink');
        console.log(configData)

        const criandoLinkPage = await saveLinkPage.criarLink();
        if (criandoLinkPage.id) {
          this.link = criandoLinkPage;
          this.showMessage('Criado com sucesso!')
          router.push(`/meus-link/linkCreate/${criandoLinkPage.id}`);
        };
      };
    },
    returnIcon(link) {
      return link.icon ? `bi bi-${link.icon}` : ''
    },
    ver() {
      window.open(`/link/${this.link.nome_link}`)
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    toggleShareMenu() {
      this.showShareMenu = !this.showShareMenu;
    },
    share(platform) {
      const shareData = {
        title: 'Check this out!',
        text: 'Veja este link incrível:',
        url: window.location.href
      };

      if (platform === 'web' && navigator.share) {
        navigator.share(shareData).catch(console.error);
      } else {
        let shareUrl = '';
        switch (platform) {
          case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
            break;
          case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
            break;
          case 'email':
            shareUrl = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
            break;
        }
        window.open(shareUrl, '_blank');
      }
      this.toggleShareMenu();
    },
    updateColorText({ colorText1 }){
      this.link.colorText1 = colorText1;
    },
    updateColorText2({ colorText2 }){
      this.link.colorText2 = colorText2;
    },
    updatelinkProfile({ image }) {
      this.link.linkProfile = image;
    },
    updateNomeLink({ nome_link, msg, error }) {
      this.link.nome_link = nome_link;
      this.msg = msg;
      this.error = error;
      console.log(nome_link, msg, error)
    },
    updateBackground({ color1, color2, image }) {
      this.link.backgroundColor1 = color1;
      this.link.backgroundColor2 = color2;
      this.link.buttonColor = color2;
      this.link.backgroundImage = image;
    },
    textTitle({ profileText }) {
      console.log(profileText)
      this.link.profileText = profileText;
    },
    updateImage({ image }) {
      console.log(image)
      this.link.backgroundImage = image;
    },
    updateLinks(links) {
      this.link.links = links;
    },
    updateVisibility({ showProfilePicture, showShareLink }) {
      this.link.showProfilePicture = showProfilePicture;
      this.link.showShareLink = showShareLink;
    },
    updateButtonColor({ color }) {
      this.link.buttonColor = color;
      console.log(this.link.buttonColor)
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
    },
  },
};
</script>


<style>
.a-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4375rem 1.25rem;
  text-shadow: none;
  font-size: 14px;

  font-weight: normal;
  white-space: normal;
  word-wrap: break-word;
  transition: 0.2s ease-out;
  touch-action: manipulation;
  cursor: pointer;
  box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.1);
  will-change: opacity, transform;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
}

.link-container {
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.settings-modal {
 position: fixed;
  top: 0;
  right: 0;
  width: 400px; 
  height: 100vh;
  background-color: #ffffff;
  border-left: 1px solid #ffffff;
  overflow-y: auto;
}

.toggle-modal-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1050;
}

.save-btn {
  position: fixed;
  bottom: 20px;
  right: 80px;
  z-index: 1050;
}

.ver-btn {
  position: fixed;
  bottom: 20px;
  right: 240px;
  z-index: 1050;
}

.share-menu {

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
}

.share-menu button {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
}

.share-menu button:hover {
  background-color: #f0f0f0;
}
</style>
