<template src="./chat-cliente.html"></template>

<script>
import '@/views/components/chat-cliente/chat.css';

import data from "emoji-mart-vue-fast/data/apple.json";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";
import axios from 'axios';

var emojiIndex = new EmojiIndex(data);


export default {
  setup() {
  },
  el: '#chat-container',
  components: {
    Picker
  },
  data() {
    return {
      type: null,
      option: false,
      linkFile: null,
      emojiIndex: emojiIndex,
      usuario: '',
      chatON: false,
      form: true,
      formData: {},
      modal: false,
      typingMessage: '',
      chatBuilding: this.setChatBuild(),
      messages: [],
      newMessage: '',
      load: false,
      emoji: false,
      chat: null,
      atendimento: null
    }
  },
  async created() {
    localStorage.removeItem('chatBuilding');
  },
  async mounted() {

    await this.initChat();
    this.getMessages();

  },
  methods: {
    closeModal() {
      this.emoji = false;

    },
    setChatBuild() {

      var params = this.$route.params;
      var tipo = params.tipo;

      if (localStorage.getItem('chatBuilding') && tipo == 'teste' || tipo == 'getchat') {
        return JSON.parse(localStorage.getItem('chatBuilding'));
      } else {

        localStorage.removeItem('chatBuilding')
        return null
      }
    },
    async initChat() {
      var params = this.$route.params
      var chave = params.chaveId;
      var tipo = params.tipo;
      var telefonParams = params.telefone;
      var emailParams = params.email;


      this.type = tipo;

      var qtdMsgm;
      if (this.messages.length) {
        qtdMsgm = this.messages.length + 1
      } else {
        qtdMsgm = 1
      }

      //usuario chat     
      if (chave && tipo == 'getchat' || tipo == 'teste') {

        this.load = true;
        var acesso = `/api/chat/get-info-chat/${chave}`;

        const chatBuilding = localStorage.setItem("chatBuilding", JSON.stringify(this.chatBuilding));
        if (chatBuilding) {
          this.chatBuilding = chatBuilding;

          if (this.chat && this.chat.telefone) {
            this.formData.nomeValida = true;
            this.formData.emailValida = true;
            this.formData.telefoneValida = true;

            const data = {
              telefone: this.chat.telefone,
              email: this.chat.email
            };

            var url = `/api/chat/novoChat`;
            var criarChat = await axios({
              method: 'post',
              url: url,
              data: data
            });

            if (criarChat.data) {
              localStorage.removeItem('chat');
              this.chat = criarChat.data;

              if (this.chat.messages) {

                if (this.chat.messages.length > 0) {


                  this.chat.messages.map((msg) => {

                    this.messages.push(msg);

                  });

                  this.chat.messages = this.messages;

                  this.scrollToBottom();

                };

              };


            };

          } else {
            this.formData.nomeValida = false;
            this.formData.emailValida = false;
            this.formData.telefoneValida = false;
            localStorage.removeItem('chat');

          }


        } else {
          var resposta = await axios({
            method: 'get',
            url: acesso
          })

          if (resposta.data) {

            const data = {
              ...resposta.data
            }

            this.chatBuilding = data;
            localStorage.setItem("chatBuilding", JSON.stringify(this.chatBuilding));



            if (this.messages.length == 0) {

              this.messages.push({
                message_id: qtdMsgm,
                //avatar: this.chatBuilding.bot_foto,
                username: this.chatBuilding.nome || 'Assistente AI',
                text: this.messages.length == 0 ? this.chatBuilding.msg_inicial : '',
                created_at: new Date()
              });




            }

            if (this.messages.length == 1) {

              this.messages.push({
                message_id: qtdMsgm + 1,
                //avatar: this.chatBuilding.bot_foto,
                username: this.chatBuilding.nome || 'Assistente AI',
                text: 'Digite o seu Nome Completo',
                created_at: new Date()
              });


            }

            if (this.chatBuilding.foto_fundo) {
              const chatBox = document.getElementById('chat-container');
              chatBox.style.backgroundImage = `url("${this.chatBuilding.foto_fundo}")`
            }

            if (this.chatBuilding.cor_conversa_atend) {
              document.documentElement.style.setProperty('--bot-message-color', this.chatBuilding.cor_conversa_atend);

            }
            if (this.chatBuilding.cor_conversa_user) {
              document.documentElement.style.setProperty('--user-message-color', this.chatBuilding.cor_conversa_user);

            }
            if (this.chatBuilding.cor_fundo) {
              document.documentElement.style.setProperty('--background-color', this.chatBuilding.cor_fundo);
            }
            if (this.chatBuilding.cor_botao_enviar) {
              document.documentElement.style.setProperty('--button-color', this.chatBuilding.cor_botao_enviar);

            }
            if (this.chatBuilding.cor_texto_user) {
              document.documentElement.style.setProperty('--button-text-color', this.chatBuilding.cor_texto_user);

            }
            if (this.chatBuilding.tamanho_font_mgm) {
              document.documentElement.style.setProperty('--message-font-size', this.chatBuilding.tamanho_font_mgm + 'px');
            }

            if (this.chat && this.chat.telefone) {
              this.formData.nomeValida = true;
              this.formData.emailValida = true;
              this.formData.telefoneValida = true;

              const data = {
                telefone: this.chat.telefone,
                email: this.chat.email
              };

              var url = `/api/chat/novoChat`;
              var criarChat = await axios({
                method: 'post',
                url: url,
                data: data
              });

              if (criarChat.data) {
                localStorage.removeItem('chat');
                this.chat = criarChat.data;


                if (this.chat.messages) {
                  if (this.chat.messages.length > 0) {


                    this.chat.messages.map((msg) => {

                      this.messages.push(msg);

                    });

                    this.chat.messages = this.messages;


                    this.scrollToBottom();

                  } else { }

                }



              };


            } else {
              this.formData.nomeValida = false;
              this.formData.emailValida = false;
              this.formData.telefoneValida = false;
              localStorage.removeItem('chat');

            }



          } else {
            this.closechat();
          }



        }

      }
      //usuario chat     
      else if (chave && tipo == 'atendimento' && telefonParams && emailParams) {

        this.load = true;
        var acesso = `/api/chat/get-info-chat/${chave}`;
        localStorage.removeItem('chat');
        localStorage.removeItem('chatBuilding');

        var resposta = await axios({
          method: 'get',
          url: acesso
        })

        if (resposta.data) {

          const data = {
            ...resposta.data
          }

          this.chatBuilding = data;
          localStorage.setItem("chatBuilding", JSON.stringify(this.chatBuilding));

          if (this.messages.length == 0) {

            this.messages.push({
              message_id: qtdMsgm,
              //avatar: this.chatBuilding.bot_foto,
              username: this.chatBuilding.nome || 'Assistente AI',
              text: this.messages.length == 0 ? this.chatBuilding.msg_inicial : '',
              created_at: new Date()
            });

          }

          if (this.messages.length == 1) {

            this.messages.push({
              message_id: qtdMsgm + 1,
              // avatar: this.chatBuilding.bot_foto,
              username: this.chatBuilding.nome || 'Assistente AI',
              text: 'Digite o seu Nome Completo',
              created_at: new Date()
            });


          }



          if (telefonParams && emailParams) {
            this.formData.nomeValida = true;
            this.formData.emailValida = true;
            this.formData.telefoneValida = true;

            const data = {
              telefone: telefonParams,
              email: emailParams
            };

            var url = `/api/chat/novoChat`;
            var criarChat = await axios({
              method: 'post',
              url: url,
              data: data
            });

            if (criarChat.data) {

              this.chat = criarChat.data;

              if (this.chat.messages) {

                if (this.chat.messages.length > 0) {

                  this.chat.messages.map((msg) => {

                    this.messages.push(msg);

                  });

                  this.chat.messages = this.messages;

                  this.scrollToBottom();


                }

              }


            };


          } else {
            this.formData.nomeValida = false;
            this.formData.emailValida = false;
            this.formData.telefoneValida = false;
            localStorage.removeItem('chat');
            localStorage.removeItem('chatBuilding');

          }



        } else {
          this.closechat();
        }





      }
      else {
        this.closechat();
      }

      this.scrollToBottom();



    },
    valida() {
      var telefone = this.formData.telefone;
      var nome = this.formData.nome;

      var email = this.formData.email;
      var textEmail = this.messages.filter((i => i.text == 'Digite o seu Email'));
      var textTelefone = this.messages.filter((i => i.text == 'Digite o seu Telefone'));



      if (this.fullName(this.formData.nome)) {
        this.formData.nomeValida = true

        if (textEmail.length == 0) {

          this.messages.push({
            message_id: this.messages.length + 1,
            // avatar: this.chatBuilding.bot_foto,
            username: this.chatBuilding.nome || 'Assistente AI',
            text: 'Digite o seu Email',
            created_at: new Date()
          });

        }


      }
      if (this.emailValida(email) && email != '') {

        this.formData.emailValida = true;

        if (textTelefone.length == 0) {

          this.messages.push({
            message_id: this.messages.length + 1,
            //avatar: this.chatBuilding.bot_foto,
            username: this.chatBuilding.nome || 'Assistente AI',
            text: 'Digite o seu Telefone',
            created_at: new Date()
          });


        }


      }


      if (String(telefone).length == 17) {

        this.formData.telefoneValida = true;
        this.startChat();
      }

    },
    fullName(value) {

      const nome = value &&
        /^[a-zãâáàêéèíìîòóôõúùûüç]{1,}(?:\s+[a-zãâáàêéèíìîòóôõúùûüç]{1,})+/i.test(
          value
        )
        ? true
        : false

      return nome;
    },
    emailValida(value) {
      if (value == '' || value == undefined || value == null) {
        return false;
      };

      const email = value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? false
        : true;
      return email;
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
    closeEmoji() {
      this.emoji = false;
      this.scrollToBottom()
    },
    async getMessages() {

      setInterval(async () => {
        console.log('buscou')

        if (this.chat) {
          var url = `/api/chat/getByChatUuidMessagesLast/${this.chat.uuid}`;
          var newMessage = await axios({
            method: 'get',
            url: url
          });

          if (newMessage.data.length > 0) {
            var hasMsgm = this.messages.filter(i => i.message_id == newMessage.data[0].message_id);
            if (hasMsgm.length === 0) {

              this.messages.push(newMessage.data[0]);
              this.scrollToBottom();
            };

          }

        }

      }, 10000); // Intervalo de 1000 milissegundos (1 segundo)



    },

    telefoneString(telefone) {
      const regex = /[()+-]/g;
      const found = String(telefone).match(regex);
      if (found) {
        return telefone.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll('+', '')

      }
      return telefone;
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
    sendDados() {

      var msmSend = {
        // message_id: this.messages.length + 1,
        //avatar: this.chatBuilding.usario_foto || '',
        username: this.usuario,
        type: 'txt',
        text: this.newMessage
      };

      if (this.newMessage.trim() !== '') {
        this.messages.push(msmSend);
        this.newMessage = '';
      };

    },
    async startChat() {

      var params = this.$route.params

      if (this.formData.nome && this.formData.telefone && this.formData.telefone != '' && this.emailValida(this.formData.email)) {


        const data = {
          nome: this.formData.nome,
          telefone: this.telefoneString(this.formData.telefone),
          email: this.formData.email,
          uuid_chat: this.chatBuilding.uuid,
          uuid: self.crypto.randomUUID(),
          chat_app: 'web'
        };

        if (this.chatBuilding.projeto_id) {
          data['projeto_id'] = this.chatBuilding.projeto_id
        }
        if (this.chatBuilding.task_id) {
          data['task_id'] = this.chatBuilding.task_id
        }

        var acesso = `/api/chat/novoChat`;

        var criarChat = await axios({
          method: 'post',
          url: acesso,
          data: data
        });


        if (criarChat.data) {
          localStorage.removeItem('chat');
          this.chat = criarChat.data;

          if (this.chat.messages && this.chat.messages.length > 0) {


            this.chat.messages.map((msg) => {

              this.messages.push(msg);

            });

            this.chat.messages = this.messages;
            this.scrollToBottom();


          } else {


          }
        };


      } else {
        this.closechat();

      }

    },

    async sendMessage() {

      console.log(this.chat)
      var params = this.$route.params;
      var tipo = params.tipo;

      this.usuario = this.chat.nome;

      if (tipo == 'atendimento') {
        this.usuario = params.user
      }


      this.emoji = false;

      var msmSend = {
        // message_id: this.messages.length + 1,
        //avatar: this.chatBuilding.usario_foto || '',
        username: this.usuario,
        type: 'txt',
        text: this.newMessage
        //to_telefone: this.telefoneString(this.formData.telefone) || this.chat.telefone
      };

      if (this.chat.chat_id) {
        msmSend['chat_id'] = this.chat.chat_id;
      }


      var acesso = `/api/chat/createMessages`;

      var novaMsg = await axios({
        method: 'post',
        url: acesso,
        data: msmSend
      });



      if (novaMsg.data) {

        if (this.newMessage.trim() !== '') {
          this.messages.push(novaMsg.data);
          this.newMessage = '';
          this.scrollToBottom()
        };


      } else {
        this.showMessage('Erros para enviar')

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
    },
    sendMessageAnexo(anexos) {

      if (anexos) {

        var msmSend = {
          // message_id: this.messages.length + 1,
          //avatar: this.chatBuilding.usario_foto || 'https://gravatar.com/avatar/bb005e77609153d683d5bdcc61f97658?s=400&d=robohash&r=x',
          username: this.usuario,
          type: 'img',
          text: anexos,
          //to_telefone: this.telefoneString(this.formData.telefone) || this.chat.telefone
        };

        if (this.newMessage.trim() !== '') {
          this.messages.push(msmSend);
          this.newMessage = '';
        };
        if (this.chat.chat_id) {
          msmSend['chat_id'] = this.chat.chat_id;


        }

      }

    },
    messageClass(message) {
      return message.atendimento ? 'lead2-converts_chat_balloon lead2-converts_right_balloon' : 'lead2-converts_chat_balloon lead2-converts_left_balloon message_with_photo';
    },
    messageClassSec(message) {
      return message.atendimento ? '' : 'lead2-converts_chat_balloon_inner innerRight';
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const chatBox = document.getElementById('lead2-converts_chat_component');
        console.log(chatBox.scrollTop, chatBox.scrollHeight)

        if (chatBox) chatBox.scrollTop = 5843;

      });
    },
  },
};

</script>