<h1 align="center" id="title">Municca Technical Test</h1>

<p align="center"><img src="https://socialify.git.ci/lucianogmoraesjr/municca-technical-test/image?language=1&name=1&owner=1&pattern=Solid&theme=Auto" alt="project-image"></p>

<p align="center"><img src="https://img.shields.io/badge/version-v1-%23339933" alt="shields"></p>

<p>A Document Management API é uma aplicação projetada para gerenciar documentos de usuários de forma eficiente e segura. Este projeto foi desenvolvido como um teste técnico para a empresa Municca, com foco na criação de uma solução que não apenas atenda aos requisitos funcionais, mas que também siga as melhores práticas de desenvolvimento.

Utilizei uma arquitetura modular e apliquei padrões de projeto como Repository Pattern e inversões de dependências para promover uma melhor separação de responsabilidades e facilitar a manutenção do código. Os testes unitários foram implementados para garantir a qualidade do software, utilizando bibliotecas como Vitest para garantir que cada componente funcione como esperado e fornece uma documentação completa através do Swagger, facilitando a integração e uso por parte de outros desenvolvedores.</p>

<h2>🧐 Features</h2>

Aqui estão algumas das funcionalidades do projeto:

*   Autenticação de usuários
*   Criação e atualização de documentos
*   Recuperação de documentos por ID
*   Validação de entradas com Zod

### 🧭 API Endpoints
| Methods | Endpoints                        | Action                                      |
| ------- | -------------------------------- | ------------------------------------------- |
| `GET`   | /docs                            | To access API Docs with Swagger             |
| `POST`  | /auth                 | To authenticate                              |
| `GET`   | /users       | To fetch all users |
| `GET`   | /users/{userId}   | To get a specific user                 |
| `POST`  | /users                           | To create a new user                        |
| `PUT`   | /users/{userId}   | To update a user                 |
| `DELETE`   | /users/{userId}   | To delete a user                 |
| `GET`   | /documents       | To fetch all documents for the current user  |
| `GET`   | /documents/{documentId}          | To get a document by ID                     |
| `POST`  | /documents                           | To create a new document                        |
| `DELETE`   | /documents/{documentId}   | To delete a user's document                 |
| `PUT`   | /documents/{documentId}   | To update a user's document                 |
| `PATCH`   | /documents/{documentId}/approve   | To approve a user's document                 |
| `PATCH`   | /documents/{documentId}/reject   | To reject a user's document                 |

<h2>🛠️ Installation Steps:</h2>

### Configurando o ambiente

Para iniciar a aplicação localmente, é necessário ter [Node](https://nodejs.org) e [pnpm](https://pnpm.io).

### Instalando as dependências

Para instalar as dependências do projeto, rode o comando:

```bash
$ pnpm install
```

### Environment Variables

O arquivo `.env.example` contém todas as variáveis preenchidas para rodar localmente, basta copiar e alterar o nome para `.env`:

```bash
$ cp .env.example .env
```

### API

Com o ambiente devidamente configurado, a aplicação está pronta para iniciar:

```bash
$ pnpm dev
```
Por padrão, a aplicação está rodando no endereço: `http://localhost:3333`

Acesse `http://localhost:3333/docs` para a documentação

<h2>💻 Built with</h2>

Tecnologias utilizadas no projeto:

* [![Node.js][node]][node-url]
* [![TypeScript][typescript]][typescript-url]
* [![Express][express]][express-url]
* [![Prisma][prisma]][prisma-url]
* [![Zod][zod]][zod-url]

<!-- MARKDOWN LINKS & IMAGES -->
[node]: https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=%23339933&labelColor=20232A
[node-url]: https://nodejs.org/en
[TypeScript]: https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=TypeScript&logoColor=%233178C6&labelColor=20232A
[typescript-url]: https://www.typescriptlang.org/
[prisma]: https://img.shields.io/badge/Prisma-20232A?style=for-the-badge&logo=prisma&logoColor=fff&labelColor=20232A
[prisma-url]: https://www.prisma.io/
[express]: https://img.shields.io/badge/Express%20-%20%2320232A?style=for-the-badge&logo=express&labelColor=20232A
[express-url]: https://expressjs.com/
[zod]: https://img.shields.io/badge/Zod%20-%20%2320232A?style=for-the-badge&logo=zod&labelColor=20232A
[zod-url]: https://zod.dev/
