-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "empresa_configId" INTEGER,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "id" SERIAL NOT NULL,
    "cardNumber" VARCHAR(19) NOT NULL,
    "expiryDate" VARCHAR(5) NOT NULL,
    "cvv" VARCHAR(4) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "empresa_configId" INTEGER,

    CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_verifications" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "email_verifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reset_passwords" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "expire_in" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reset_passwords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_info" (
    "chat_info_id" SERIAL NOT NULL,
    "uuid" TEXT,
    "type" VARCHAR(20),
    "msg_inicial" TEXT,
    "modelo_ai" TEXT,
    "fluxo" JSONB,
    "bot_ativo" BOOLEAN DEFAULT true,
    "chat_gpt_bot_ativo" BOOLEAN DEFAULT false,
    "atendimento_manual" BOOLEAN DEFAULT false,
    "foto_bot_ativo" BOOLEAN DEFAULT true,
    "foto_usuario_ativo" BOOLEAN DEFAULT true,
    "bot_nome" VARCHAR(150),
    "bot_foto" TEXT,
    "foto_fundo" TEXT,
    "usario_foto" TEXT,
    "cor_fundo" VARCHAR(20),
    "cor_conversa_user" VARCHAR(20),
    "cor_conversa_atend" VARCHAR(20),
    "cor_texto_user" VARCHAR(20),
    "cor_texto_atend" VARCHAR(20),
    "cor_botao_enviar" VARCHAR(20),
    "texto_input" VARCHAR(20),
    "tamanho_font_mgm" INTEGER,
    "tamanho_avatar_usuario" INTEGER,
    "empresa_configId" INTEGER,
    "anexo_documento" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "key_chatgpt" TEXT,
    "organization_chatgpt" TEXT,
    "key_facebook" TEXT,
    "key_instagram" TEXT,
    "token_whatsapp" TEXT,
    "app_secret_whatsapp" TEXT,
    "wa_id_numero_telefone" TEXT,

    CONSTRAINT "chat_info_pkey" PRIMARY KEY ("chat_info_id")
);

-- CreateTable
CREATE TABLE "integracao" (
    "integracao_id" SERIAL NOT NULL,
    "empresa_configId" INTEGER,

    CONSTRAINT "integracao_pkey" PRIMARY KEY ("integracao_id")
);

-- CreateTable
CREATE TABLE "messages" (
    "message_id" SERIAL NOT NULL,
    "username" VARCHAR(50),
    "text" TEXT,
    "type" VARCHAR(10),
    "whatsapp_id" VARCHAR(150),
    "chat_id" INTEGER NOT NULL,
    "atendimento" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "messages_pkey" PRIMARY KEY ("message_id")
);

-- CreateTable
CREATE TABLE "chat" (
    "chat_id" SERIAL NOT NULL,
    "uuid" VARCHAR(300),
    "nome" VARCHAR(50),
    "telefone" VARCHAR(50),
    "email" VARCHAR(50),
    "chat_info_id" INTEGER,
    "empresa_configId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "chat_open" BOOLEAN DEFAULT false,
    "data_close" TIMESTAMP(3),
    "nome_usuario_close" VARCHAR(25),
    "chat_app" VARCHAR(5) DEFAULT 'web',
    "taskId" INTEGER,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("chat_id")
);

