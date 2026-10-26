# Portfólio — V1

Portfólio pessoal feito com React, Vite e CSS, preparado para execução local e futura hospedagem em uma VPS com Docker.

## Requisitos

- Node.js 20 ou superior
- npm
- Docker e Docker Compose (opcional, apenas para execução em contêiner)

## Executar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

O build é gerado em `dist/`. Esse diretório é um artefato temporário e não deve ser versionado.

## Editar o conteúdo

Edite [`src/data.js`](src/data.js) para atualizar nome, biografia, projetos, tecnologias, links e e-mail. Os links estão vazios para não inventar contatos ou expor código privado. Revise os textos antes de publicar.

- Não há backend nem banco na V1.
- O conteúdo de cada projeto aparece no cartão e ao clicar no cartão.
- Não há comunicação externa automática, métricas ou integração com LinkedIn.

## Executar com Docker

```bash
docker compose up -d --build
docker compose ps
```

O site fica disponível em `http://127.0.0.1:8088`. A porta está vinculada apenas ao localhost para permitir o uso de um proxy reverso com HTTPS.

Para parar o contêiner:

```bash
docker compose down
```

Em uma VPS, configure o Nginx ou Traefik existente para encaminhar o domínio para `http://127.0.0.1:8088`, com TLS/Let's Encrypt. Se o proxy estiver em outro contêiner, use uma rede Docker compartilhada em vez de `127.0.0.1`.

Não interrompa nem substitua contêineres existentes do n8n.

## Estrutura principal

```text
src/data.js       Conteúdo editável do portfólio
src/main.jsx      Componentes e comportamento da interface
src/style.css     Identidade visual e responsividade
Dockerfile        Build multi-stage com Nginx
compose.yml       Execução local do contêiner
nginx.conf        Configuração do servidor estático
```

## Versionamento

Antes do primeiro commit, revise o resultado de:

```bash
git status
git diff -- .gitignore README.md
```

O `.gitignore` exclui dependências, artefatos de build, logs, arquivos locais e variáveis de ambiente. O arquivo `.env.example`, caso seja criado no futuro, pode ser versionado como modelo sem valores secretos.

Não configure credenciais, URLs privadas ou tokens diretamente no código. O repositório remoto e o primeiro push devem ser configurados manualmente após a revisão do primeiro commit.

## Trabalho com IA

Trabalhe em checkpoints pequenos, preserve a identidade escura com verde-lima, valide responsividade e acessibilidade, e execute `npm run build` após alterações. Não invente credenciais, URLs, cases ou resultados.
