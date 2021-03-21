
<div align="center">
  <br>
  <p><b>API REST de calculo de NPS</b></p>
  <sub>API-Nodejs | NLW4</sub>
  <br>
</div>


<!-- ## Tabela de conteúdos -->

- [Sobre](#sobre)
- [Feito com](#feito-com)
- [Para começar](#para-começar)
  - [Instalação padrão](#instalação-padrão)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalando dependências](#instalando-dependências)
    - [Inicializando uma instância local](#inicializando-uma-instância-local)
    - [Testes](#testes)
<!-- - [Referência de API](#referência-de-api)
- [Autora](#autora) -->

## Sobre

Esta é uma API que calcula o NPS(Net Promoter Score) de uma determinada empresa ;

## Feito com

- [Node.js](https://nodejs.org/pt-br/) - JavaScript runtime
- [Express](https://expressjs.com/pt-br/) - O framework web utilizado
- [TypeORM](https://typeorm.io/#/) - Ferramenta de mapeamento objeto relacional disponível como biblioteca para projetos em Javascript e Typescript
- [Yarn](https://yarnpkg.com/) - Gerenciador de pacotes e dependências
- [sqlite3](https://yarnpkg.com/) - Gerenciador de pacotes e dependências
- [nodemailer](https://yarnpkg.com/) - Gerenciador de pacotes e dependências
- [handlebars](https://yarnpkg.com/) - Gerenciador de pacotes e dependências

## Para começar

Com as instruções a seguir você terá uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento.

```bash
git clone https://github.com/Arcanjo32cassiel/API-NLW4.git
```

### Instalação padrão

#### Pré-requisitos

- Um gerenciador de dependências - Yarn ou NPM
- [Node.js](https://nodejs.org/pt-br/) versão 10 ou superior


#### Instalando dependências

```bash
yarn
```
ou

```bash
npm install
```

#### Inicializando uma instância local


```bash
yarn dev
```
ou

```bash
npm run dev
```


#### Teste

Para rodar os testes existentes criados com jest, você pode utilizar:

```bash
yarn test
```

ou

```bash
npm run test
```

<!-- ## Referência de API

Os serviços disponíveis nesta API são:

### API de Invoices

Invoices são o principal serviço deste projeto. Utilize a API de invoices sempre que precisar buscar os dados de notas fiscais.

<!-- Listagem de notas fiscais -->

<!-- <details>
<summary style="font-size:24px;color:black"><b>GET: /invoices</b></summary>

#### Função

Listar todos as notas;

#### Requisição

**URL de Requisição**

> https://invoices-api-stone.herokuapp.com/invoices

Retorna um Array dos objetos de invoices.

#### Exemplo de resposta

```
[
   {
    "_id": "604161528d7ad96acc424902",
    "ReferenceMonth": 3,
    "ReferenceYear": 2021,
    "Document": "2",
    "Description": "Mensalidade Escolar",
    "Amount": 500,
    "IsActive": true,
    "DeactivatedAt": null,
    "createdAt": "2021-03-04T22:38:10.720Z",
    "updatedAt": "2021-03-04T22:38:10.720Z",
    "__v": 0
  }
  {...},
  {...}
]
```

</details>

<details>
<summary style="font-size:24px;color:black"><b>POST: /invoices</b></summary>

#### Função

Crie novas notas fiscais; -->

<!-- #### Requisição
**Body**
```
{
	"ReferenceMonth": "01",
	"ReferenceYear": "2018",
	"Document": "3",
	"Description": "Plano de saúde",
	"Amount": 200
}
```
**URL de Requisição**

> https://invoices-api-stone.herokuapp.com/invoices

</details>

<details>
<summary style="font-size:24px;color:black"><b>PUT: /invoices/:id</b></summary>

#### Função

Edita notas fiscais existentes;

#### Requisição
**Body**
```
{
	"ReferenceMonth": "01",
	"ReferenceYear": "2018",
	"Document": "3",
	"Description": "Plano de saúde",
	"Amount": 200
}
``` -->

<!-- **URL de Requisição**

> https://invoices-api-stone.herokuapp.com/invoices

</details>

<details>
<summary style="font-size:24px;color:black"><b>PATCH: /invoices/:id</b></summary>

#### Função

Edita informações específicas de notas fiscais existentes;

#### Requisição
**Body**
```
{
	"ReferenceMonth": "03",
}
```

**URL de Requisição**

> https://invoices-api-stone.herokuapp.com/invoices

</details>

<details>


#### Função

Irá desativar e remover da listagem uma nota fiscal;

#### Requisição
**Body**

**URL de Requisição**

> https://invoices-api-stone.herokuapp.com/invoices

</details> -->

<!-- ## Autora

- **Lorena Montes** - [Lorenalgm](https://github.com/Lorenalgm)

[forks-shield]: https://img.shields.io/github/forks/Lorenalgm/nota-fiscal-api.svg?style=flat-square
[forks-url]: https://github.com/Lorenalgm/nota-fiscal-api/network/members
[stars-shield]: https://img.shields.io/github/stars/Lorenalgm/nota-fiscal-api.svg?style=flat-square
[stars-url]: https://github.com/Lorenalgm/nota-fiscal-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/Lorenalgm/nota-fiscal-api.svg?style=flat-square
[issues-url]: https://github.com/Lorenalgm/nota-fiscal-api/issues -->
 -->
