 class ChatUpdatedModel {
    constructor(data) {

        this.chat_info_id = data.chat_info_id,
            this.msg_inicial = data.msg_inicial || 'Bem-vindo' ,
            this.key_chatgpt = data.key_chatgpt || null,
            this.organization_chatgpt = data.organization_chatgpt || null,
            this.key_facebook = data.key_facebook || null,
            this.type = data.type || null,
            this.key_instagram = data.key_instagram || null,
            this.token_whatsapp = data.token_whatsapp || null,
            this.app_secret_whatsapp = data.app_secret_whatsapp || null,
            this.wa_id_numero_telefone = data.wa_id_numero_telefone,
            this.bot_ativo = data.bot_ativo ? data.bot_ativo : false,
            this.chat_gpt_bot_ativo = data.chat_gpt_bot_ativo  ? data.chat_gpt_bot_ativo : false,
            this.foto_bot_ativo = data.foto_bot_ativo ? data.foto_bot_ativo : false,
            this.bot_nome = data.bot_nome || null,
            this.bot_foto = data.bot_foto || null,
            this.foto_fundo = data.foto_fundo || null,
            this.usario_foto = data.usario_foto || null,
            this.modelo_ai = data.modelo_ai || null,

            this.cor_fundo = data.cor_fundo || null,
            this.cor_conversa_user = data.cor_conversa_user || null,
            this.cor_conversa_atend = data.cor_conversa_atend || null,
            this.cor_botao_enviar = data.cor_botao_enviar || null,
            this.texto_input = data.texto_input || null,
            this.tamanho_font_mgm = data.tamanho_font_mgm || null,
            this.tamanho_avatar_usuario = data.tamanho_avatar_usuario || null,
            this.empresa_configId = Number(data.empresa_configId),
            this.anexo_documento = data.anexo_documento ? data.anexo_documento : false

    }
}


export default   ChatUpdatedModel