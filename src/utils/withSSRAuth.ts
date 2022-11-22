import {
    GetServerSideProps,
    GetServerSidePropsResult,
    GetServerSidePropsContext,
} from 'next';
import { parseCookies } from 'nookies';
import api from '../services/api';

const withSSRAuth = <P extends { [key: string]: any }>(
    fn: GetServerSideProps<P>
) => {
    return async (
        ctx: GetServerSidePropsContext
    ): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);
        // se não possui o cookie com o token
        if (!cookies['ngbackend.token']) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            };
        }
        // passar token para o Authorization header através dos cookies
        api.defaults.headers[
            'Authorization'
        ] = `Bearer ${cookies['ngbackend.token']}`;

        return await fn(ctx);
    };
};

export default withSSRAuth;