-- CreateTable
CREATE TABLE "motivos" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "empresa_configId" INTEGER,
    "codigo" VARCHAR(20),
    "nome" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "motivos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "msg_padrao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "empresa_configId" INTEGER,

    CONSTRAINT "msg_padrao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agenda" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "className" VARCHAR(20),
    "status" VARCHAR(10),
    "date_start" TIMESTAMP(3),
    "date_end" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "agenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agenda_cliente" (
    "id" SERIAL NOT NULL,
    "agendaId" INTEGER NOT NULL,
    "empresa_configId" INTEGER NOT NULL,

    CONSTRAINT "agenda_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agenda_user" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "agendaId" INTEGER NOT NULL,

    CONSTRAINT "agenda_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "times" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "metasId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "status" VARCHAR(50),
    "valor_meta" DECIMAL(10,2),
    "valor_alcancado" DECIMAL(10,2),
    "data_inicial" TIMESTAMP(3),
    "data_final" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "empresa_configId" INTEGER,

    CONSTRAINT "metas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_projeto" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tipo_projeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campanha_mkt" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(50),
    "html_body" TEXT,
    "empresa_configId" INTEGER,
    "tipo_msgId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "data_final" TIMESTAMP(3),
    "data_inicial" TIMESTAMP(3),
    "status" VARCHAR(10),

    CONSTRAINT "campanha_mkt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lista_mkt" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(50),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "lista_mkt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lista_contato_cliente" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "lista_mktId" INTEGER,
    "contactsId" INTEGER,
    "empresa_configId" INTEGER,

    CONSTRAINT "lista_contato_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campanha_lista" (
    "id" SERIAL NOT NULL,
    "updated_at" TIMESTAMP(3),
    "campanha_mktId" INTEGER,
    "lista_mktId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "campanha_lista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "page_link" (
    "id" TEXT NOT NULL,
    "profileText" TEXT,
    "nome_link" TEXT,
    "linkProfile" TEXT,
    "public" BOOLEAN,
    "backgroundColor1" VARCHAR(10),
    "backgroundColor2" VARCHAR(10),
    "colorText1" VARCHAR(10),
    "colorText2" VARCHAR(10),
    "backgroundImage" TEXT,
    "buttonColor" VARCHAR(10),
    "showProfilePicture" BOOLEAN,
    "showShareLink" BOOLEAN,
    "clientId" INTEGER,

    CONSTRAINT "page_link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link_company" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(20) NOT NULL,
    "href" TEXT NOT NULL,
    "icon" VARCHAR(20) NOT NULL,
    "page_linkId" TEXT,

    CONSTRAINT "link_company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link" (
    "id" SERIAL NOT NULL,
    "publico" BOOLEAN,
    "url_formulario" VARCHAR(250),
    "title" VARCHAR(50),
    "json" JSONB,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "projetoId" INTEGER,
    "processoId" INTEGER,
    "empresa_configId" INTEGER,
    "nome_campanha" VARCHAR(255),
    "link_redirect" VARCHAR(800),
    "logo" VARCHAR(500),
    "logo_width" VARCHAR(10),
    "logo_height" VARCHAR(10),
    "taskId" INTEGER,

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_ask" (
    "id" SERIAL NOT NULL,
    "formulario_dinamicoId" INTEGER,
    "json" JSONB,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "form_ask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projeto" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "tipo_projetoId" INTEGER,
    "operador" VARCHAR(150),
    "empresa_configId" INTEGER,

    CONSTRAINT "projeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processo" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(500),
    "color" VARCHAR(10),
    "etapa" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "projetoId" INTEGER,
    "operador" VARCHAR(150),

    CONSTRAINT "processo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_produto" (
    "id" SERIAL NOT NULL,
    "taskId" INTEGER,
    "produtoId" INTEGER,

    CONSTRAINT "task_produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "contato_nome" VARCHAR(100),
    "contato_numero" VARCHAR(20),
    "title" VARCHAR(100),
    "cpf" VARCHAR(150),
    "description" TEXT,
    "processoId" INTEGER,
    "valor_Inicial" DECIMAL(10,2),
    "valor_Final" DECIMAL(10,2),
    "marcar_venda" BOOLEAN,
    "desconto" DECIMAL(10,2),
    "previsao_fechamento" TIMESTAMP(3),
    "status" VARCHAR(50),
    "emailId" INTEGER,
    "anotacoesId" INTEGER,
    "contactsId" INTEGER,
    "usersId" INTEGER,
    "operador" VARCHAR(150),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "metasId" INTEGER,
    "vendaId" INTEGER,
    "empresa" VARCHAR(100),
    "motivosId" INTEGER,
    "produtoId" INTEGER,
    "arquivado" BOOLEAN,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensageria" (
    "id" SERIAL NOT NULL,
    "processo" VARCHAR(20) NOT NULL,
    "data_processamento" TIMESTAMP(3),
    "data_envio" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "tipo_msgId" INTEGER,
    "emailId" INTEGER,
    "smsId" INTEGER,

    CONSTRAINT "mensageria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_msg" (
    "id" SERIAL NOT NULL,
    "tipo_msgm" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tipo_msg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(50) NOT NULL,
    "from" VARCHAR(50) NOT NULL,
    "to" VARCHAR(50) NOT NULL,
    "html_body" TEXT NOT NULL,
    "data_envio" TIMESTAMP(3) NOT NULL,
    "taskId" INTEGER,
    "campanha_mktId" INTEGER,

    CONSTRAINT "email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sms" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(50) NOT NULL,
    "from" VARCHAR(50) NOT NULL,
    "to" VARCHAR(50) NOT NULL,
    "body" TEXT NOT NULL,
    "data_envio" TIMESTAMP(3) NOT NULL,
    "campanha_mktId" INTEGER,

    CONSTRAINT "sms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attachments" (
    "id" SERIAL NOT NULL,
    "link" TEXT,
    "description" TEXT,
    "emailId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arquivos" (
    "id" SERIAL NOT NULL,
    "link" TEXT,
    "description" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "taskId" INTEGER,
    "empresa_configId" INTEGER,
    "messagesMessage_id" INTEGER,

    CONSTRAINT "arquivos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anotacoes" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "date" TIMESTAMP(3),
    "is_fav" BOOLEAN,
    "tag" VARCHAR(10),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "taskId" INTEGER,

    CONSTRAINT "anotacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_taks" (
    "id" SERIAL NOT NULL,
    "chave" VARCHAR(50),
    "valor" VARCHAR(50),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "taskId" INTEGER,

    CONSTRAINT "log_taks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_task" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "description_text" TEXT,
    "priority" VARCHAR(10),
    "status" VARCHAR(10),
    "date_start" TIMESTAMP(3),
    "date_end" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "taskId" INTEGER,

    CONSTRAINT "sub_task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "config_clientes" (
    "id" SERIAL NOT NULL,
    "logo_link" TEXT,
    "cover_link" TEXT,
    "nome_empresa" VARCHAR(150),
    "nome_fantasia" VARCHAR(150),
    "cnpj_cpf" VARCHAR(21),
    "telefone" VARCHAR(25),
    "responsavel" VARCHAR(25),
    "email" VARCHAR(150),
    "departamento" VARCHAR(150),
    "setor" VARCHAR(150),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "logradouro" VARCHAR(150),
    "bairro" VARCHAR(150),
    "estado" VARCHAR(150),
    "cidade" VARCHAR(150),
    "pais" VARCHAR(150),
    "complemento" VARCHAR(150),
    "cep" VARCHAR(25),
    "numero" VARCHAR(20),
    "currentPlanId" INTEGER,

    CONSTRAINT "config_clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(200),
    "sobrenome" VARCHAR(200),
    "email" VARCHAR(200),
    "empresa" VARCHAR(150),
    "data_nascimento" TIMESTAMP(3),
    "cpf" VARCHAR(150),
    "cnpj" VARCHAR(150),
    "rg" VARCHAR(150),
    "telefone" VARCHAR(25),
    "responsavel" VARCHAR(25),
    "linkFoto" TEXT,
    "sexoId" INTEGER,
    "planoId" INTEGER,
    "empresa_configId" INTEGER,
    "cep" VARCHAR(25),
    "logradouro" VARCHAR(150),
    "bairro" VARCHAR(150),
    "estado" VARCHAR(150),
    "cidade" VARCHAR(150),
    "pais" VARCHAR(150),
    "complemento" VARCHAR(150),
    "numero" VARCHAR(20),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historico_cliente" (
    "id" SERIAL NOT NULL,
    "chave" VARCHAR(25),
    "valor" VARCHAR(500),
    "operador" VARCHAR(50),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "empresa_configId" INTEGER,

    CONSTRAINT "historico_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria_produto" (
    "id" SERIAL NOT NULL,
    "codigo" VARCHAR(150) NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "detalhamento" VARCHAR(500),
    "operador" VARCHAR(150) NOT NULL,
    "empresa_configId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "categoria_produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" SERIAL NOT NULL,
    "codigo" VARCHAR(150) NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "detalhamento" VARCHAR(500),
    "link_img" TEXT,
    "qtd_estoque" DECIMAL(10,2),
    "preco_venda" DECIMAL(10,2),
    "ativo" BOOLEAN,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "operador" VARCHAR(150) NOT NULL,
    "categoria_produtoId" INTEGER,
    "empresa_configId" INTEGER,
    "descricao" TEXT,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servico" (
    "id" SERIAL NOT NULL,
    "codigo" VARCHAR(150) NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "detalhamento" TEXT,
    "valor_hora" DECIMAL(10,2) NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "operador" VARCHAR(150),
    "empresa_configId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venda" (
    "id" SERIAL NOT NULL,
    "valor_total" DECIMAL(10,2),
    "status" VARCHAR(20) NOT NULL DEFAULT 'venda',
    "empresa_configId" INTEGER,
    "taskId" INTEGER,
    "usersId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "venda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fornecedor" (
    "id" SERIAL NOT NULL,
    "link_img" TEXT,
    "nome_responsavel" VARCHAR(50),
    "email" VARCHAR(20),
    "empresa" VARCHAR(50),
    "cnpj" VARCHAR(50),
    "telefone" VARCHAR(25),
    "celular" VARCHAR(25),
    "foto" TEXT,
    "ativo" BOOLEAN,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "operador" VARCHAR(150),
    "empresa_configId" INTEGER,

    CONSTRAINT "fornecedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissao_modulos" (
    "id" SERIAL NOT NULL,
    "ver" BOOLEAN,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "userId" INTEGER,
    "moduloId" INTEGER,

    CONSTRAINT "permissao_modulos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissao_sub_modulos" (
    "id" SERIAL NOT NULL,
    "editar" BOOLEAN,
    "ver" BOOLEAN,
    "deletar" BOOLEAN,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "userId" INTEGER,
    "subModuloId" INTEGER,

    CONSTRAINT "permissao_sub_modulos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historico_permissao" (
    "id" SERIAL NOT NULL,
    "operador" VARCHAR(150),
    "descricao" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "permissao_modulosId" INTEGER,
    "permissao_sub_modulosId" INTEGER,

    CONSTRAINT "historico_permissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modulo" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150),
    "url" VARCHAR(150),
    "ativo" BOOLEAN,
    "ordem" INTEGER,
    "icon" VARCHAR(51),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "modulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_modulo" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(150),
    "url" VARCHAR(150),
    "ativo" BOOLEAN,
    "icon" VARCHAR(40),
    "ordem" INTEGER,
    "moduloId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "sub_modulo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sexo_enum" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(11),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "sexo_enum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opcao" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(11),
    "Opcao" BOOLEAN,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "opcao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_usuario_enum" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(21),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "tipo_usuario_enum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contatos" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "number" VARCHAR(20),
    "profilePicUrl" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "email" VARCHAR(255),
    "empresa_configId" INTEGER,
    "logradouro" VARCHAR(150),
    "bairro" VARCHAR(150),
    "estado" VARCHAR(150),
    "cidade" VARCHAR(150),
    "pais" VARCHAR(150),
    "complemento" VARCHAR(150),
    "numero" VARCHAR(20),
    "cep" VARCHAR(25),

    CONSTRAINT "contatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255),
    "sobrenome" VARCHAR(200),
    "empresa" VARCHAR(150),
    "cpf" VARCHAR(150),
    "telefone" VARCHAR(25),
    "linkFoto" TEXT,
    "isAdmin" BOOLEAN,
    "themeDark" BOOLEAN,
    "operador" VARCHAR(150),
    "sexoId" INTEGER,
    "email" VARCHAR(255),
    "profile" VARCHAR(255) DEFAULT 'admin',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "last_login" TIMESTAMP(3),
    "verifiedAt" TIMESTAMP(3),
    "timesId" INTEGER,
    "cep" VARCHAR(25),
    "logradouro" VARCHAR(150),
    "bairro" VARCHAR(150),
    "estado" VARCHAR(150),
    "cidade" VARCHAR(150),
    "pais" VARCHAR(150),
    "complemento" VARCHAR(150),
    "numero" VARCHAR(20),
    "primeiro_acesso" BOOLEAN,
    "gerente_conta" BOOLEAN,
    "termos" BOOLEAN,
    "password" TEXT,
    "empresa_configId" INTEGER,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email_verifications_email_key" ON "email_verifications"("email");

-- CreateIndex
CREATE UNIQUE INDEX "email_verifications_code_key" ON "email_verifications"("code");

-- CreateIndex
CREATE UNIQUE INDEX "reset_passwords_email_key" ON "reset_passwords"("email");

-- CreateIndex
CREATE UNIQUE INDEX "reset_passwords_token_key" ON "reset_passwords"("token");

-- CreateIndex
CREATE UNIQUE INDEX "chat_telefone_key" ON "chat"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "chat_email_key" ON "chat"("email");

-- CreateIndex
CREATE UNIQUE INDEX "agenda_cliente_empresa_configId_agendaId_key" ON "agenda_cliente"("empresa_configId", "agendaId");

-- CreateIndex
CREATE UNIQUE INDEX "agenda_user_userId_agendaId_key" ON "agenda_user"("userId", "agendaId");

-- CreateIndex
CREATE UNIQUE INDEX "task_vendaId_key" ON "task"("vendaId");

-- CreateIndex
CREATE UNIQUE INDEX "config_clientes_currentPlanId_key" ON "config_clientes"("currentPlanId");

-- CreateIndex
CREATE UNIQUE INDEX "venda_taskId_key" ON "venda"("taskId");

-- CreateIndex
CREATE UNIQUE INDEX "contatos_number_key" ON "contatos"("number");

-- CreateIndex
CREATE UNIQUE INDEX "contatos_email_key" ON "contatos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_info" ADD CONSTRAINT "chat_info_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integracao" ADD CONSTRAINT "integracao_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chat"("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_chat_info_id_fkey" FOREIGN KEY ("chat_info_id") REFERENCES "chat_info"("chat_info_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "motivos" ADD CONSTRAINT "motivos_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "msg_padrao" ADD CONSTRAINT "msg_padrao_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda_cliente" ADD CONSTRAINT "agenda_cliente_agendaId_fkey" FOREIGN KEY ("agendaId") REFERENCES "agenda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda_cliente" ADD CONSTRAINT "agenda_cliente_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda_user" ADD CONSTRAINT "agenda_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda_user" ADD CONSTRAINT "agenda_user_agendaId_fkey" FOREIGN KEY ("agendaId") REFERENCES "agenda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "times" ADD CONSTRAINT "times_metasId_fkey" FOREIGN KEY ("metasId") REFERENCES "metas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metas" ADD CONSTRAINT "metas_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campanha_mkt" ADD CONSTRAINT "campanha_mkt_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campanha_mkt" ADD CONSTRAINT "campanha_mkt_tipo_msgId_fkey" FOREIGN KEY ("tipo_msgId") REFERENCES "tipo_msg"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista_contato_cliente" ADD CONSTRAINT "lista_contato_cliente_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista_contato_cliente" ADD CONSTRAINT "lista_contato_cliente_contactsId_fkey" FOREIGN KEY ("contactsId") REFERENCES "contatos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista_contato_cliente" ADD CONSTRAINT "lista_contato_cliente_lista_mktId_fkey" FOREIGN KEY ("lista_mktId") REFERENCES "lista_mkt"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campanha_lista" ADD CONSTRAINT "campanha_lista_lista_mktId_fkey" FOREIGN KEY ("lista_mktId") REFERENCES "lista_mkt"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campanha_lista" ADD CONSTRAINT "campanha_lista_campanha_mktId_fkey" FOREIGN KEY ("campanha_mktId") REFERENCES "campanha_mkt"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "page_link" ADD CONSTRAINT "page_link_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link_company" ADD CONSTRAINT "link_company_page_linkId_fkey" FOREIGN KEY ("page_linkId") REFERENCES "page_link"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_ask" ADD CONSTRAINT "form_ask_formulario_dinamicoId_fkey" FOREIGN KEY ("formulario_dinamicoId") REFERENCES "link"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projeto" ADD CONSTRAINT "projeto_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projeto" ADD CONSTRAINT "projeto_tipo_projetoId_fkey" FOREIGN KEY ("tipo_projetoId") REFERENCES "tipo_projeto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processo" ADD CONSTRAINT "processo_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "projeto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_produto" ADD CONSTRAINT "task_produto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_produto" ADD CONSTRAINT "task_produto_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_contactsId_fkey" FOREIGN KEY ("contactsId") REFERENCES "contatos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_metasId_fkey" FOREIGN KEY ("metasId") REFERENCES "metas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_motivosId_fkey" FOREIGN KEY ("motivosId") REFERENCES "motivos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_processoId_fkey" FOREIGN KEY ("processoId") REFERENCES "processo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensageria" ADD CONSTRAINT "mensageria_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "email"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensageria" ADD CONSTRAINT "mensageria_smsId_fkey" FOREIGN KEY ("smsId") REFERENCES "sms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensageria" ADD CONSTRAINT "mensageria_tipo_msgId_fkey" FOREIGN KEY ("tipo_msgId") REFERENCES "tipo_msg"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email" ADD CONSTRAINT "email_campanha_mktId_fkey" FOREIGN KEY ("campanha_mktId") REFERENCES "campanha_mkt"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email" ADD CONSTRAINT "email_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sms" ADD CONSTRAINT "sms_campanha_mktId_fkey" FOREIGN KEY ("campanha_mktId") REFERENCES "campanha_mkt"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "email"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arquivos" ADD CONSTRAINT "arquivos_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arquivos" ADD CONSTRAINT "arquivos_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arquivos" ADD CONSTRAINT "arquivos_messagesMessage_id_fkey" FOREIGN KEY ("messagesMessage_id") REFERENCES "messages"("message_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anotacoes" ADD CONSTRAINT "anotacoes_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_taks" ADD CONSTRAINT "log_taks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_task" ADD CONSTRAINT "sub_task_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "config_clientes" ADD CONSTRAINT "config_clientes_currentPlanId_fkey" FOREIGN KEY ("currentPlanId") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_sexoId_fkey" FOREIGN KEY ("sexoId") REFERENCES "sexo_enum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_cliente" ADD CONSTRAINT "historico_cliente_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoria_produto" ADD CONSTRAINT "categoria_produto_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_categoria_produtoId_fkey" FOREIGN KEY ("categoria_produtoId") REFERENCES "categoria_produto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servico" ADD CONSTRAINT "servico_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "venda_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "venda_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "venda_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fornecedor" ADD CONSTRAINT "fornecedor_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissao_modulos" ADD CONSTRAINT "permissao_modulos_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "modulo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissao_modulos" ADD CONSTRAINT "permissao_modulos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissao_sub_modulos" ADD CONSTRAINT "permissao_sub_modulos_subModuloId_fkey" FOREIGN KEY ("subModuloId") REFERENCES "sub_modulo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissao_sub_modulos" ADD CONSTRAINT "permissao_sub_modulos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_permissao" ADD CONSTRAINT "historico_permissao_permissao_modulosId_fkey" FOREIGN KEY ("permissao_modulosId") REFERENCES "permissao_modulos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_permissao" ADD CONSTRAINT "historico_permissao_permissao_sub_modulosId_fkey" FOREIGN KEY ("permissao_sub_modulosId") REFERENCES "permissao_sub_modulos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sub_modulo" ADD CONSTRAINT "sub_modulo_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "modulo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contatos" ADD CONSTRAINT "contatos_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_empresa_configId_fkey" FOREIGN KEY ("empresa_configId") REFERENCES "config_clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_sexoId_fkey" FOREIGN KEY ("sexoId") REFERENCES "sexo_enum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_timesId_fkey" FOREIGN KEY ("timesId") REFERENCES "times"("id") ON DELETE SET NULL ON UPDATE CASCADE;
