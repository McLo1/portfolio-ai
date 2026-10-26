// Arquivo único para editar projetos. No futuro o n8n poderá gerar PRs alterando este arquivo.
// Não publique links, capturas ou detalhes de clientes sem autorização.
export const profile = {
  name: 'Marcelo Silva',
  role: 'Desenvolvedor de Software',
  location: 'Salvador, Bahia · Brasil',
  headline: 'Construindo software que resolve problemas reais.',
  description: 'Desenvolvo aplicações, integrações e automações com foco em transformar ideias em produtos funcionais. Aprendo construindo e uso IA para acelerar cada etapa do processo.',
  github: '', // adicionar URL pública real
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
    summary: 'Fluxo de atendimento automatizado por WhatsApp, integrado a serviços de pedidos e operação de entregas.',
    challenge: 'Conectar atendimento, coleta estruturada de informações e processos operacionais em uma experiência mais simples.',
    solution: 'Arquitetura com API, orquestração de fluxos e aplicativo de apoio aos entregadores. Projeto em desenvolvimento e validação.',
    stack: ['Python', 'FastAPI', 'n8n', 'Docker', 'Flutter'],
    status: 'Em desenvolvimento',
    accent: 'lime',
    repo: '', demo: '',
  },
  {
    slug: 'escuta',
    number: '02',
    category: 'PRODUTO · MOBILE',
    title: 'Projeto Escuta',
    subtitle: 'Conexões que aproximam pessoas.',
    summary: 'Aplicação para conectar pacientes e terapeutas, com autenticação, catálogo de profissionais e experiência de agendamento.',
    challenge: 'Organizar uma jornada acessível para descobrir profissionais e gerenciar sessões.',
    solution: 'Backend modular e cliente Flutter, com funcionalidades implementadas e testes em evolução.',
    stack: ['NestJS', 'Flutter', 'PostgreSQL', 'JWT'],
    status: 'Em desenvolvimento',
    accent: 'violet',
    repo: '', demo: '',
  },
  {
    slug: 'igreja',
    number: '03',
    category: 'APLICAÇÃO · COMUNIDADE',
    title: 'Gestão de Comunidade',
    subtitle: 'Tecnologia para reunir e organizar.',
    summary: 'Experiência mobile e API para apoiar a gestão de usuários e funcionalidades de uma comunidade.',
    challenge: 'Criar uma base de produto com autenticação e organização de informações.',
    solution: 'Estrutura de API em NestJS e aplicativo Flutter, desenvolvidos por etapas.',
    stack: ['NestJS', 'Flutter', 'PostgreSQL', 'Docker'],
    status: 'Em desenvolvimento',
    accent: 'orange',
    repo: '', demo: '',
  },
]

export const skills = [
  { name: 'BACKEND', items: 'NestJS · FastAPI · APIs REST · PostgreSQL' },
  { name: 'APLICAÇÕES', items: 'React · Flutter · TypeScript' },
  { name: 'AUTOMAÇÃO & IA', items: 'n8n · LLMs · Fluxos inteligentes' },
  { name: 'INFRAESTRUTURA', items: 'Docker · Git · Linux · VPS' },
]
