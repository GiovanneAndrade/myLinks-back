# E-commerce com carrinho de compras, login, cadastro, página de favoritos e do usuário

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
      "website": "https://www.youtube.com/watch?v=9q2UjCMoP5k",
      "title": "MELODY MARCANTES / Set As Melhores Da Década 2010 - YouTube",
      "banner": "https://i.ytimg.com/vi/9q2UjCMoP5k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH0CYAC0AWKAgwIABABGB4gWyh_MA8=&rs=AOn4CLCucRqDwtNFQ8fhFzBGiWHkFoKWuQ",
      "description": "https://youtube.com/@melodymarcantes1Melody marcantesManu Batidão Banda Ar15Bruno e Trio Banda 007Banda Os BrotherMelody Sad Melody Sad Melody Marcantes, Mel...",
      "createdAt": "2023-03-30T13:14:04.295Z"
    },
    {
      "id": 11,
      "website": "https://www.youtube.com/watch?v=9q2UjCMoP5k",
      "title": "MELODY MARCANTES / Set As Melhores Da Década 2010 - YouTube",
      "banner": "https://i.ytimg.com/vi/9q2UjCMoP5k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH0CYAC0AWKAgwIABABGB4gWyh_MA8=&rs=AOn4CLCucRqDwtNFQ8fhFzBGiWHkFoKWuQ",
      "description": "https://youtube.com/@melodymarcantes1Melody marcantesManu Batidão Banda Ar15Bruno e Trio Banda 007Banda Os BrotherMelody Sad Melody Sad Melody Marcantes, Mel...",
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

- Este projeto foi minha introdução ao Prisma e TypeScript e foi crucial para aprimorar minhas habilidades em projetos back-end. Através dele, aprendi a implementar recursos como autenticação de usuário e gerenciamento de banco de dados eficiente, testes com jest e supertestes, criando uma aplicação escalável e segura. Estou muito satisfeito com o resultado e confiante de que ele demonstra minhas habilidades como desenvolvedor de back-end.
- Sou grato aos meus tutores e professores, bem como a toda equipe da Driven que participou desse processo. Eles foram essenciais para me guiar e me direcionar como uma bússola.
- etc.


## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
