<div align="center">
  <img src="https://img.shields.io/badge/status-developing-blue" />
</div>
<div align="center">
  <img src="https://img.shields.io/badge/NextJS-black?&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-%2320232a.svg?&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/-Axios-%23000000" />
  <img src="https://img.shields.io/badge/-Formik-%231d4c78" />
  <img src="https://img.shields.io/badge/-Yup-%23bf28b3" />
  <img src="https://img.shields.io/badge/-HeadlessUI-%23437cf7" />
  <img src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?&logo=tailwind-css&logoColor=white" />
</div>

# ng-frontend

🎨 Frontend do NG.CASH (desafio técnico)

## Rodando localmente ▶

> Nesse projeto é usado apenas o Yarn como gerenciador de pacotes. Veja o website oficial do Yarn [aqui](https://yarnpkg.com/).

Clone o projeto

```bash
  git clone https://github.com/allbertuu/ng-frontend
```

Entre no diretório do projeto

```bash
  cd ng-frontend
```

Instale as dependências

```bash
  yarn install
```

Rode o servidor

```bash
  yarn dev
```

> Irá rodar na porta `3000` do `localhost`

Rodar testes (React-testing-library) (**ATUALIZAÇÃO FUTURA**)

```bash
  yarn test
```

## Stack utilizada ⚙

-   TypeScript (para tipagem estática no JS)
-   Autenticação com JWT ([JSON Web Tokens](https://jwt.io/introduction)) no NextJS
-   Criação de contexto de autorização e autenticação (com ContextAPI)
-   Criação de cookies (usando a lib nookies)
-   Manipulação de erros e headers da API do Backend usando Axios
-   Criação do fluxo de autorização (Bearer Token) e autenticação (JWT) no NextJS
-   Criação de CI/CD no GitHub Actions (Prettier para formatação do código)
-   Criação de hooks personalizados
-   Componentização avançada em React
-   Criação de funções utilitárias, e.g. `classNames`
-   Rotas protegidas no NextJS, usando Server-side-rendering (getServerSideProps)
-   Validação com Yup em um formulário Formik
-   Formik para desenvolver um formulário inteligente e fácil
-   HeadlessUI como biblioteca de componentes
-   Meu machado do Thor no Frontend: TailwindCSS. Para simplesmente criar as melhores páginas da web. Só isso :)
-   Phosphor icons para ícones

#### E por fim: Páginas/ladings pages de Cadastro e Login bonitas, modernas, responsivas, e com meu toque especial.

## Regras de negócio para estruturação da _interface visual_ 📑

<details>
<summary>Clique aqui para expandir</summary>

-   [x] Página para realizar o cadastro na NG informando _username_ e _password._
-   [x] Página para realizar o login informando _username_ e _password._
-   [-] Com o usuário logado, a página principal deve apresentar:
    -   [-] _balance_ atual do usuário;
    -   [-] Seção voltada à realização de transferências para outros usuários NG a partir do _username_ de quem sofrerá o _cash-in_;
    -   [-] Tabela com os detalhes de todas as transações que o usuário participou;
    -   [-] Mecanismo para filtrar a tabela por data de transação e/ou transações do tipo _cash-in_/_cash-out_;
    -   [x] Botão para realizar o _log-out._

</details>

## Relacionados 🔗

Segue alguns projetos relacionados

[NG Backend](https://github.com/allbertuu/ng-backend)

## Aprendizados 📚

Nesse desafio, enfrentei muitos obstáculos e dificuldades. Nunca tinha me desafiado a construir algo tão grande e com conhecimentos tão abrangentes e interdisciplinares. Busquei fazer um Frontend bonito, interessante, e que possui o que há de mais novo hoje em dia para o Front, do qual me especializo. No momento do envio do desafio faltaram alguns requisitos, mas sigo desenvolvendo a aplicação, pois o Frontend é o meu queridinho. E pode até não ser a coisa mais íncrivel, mas certamente pra mim foi.  
Claro que, nunca flertei com a desistência, ainda mais quando sei do meu potencial de sucesso, e muito menos seria agora.  
Em 8 dias aprendi desenvolvendo esse APP sozinho, o que jamais aprendi até aqui (11/22). Aprendi a continuar mesmo em uma situação difícil e arrojada, e melhorei ainda mais meu mindset do que **realmente** é um desenvolvedor. Deixo para você descobrir também, mas saiba que ser proativo e curioso já te deixa bemmm a frente.

## Feedback 💬

Se você tiver algum feedback, me manda uma mensagem no [LinkedIn](https://www.linkedin.com/in/albertov-albuquerque/) 😉
