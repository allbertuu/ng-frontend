import Head from "next/head";
import { FunctionComponent } from "react";
import Image from "next/image";
import Container from "../components/Container";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { StarFour } from "phosphor-react";
import Form from "../components/Form";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <>
      <Head>
        <title>Entrar</title>
      </Head>

      <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
        <section className="bg-black/90 row-span-1">
          <Container className="flex flex-col items-center justify-center h-full gap-8">
            <Image
              src="/logo-ngcash-branco.svg"
              width={230}
              height={150}
              alt="Logo NG.CASH"
              className="w-1/2 max-w-xs max-h-28 lg:max-h-fit"
            />

            <h3 className="lg:text-xl uppercase text-white font-semibold">
              Seja bem-vindo(a)!
            </h3>
          </Container>
        </section>

        <section className="row-span-6 lg:row-auto">
          <Container className="flex flex-col mt-8 lg:mt-0 items-center lg:justify-center h-full gap-12">
            <div className="flex gap-2 max-w-fit justify-center">
              <h1 className="text-2xl after:block after:bg-purple-500 after:h-[3px] after:w-1/4">
                Entrar na sua conta
              </h1>
              <StarFour size={32} color="#a855f7" weight="duotone" />
            </div>

            <Form type="signin" className="w-full max-w-xs mx-auto" />
          </Container>
        </section>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (cookies["ngbackend.token"]) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Login;
