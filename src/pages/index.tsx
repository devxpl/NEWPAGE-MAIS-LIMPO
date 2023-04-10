import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mais Limpo</title>
        <meta
          name="description"
          content="Limpeza e higienização de estofados"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <h1 className="text-violet-900 text-4xl">Main Page</h1>
      </main>
    </>
  );
};

export default Home;
