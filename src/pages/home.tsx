import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import useAuth from '../hooks/useAuth';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
    const { user } = useAuth();
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Header />

            <Container>
                <main className={styles.main}>Olá {user?.username}</main>
            </Container>

            <footer className={styles.footer}></footer>
        </>
    );
}
