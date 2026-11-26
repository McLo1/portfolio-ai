# Portfólio de Marcelo Silva

Desenvolvo APIs, integrações e aplicações em Salvador, Bahia. Este portfólio reúne projetos em desenvolvimento e mostra as decisões técnicas por trás de cada um. O site é uma aplicação React com Vite, servida por Nginx no deploy em contêiner.

## Projetos apresentados

| Projeto | Problema | Implementação e estágio |
| --- | --- | --- |
| RevGás | Organizar os dados de pedidos recebidos pelo WhatsApp e integrá-los ao ERP de uma revenda de gás. | Fluxos no n8n e API em Python com FastAPI. O aplicativo Flutter para entregadores está em desenvolvimento. |
| Escuta | Reunir a descoberta de terapeutas, o agendamento e o acesso à sessão em um aplicativo. | Flutter, NestJS, Prisma e PostgreSQL. A integração de videochamadas com LiveKit foi validada em testes. |
| Gestão de Comunidade | Centralizar o acesso e organizar informações de uma comunidade. | Aplicativo Flutter em desenvolvimento, com foco inicial em autenticação e organização dos dados. |

Os textos e o estágio de cada projeto ficam em [src/data.js](src/data.js). Os cartões, a navegação e a apresentação dos detalhes estão em [src/main.jsx](src/main.jsx).

## Como a IA participa de um pedido no RevGás

Imagine a mensagem **“Quero dois P13 e vou pagar no Pix.”** Na etapa de coleta, o modelo interpreta a mensagem e propõe os campos do pedido. O backend valida essa saída. Com os dados do exemplo, o resultado da validação é:

```json
{
  "intencao": "INFORMAR",
  "dados_atualizados": {
    "produto": "P13",
    "quantidade": 2,
    "pagamento": "pix",
    "endereco": {}
  }
}
```

O endereço ficou vazio porque a pessoa ainda não o informou. O backend verifica o que falta, consulta o preço no ERP e controla a confirmação antes do envio do pedido. Se a extração incluir um campo de preço ou de status, a validação rejeita a saída.

O exemplo usa uma mensagem fictícia e uma resposta simulada do modelo. O resultado acima foi conferido com o mesmo esquema Pydantic usado na aplicação.

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
