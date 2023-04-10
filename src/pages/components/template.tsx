import LinkStyle from './link';

export const Header = () => {
  return (
    <header className="flex flex-row-reverse">
      <nav className="flex space-x-5">
        <LinkStyle href="/" label="Inicio" />
        <LinkStyle href="/orcamento" label="Orçamento" />
        <LinkStyle href="/empresa" label="Empresa" />
        <LinkStyle href="/servicos" label="Serviços" />
        <LinkStyle href="/contato" label="Contatos" />
      </nav>
    </header>
  );
};
