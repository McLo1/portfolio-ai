// Arquivo único para editar projetos. No futuro o n8n poderá gerar PRs alterando este arquivo.
// Não publique links, capturas ou detalhes de clientes sem autorização.
export const profile = {
  name: 'Marcelo Silva',
  role: 'Desenvolvedor Backend e de Aplicações',
  location: 'Salvador, Bahia · Brasil',
  headline: 'Construindo produtos digitais que resolvem problemas reais.',
  description: 'Desenvolvo backends, aplicações, APIs, integrações e automações para transformar ideias em produtos digitais funcionais. Uso inteligência artificial aplicada ao desenvolvimento para explorar soluções, aprender e acelerar cada etapa do processo.',
  github: 'https://github.com/McLo1',
  linkedin: '', // adicionar URL pública real
  email: '' // adicionar e-mail profissional
}

export const projects = [
  {
    slug: 'revgas',
    number: '01',
    category: 'AUTOMAÇÃO · BACKEND',
    title: 'RevGás',
    subtitle: 'Atendimento e operações conectados.',
    summary: 'Atendimento automatizado por WhatsApp, com backend em Python/FastAPI e integração com API de ERP.',
    challenge: 'Conectar atendimento, coleta estruturada de informações e processos operacionais em uma experiência mais simples.',
    solution: 'Backend em Python/FastAPI integrado à API de ERP, com fluxos orquestrados no n8n e execução com Docker. Um aplicativo Flutter para entregadores está em desenvolvimento; o projeto segue em desenvolvimento e validação.',
    stack: ['Python', 'FastAPI', 'n8n', 'Docker', 'Flutter'],
    status: 'Em desenvolvimento',
    accent: 'lime',
    repo: '',
    media: {
      cover: '',
      coverAlt: '',
      gallery: [],
      demo: '',
    },
  },
  {
    slug: 'escuta',
    number: '02',
    category: 'PRODUTO · MOBILE',
    title: 'Projeto Escuta',
    subtitle: 'Conexões que aproximam pessoas.',
    summary: 'Plataforma mobile para pacientes e terapeutas, com autenticação, catálogo e agendamentos.',
    challenge: 'Organizar uma jornada acessível para descobrir profissionais e gerenciar sessões.',
    solution: 'Plataforma construída com Flutter, NestJS, PostgreSQL e Prisma. A autenticação, o catálogo e os agendamentos fazem parte da solução; a integração de videochamadas com LiveKit foi validada em testes. Não há confirmação de pagamentos reais implementados.',
    stack: ['NestJS', 'Flutter', 'PostgreSQL', 'Prisma', 'LiveKit'],
    status: 'Em desenvolvimento',
    accent: 'violet',
    repo: '',
    media: {
      cover: '',
      coverAlt: '',
      gallery: [],
      demo: '',
    },
  },
  {
    slug: 'igreja',
    number: '03',
    category: 'APLICAÇÃO · COMUNIDADE',
    title: 'Gestão de Comunidade',
    subtitle: 'Tecnologia para reunir e organizar.',
    summary: 'Aplicativo Flutter e backend em desenvolvimento para apoiar a organização de uma comunidade.',
    challenge: 'Criar uma base de produto com autenticação e organização de informações.',
    solution: 'Aplicativo Flutter e desenvolvimento de backend com autenticação e funcionalidades de organização de comunidade, construídos por etapas. O produto ainda não está concluído.',
    stack: ['NestJS', 'Flutter', 'PostgreSQL', 'Docker'],
    status: 'Em desenvolvimento',
    accent: 'orange',
    repo: '',
    media: {
      cover: '',
      coverAlt: '',
      gallery: [],
      demo: '',
    },
  },
]

export const skills = [
  { name: 'BACKEND', items: 'NestJS · FastAPI · APIs REST · PostgreSQL' },
  { name: 'APLICAÇÕES', items: 'React · Flutter · TypeScript' },
  { name: 'AUTOMAÇÃO & IA', items: 'n8n · LLMs · Fluxos inteligentes' },
  { name: 'INFRAESTRUTURA', items: 'Docker · Git · Linux · VPS' },
]
