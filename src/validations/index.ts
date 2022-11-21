import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Que tal um pouco maior?")
    .required('O campo "Nome do usuário" é obrigatório.'),
  password: Yup.string()
    .required('O campo "Senha" é obrigatório.')
    .min(8, "Precisa conter pelo menos 8 caracteres.")
    .matches(
      /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/,
      "Senha precisa conter pelo menos uma letra maiúscula, uma minúscula, e um número."
    ),
});
