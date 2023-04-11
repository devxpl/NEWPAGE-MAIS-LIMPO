import router from 'next/router';
import LinkStyle from './link';

export const HeaderPage = () => {
  async function handleClick(href: string) {
    try {
      await router.push(href);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header className="flex flex-row-reverse ">
      <nav className="flex space-x-5">
        <LinkStyle href="/" label="Inicio" />{' '}
        <a onClick={() => void handleClick('/')} />
        <LinkStyle href="/orcamento" label="Orçamento" />
        <a onClick={() => void handleClick('/orcamento')} />
        <LinkStyle href="/empresa" label="Empresa" />
        <a onClick={() => void handleClick('/empresa')} />
        <LinkStyle href="/servicos" label="Serviços" />
        <a onClick={() => void handleClick('/servicos')} />
        <LinkStyle href="/contato" label="Contatos" />
        <a onClick={() => void handleClick('/contato')} />
      </nav>
    </header>
  );
};
