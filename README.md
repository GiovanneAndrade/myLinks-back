# Aplicativo Web fullstack que permite aos usuários salvar e gerenciar seus links favoritos de forma intuitiva e elegante.

Este é um aplicativo completo que gerencia links salvos pelos usuários. O backend foi desenvolvido utilizando as tecnologias Node.js e TypeScript, com o Prisma sendo utilizado como ORM para gerenciar as interações com o banco de dados.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Para utilizar o aplicativo, é necessário ter o Node.js e o PostgreSQL instalados em sua máquina. Clone o repositório e instale as dependências executando o seguinte comando:
```

### 🔧 Instalação

A seguir, você encontrará um guia passo a passo para configurar um ambiente de desenvolvimento em sua máquina.

```
npm install
```

Em seguida, crie um arquivo .env com as informações de configuração do banco de dados e inicie o servidor com o seguinte comando:

```
npm run dev
```

## ⚙️ Alguns Exemplos de Ultilização.

 post `/link`

- deve enviar um exemplo abaixo:

```json
  {
    "link": "https://www.youtube.com/",
  }

```
 get `/link`

- deve retornar um exemplo abaixo:

```json
 {
  "userId": 1,
  "links": [
    {
      "id": 10,
      "website": "https://www.youtube.com/",
      "title": "youtube",
      "banner": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpngimg.com%2Fuploads%2Fyoutube%2Fyoutube_PNG15.png&tbnid=Nz09-QYwPyYy0M&vet=12ahUKEwihqs6O063_AhWQM7kGHUGXCBoQMygHegUIARDCAQ..i&imgrefurl=https%3A%2F%2Fpngimg.com%2Fimage%2F20647&docid=KxEZ50Pmx4y3nM&w=2272&h=1704&q=youtube%20img&ved=2ahUKEwihqs6O063_AhWQM7kGHUGXCBoQMygHegUIARDCAQ",
      "description": "",
      "createdAt": "2023-03-30T13:14:04.295Z"
    },
    {
      "id": 11,
      "website": "https://www.youtube.com/watch?v=9q2UjCMoP5k",
      "title": "youtube",
      "banner": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpngimg.com%2Fuploads%2Fyoutube%2Fyoutube_PNG15.png&tbnid=Nz09-QYwPyYy0M&vet=12ahUKEwihqs6O063_AhWQM7kGHUGXCBoQMygHegUIARDCAQ..i&imgrefurl=https%3A%2F%2Fpngimg.com%2Fimage%2F20647&docid=KxEZ50Pmx4y3nM&w=2272&h=1704&q=youtube%20img&ved=2ahUKEwihqs6O063_AhWQM7kGHUGXCBoQMygHegUIARDCAQ",
      "description": "YouTube é uma plataforma de vídeos online. Por meio dela, usuários podem assistir, criar e compartilhar vídeos pela internet. Fundada em 2005, a plataforma possui mais de um bilhão de usuários pelo mundo.",
      "createdAt": "2023-03-30T13:14:04.295Z"
    },
 ]

```

 delete `/link`
- deve enviar os links a serem deletados:

```jason
  { 
    "links":[{ "linkId": 11 }]
  }
```
- deve retornar um exemplo abaixo:

```
 status 200 OK
```


 put `/category`
- deve ser enviado o nome da categoria
- pode ou não ser enviado os ids dos links selecionados

```json
  {
    "name": "minha categoria",
    "linkId":[{ "id": 12 }]
  }
```

put `/category/link`
- deve ser enviado pelo menos um id de uma lista
- deve ser enviado pelo menos um id de um link a ser adicionado a ou as categorias
- exemplo abaixo:

```json
  {
    "listId":[{ "listId": 9 }],
    "linkId":[{ "id": 12 }]
  }
```

## ⚙️ Executando os testes

Para executar os testes, é necessário ter um arquivo .env_test configurado com uma variável DATABASE_URL apontando para o banco de dados de teste. Certifique-se de que o banco de dados de teste esteja configurado corretamente antes de prosseguir.

Em seguida, execute o seguinte comando no terminal:

```
npm run test
```

## 🛠️ O aplicativo foi construído usando as seguintes tecnologias:

- Node.js
- express
- TypeScript
- Prisma
- Jest
- supertest
- Git

## ✒️ Autor

- **Giovanne Andrade** - [GiovanneAndrade](https://github.com/GiovanneAndrade)

## 🎁 Expressões de gratidão

- Sou grato aos meus tutores e professores, bem como a toda equipe da Driven que participou desse processo. Eles foram essenciais para me guiar e me direcionar como uma bússola.
- etc.

