export const Footer = () => {
  return (
    <footer className="z-10 py-4 desktop:mt-0 laptop:mt-20 4k:mt-0 tablet:mt-20 hidden desktop:block">
      <div className="flex justify-center">
        <h3 className="text-blue-400 font-bold mb-4">Contatos</h3>
        <ul className="text-gray-400">
          <li className="inline-block pl-2">
            <a href="https://www.facebook.com/profile.php?id=100074426386381">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li className="inline-block pl-2">
            <a href="https://api.whatsapp.com/send/?phone=5519982348981&text&type=phone_number&app_absent=0">
              <i className="fab fa-twitter "></i> WhatsApp
            </a>
          </li>
          <li className="inline-block pl-2">
            <a href="https://www.instagram.com/mais_limpo.higienizacoes/">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
