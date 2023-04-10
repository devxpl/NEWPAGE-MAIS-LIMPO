import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from 'src/components/template';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
