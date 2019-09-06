[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

<style>
  .body {
    display: block
  }
  .body::after {
    content: "";
    background-image: url(https://secure.meetupstatic.com/photos/event/4/0/7/e/600_476776510.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1; 
  }
</style>
<div class='body'>


# Café com VUE - Backend exemplo em GraphQL

Este projeto é o mesmo utilizado ma apresentação de GraphQL do CAfé com VUE Vitória. 

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Sobre o projeto

Este projeto usa o GraphQL Yoga, Node.js, Sequelize e sqlite3. As dependências sâo gerenciadas pelo Yarn

## Primeiros Passos

Clonar este repositório, use o comando `yarn` para atualizar as dependências e crie o banco de dados usando `npx sequelize-cli db:migrate`. Opcionalmente você pode inserir alguns dados de teste com o comando `npx sequelize-cli db:seed:all`.

## Como usar

Execute o projeto usando o comando `yarn dev` ou `yarn start`. Abra o navegador em `http://localhost:4000` e diverta-se!

Dúvidas? Abrir uma issue.
</div>