import Head from 'next/head';
import { CurrencyDollar, HeartStraight } from 'phosphor-react';
import Header from '@organisms/Header';
import { IUserAccountData } from '@contexts/AuthContext';
import api from '@services/api';
import formatPrice from '@utils/formatPrice';
import withSSRAuth from '@utils/withSSRAuth';
import Link from '@atoms/Link';
import Container from '@atoms/Container';

interface IUserAccount {
    accountId: string;
    balance: number;
    username: string;
}

interface HomeProps {
    userAccount: IUserAccount;
}

export default function Home({ userAccount }: HomeProps) {
    return (
        <>
            <Head>
                <title>Tela inicial</title>
            </Head>

            <Header />

            <main className="pt-12 text-black/80">
                <Container>
                    {/* Greetings */}
                    <h1 className="text-5xl">
                        Olá,{' '}
                        <strong className="text-purple-600">
                            {userAccount.username}
                        </strong>
                    </h1>
                    {/* Subtitle */}
                    <p className="mt-2 mb-6 pl-1 text-lg">
                        Bem-vindo(a) de volta à melhor carteira digital. Mas
                        isso você já sabe :)
                    </p>
                    {/* Balance Card */}
                    <div className="text-white bg-black/80 py-4 px-5 rounded-lg shadow-lg shadow-purple-800/60">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-300 text-lg">
                                Seu saldo é de
                            </h3>

                            <CurrencyDollar size="1.6rem" />
                        </div>

                        <p className="font-semibold text-2xl">
                            {formatPrice(userAccount.balance)}
                        </p>
                    </div>
                </Container>
            </main>

            <footer className="absolute bottom-4 left-0 right-0 flex gap-1 justify-center items-center">
                <p>Feito com</p>
                <HeartStraight
                    size="1.2rem"
                    color="rgb(147 51 234)"
                    weight="fill"
                />
                <p>por</p>
                <Link href="https://albertodeveloper.com/">Alberto Santos</Link>
            </footer>
        </>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    // pegar informações da conta do usuário na API e retornar para página
    const res = await api.get('account');
    const { id, balance, user } = res.data as IUserAccountData;
    const userAccount = { accountId: id, balance, username: user.username };

    return {
        props: { userAccount },
    };
});
