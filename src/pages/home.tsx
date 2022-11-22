import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import { IUserAccount } from '../contexts/AuthContext';
import api from '../services/api';
import styles from '../styles/pages/Home.module.scss';
import withSSRAuth from '../utils/withSSRAuth';

interface HomeProps {
    user: IUserAccount;
}

export default function Home({ user }: HomeProps) {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Header />

            <Container>
                <main className={styles.main}>Olá {user.balance}</main>
            </Container>

            <footer className={styles.footer}></footer>
        </>
    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    // pegar informações da conta do usuário na API e retornar para página
    const res = await api.get('account');
    const { id, balance } = res.data;
    const user: IUserAccount = { accountId: id, balance };

    return {
        props: { user },
    };
});
