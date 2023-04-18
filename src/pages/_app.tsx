import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import { HeaderPage } from '../components/header';
import { Head } from '~/components/head';
import { Footer } from '~/components/footer';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head
        title="MAIS LIMPO - Empresa especializada em limpeza de estofados e limpeza pós obra"
        meta={[
          {
            name: 'description',
            content:
              'A MAIS LIMPO é uma empresa especializada em limpeza e higienização de estofados e limpeza pós obra.',
          },
          {
            name: 'keywords',
            content:
              'limpeza de estofados, limpeza pós obra, higienização, empresa especializada',
          },
        ]}
      />
      <main className="">
        <HeaderPage />
        <Component {...pageProps} />
        <div className="hidden desktop:block">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
