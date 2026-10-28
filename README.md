# Portfólio — V1

Portfólio pessoal feito com React, Vite e CSS, hospedado via Dokploy e também preparado para execução local com Docker.

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

Edite [`src/data.js`](src/data.js) para atualizar nome, biografia, projetos, tecnologias, links e e-mail. O contato profissional usa `mailto` e o site oferece um botão para copiar o endereço de e-mail. Os projetos são apresentados sem links operacionais para sistemas reais.

- Não há backend nem banco na V1.
- O conteúdo de cada projeto aparece no cartão e ao clicar no cartão.
- O contato é iniciado pelo visitante por meio do cliente de e-mail configurado no dispositivo.
- Não há métricas ou integração com LinkedIn.

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

Em produção, o projeto é hospedado via Dokploy. A execução local continua vinculada a `127.0.0.1` para evitar exposição desnecessária durante o desenvolvimento.

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
