<template src="./chat-atendimento.html"></template>
<script>
import '@/views/components/chat/atendimento/chat-atendimento.css';
import ChatService from '@/service/chat-service';

import { mapGetters } from 'vuex';

import data from "emoji-mart-vue-fast/data/apple.json";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";
var emojiIndex = new EmojiIndex(data);


export default {
  setup() {
  },
  el: '#chat',
  components: {
    Picker
  },
  props: {
    chatProps: {},
    user: '',
    allMessages: []
  },
  watch: {
    allMessages: function (novoValor, valorAntigo) {


      this.$nextTick(() => {
        this.messages = this.allMessages;
        this.scrollToBottom();


      });
    }
  },
  data() {
    return {
      type: null,
      option: false,
      linkFile: null,
      emoji: false,
      emojiIndex: emojiIndex,
      usuario: '',
      chatON: false,
      form: true,
      formData: {},
      modal: false,
      typingMessage: '',
      messages: [],
      newMessage: '',
      load: false,
      chat: null,
      atendimento: null
    }
  },
  async created() {
    await this.initChat();

  },
  async mounted() {

    this.scrollToBottom();
    this.getMessagens();

  },
  computed: {
    ...mapGetters(['usuario', 'cliente', 'token', 'permissao', 'sistema']),
  },
  methods: {
    closeModal() {
      this.emoji = false;
    },
    setChatBuild() {


    },
    async initChat() {
      this.$nextTick(() => {
        this.messages = this.allMessages;


      });


    },
    file2Buffer(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        const readFile = function (event) {
          const buffer = reader.result
          resolve(buffer)
        }

        reader.addEventListener('load', readFile)
        reader.readAsArrayBuffer(file)
      })
    },
    getOption() {
      this.option = !this.option;
      this.scrollToBottom()

    },
    async change_file(file) {
      this.file2Buffer(file.target.files[0])
        .then((fileBuffer) => {

        });

      this.anexos = false;
      this.scrollToBottom()

    },
    closeAll(){
      this.emoji = false;
      this.option = false;

    },
    closeEmoji() {
      this.emoji = false;
      this.scrollToBottom()
    },
    openEmoji() {
      this.emoji = !this.emoji;
      this.scrollToBottom()
    },
    showEmoji(emoji) {
      this.newMessage = this.newMessage + emoji.native;

    },
    closechat() {
      this.chatON = false;
      this.form = false;
      this.$nextTick(() => {
        var w = document.querySelector('html');
        w.remove();
      });

    },
    async sendMessage() {

      var msmSend = {
        atendimento: true,
        username: this.user,
        type: 'txt',
        text: this.newMessage,
      };
      if (this.chatProps.chat_id) {
        msmSend['chat_id'] = this.chatProps.chat_id;
      };

      const API = new ChatService(msmSend, this.token, '/api/chat/newMessages');

      await API.sendMsg().then(
        (msg) => {
          console.log(msg.data)
          this.messages.push(msg.data);
          this.newMessage = '';
          this.scrollToBottom();
        }).catch((e) => {
          this.showMessage(e, 'error')
        });

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
    sendMessageAnexo(anexos) {

    },
    messageClass(message) {
      console.log(message)
      return message.atendimento ? 'lead2-converts_chat_balloon lead2-converts_right_balloon' : 'lead2-converts_chat_balloon lead2-converts_left_balloon message_with_photo';
    },
    getMessagens() {

      setInterval(async () => {


        if (this.chatProps.uuid) {


          var url = `/api/chat/getByChatUuidMessagesLast/${this.chatProps.uuid}`;

          const API = new ChatService({}, this.token, url);

          API.get().then((newMessage) => {

            if (newMessage.data.length > 0) {

              var hasMsgm = this.messages.filter(i => i.message_id == newMessage.data[0].message_id);
              console.log(hasMsgm)

              if (hasMsgm.length === 0) {

                this.messages.push(newMessage.data[0]);
                this.scrollToBottom();
              };

            }
          })



        }

      }, 10000); // Intervalo de 1000 milissegundos (1 segundo)
    },
    scrollToBottom() {
      this.$nextTick(() => {
        let chatBox = document.getElementById('lead2-converts_chat_component');

        if (chatBox) {
          chatBox.scrollTop = chatBox.offsetHeight * 10;
        }

      });
    },
  },
};

</script>