import { PrismaService } from '../../src/base/relacional/PrismaService';

const prisma = new PrismaService();
var listaNome = `Lista`
const Config = {
  configuracaoCliente: [
    {
      nome_empresa: 'lead2-converts',
      logo_link: '',
      nome_fantasia: 'lead2-converts',
    },
  ],
  tipo_projeto: [
    {
      id: 1,
      descricao: 'Gestão Projetos',
    },
    {
      id: 2,
      descricao: 'CRM',
    },
  ],
  usuarios: {
    nome: 'fabricio',
    cpf: '07230589975',
    isAdmin: true,
    sexoId: 2,
    email: 'fabricio.hein@live.com',
    password: '$2a$10$i3vF7YAgOOrsZ0QaGwNHru11Ztm7mHmUln1o88gNRSDRxmpQ3Bdpm', // senha admin1234
  },
  modulos: [

    {
      id: 5,
      nome: 'Chat Bot',
      url: '/leads-ai-chatbot',
      ativo: true,
      icon: 'bi bi bi-robot',
      ordem: 1
    },
    {
      id: 1,
      nome: 'CRM',
      url: '/crm',
      ativo: true,
      icon: 'bi bi-bullseye',
      ordem: 2,
    },
    // {
    //   id: 2,
    //   nome: 'MKT',
    //   url: '/mkt',
    //   ativo: true,
    //   icon: 'bi bi-ui-radios-grid',
    //   ordem: 3,
    // },
    {
      id: 4,
      nome: 'Chat',
      url: '/atendimento',
      ativo: true,
      icon: 'bi bi-chat-right-text',
      ordem: 4,
    },
    {
      id: 3,
      nome: 'Cadastro',
      url: '/cadastro',
      ativo: true,
      icon: 'bi bi-database-fill-add',
      ordem: 5,
    },
  
  ],
  submodulos: [
    {
      moduloId: 1,
      ativo: true,
      icon: '',
      nome: 'Funil de Vendas',
      url: '/oportunidades',
    },
    {
      moduloId: 1,
      ativo: true,
      icon: '',
      nome: 'Atividades',
      url: '/atividades',
    },
    {
      moduloId: 1,
      ativo: true,
      icon: '',
      nome: 'Visão Geral de Leads',
      url: '/leads',
    },
    {
      moduloId: 3,
      ativo: true,
      icon: '',
      nome: 'Permissões e Acesso',
      url: '/gestao/usuarios',
    },
    // {
    //   moduloId: 2,
    //   ativo: true,
    //   icon: '',
    //   nome: 'Criar Formulário',
    //   url: '/formulario/novo',
    // },
    // {
    //   moduloId: 2,
    //   ativo: true,
    //   icon: '',
    //   nome: 'Formulários',
    //   url: '/formularios/lista',
    // },
    
    {
     moduloId: 3,
      ativo: true,
      icon: '',
      nome: 'Clientes',
      url: '/clientes',
    },
    {
      moduloId: 3,
      ativo: true,
      icon: '',
      nome: 'Parâmetros',
      url: '/parametros',
    },
    {
      moduloId: 3,
      ativo: true,
      icon: '',
      nome: 'Produtos/Serviços',
      url: '/produtos',
    },
    {
      moduloId: 3,
      ativo: true,
      icon: '',
      nome: 'Usuários',
      url: '/usuarios',
    },
    //atendimento
    {
      moduloId: 4,
      ativo: true,
      icon: '',
      nome: 'Atendimentos',
      url: '/chat-atendimento',
    },
     //chatbot
    {
      moduloId: 5,
      ativo: true,
      icon: '',
      nome: 'Criar Chat',
      url: '/novo',
    },
    {
      moduloId: 5,
      ativo: true,
      icon: '',
      nome: listaNome,
      url: '/lista',
    }
  ],
  sexo: [
    {
      id: 1,
      descricao: 'Feminino',
    },
    {
      id: 2,
      descricao: 'Masculino',
    },
  ],

  opcao: [
    {
      id: 1,
      descricao: 'Sim',
      Opcao: true,
    },
    {
      id: 2,
      descricao: 'Não',
      Opcao: false,
    },
  ],
};

async function main() {
  const enunSexo = await prisma.sexo.findMany();

  if (enunSexo.length == 0) {
    await prisma.configuracaoCliente.createMany({
      data: Config.configuracaoCliente,
    });

    await prisma.modulo.createMany({
      data: Config.modulos,
    });
    await prisma.subModulo.createMany({
      data: Config.submodulos,
    });
    await prisma.opcao.createMany({
      data: Config.opcao,
    });

    await prisma.sexo.createMany({
      data: Config.sexo,
    });
  }
  const user = await prisma.users.create({
    data: {
      ...Config.usuarios,
    },
  });

  if (user) {

    await prisma.users.update({
      where: {
        id: user.id
      },
      data: {
        clienteId: 1
      }
    });
    //permissao admin
    const modulos = await prisma.modulo.findMany();
    const subModulos = await prisma.subModulo.findMany();

    let permissaoModulos = modulos.map(m => {
      return {
        userId: user.id,
        moduloId: m.id,
        ver: true,
      };
    });

    let permissaoSubModulos = subModulos.map(s => {
      return {
        userId: user.id,
        subModuloId: s.id,
        editar: true,
        ver: true,
        deletar: true,
      };
    });

    await prisma.permissao_modulos.createMany({
      data: [...permissaoModulos],
    });

    await prisma.permissao_sub_modulos.createMany({
      data: [...permissaoSubModulos],
    });
  }
}
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
