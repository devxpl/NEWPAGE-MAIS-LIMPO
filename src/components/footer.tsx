export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="text-gray-400">
              <li>Email: contato@exemplo.com</li>
              <li>Telefone: (00) 0000-0000</li>
              <li>Endereço: Rua Exemplo, 123 - Bairro Exemplo</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-white font-bold mb-4">Siga-nos</h3>
            <ul className="text-gray-400">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
