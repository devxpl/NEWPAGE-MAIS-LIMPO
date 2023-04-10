import Link from 'next/link';

export const Header = (): JSX.Element => {
  return (
    <>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/orcamento">Orçamento</Link>
        <Link href="/empresa">Empresa</Link>
        <Link href="/servicos">Serviços</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </>
  );
};
