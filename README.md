<div align="center">
  <img src="https://img.shields.io/badge/status-paused-yellow" />
</div>
<div align="center">
  <img src="https://img.shields.io/badge/NextJS-black?&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?&logo=typescript&logoColor=white" />
</div>

# ng-frontend

🎨 Frontend do NG.CASH (desafio técnico)

## Screenshot 📸

![image](https://user-images.githubusercontent.com/89992304/203819017-dca21ad7-1829-4089-8877-131c7deb9599.png)

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

-   NextJS
-   TypeScript
-   Autenticação com JWT ([JSON Web Tokens](https://jwt.io/introduction)) no NextJS
-   ContextAPI (para autorização e autenticação no NextJS com SSR)
-   Nookies
-   Bearer Token
-   GitHub Actions
-   Hooks personalizados
-   Yup (validação de form)
-   Formik
-   HeadlessUI
-   TailwindCSS
-   Phosphor icons

## Regras de negócio 📑

<details>
<summary>Clique aqui para expandir</summary>

-   [x] Página para realizar o cadastro na NG informando _username_ e _password._
-   [x] Página para realizar o login informando _username_ e _password._
-   [x] Com o usuário logado, a página principal deve apresentar:
    -   [x] _balance_ atual do usuário;
    -   [-] Seção voltada à realização de transferências para outros usuários NG a partir do _username_ de quem sofrerá o _cash-in_;
    -   [-] Tabela com os detalhes de todas as transações que o usuário participou;
    -   [-] Mecanismo para filtrar a tabela por data de transação e/ou transações do tipo _cash-in_/_cash-out_;
    -   [x] Botão para realizar o _log-out._

</details>

## Relacionados 🔗

[NG Backend](https://github.com/allbertuu/ng-backend)

## Feedback 💬

Se você tiver algum feedback, me manda uma mensagem no [LinkedIn](https://www.linkedin.com/in/albertov-albuquerque/) 😉
