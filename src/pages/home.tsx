import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import { IUserAccountData } from '../contexts/AuthContext';
import api from '../services/api';
import styles from '../styles/pages/Home.module.scss';
import withSSRAuth from '../utils/withSSRAuth';

interface HomeProps {
    userAccount: {
        accountId: string;
        balance: number;
        username: string;
    };
}

export default function Home({ userAccount }: HomeProps) {
    return (
        <>
            <Head>
                <title>Tela inicial</title>
            </Head>

            <Header />

            <Container>
                <main className={styles.main}>
                    Olá {userAccount.username}. Sua conta tem {userAccount.balance}
                </main>
            </Container>

            <footer className={styles.footer}></footer>
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
