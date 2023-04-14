export const Footer = () => {
  return (
    <footer className="py-5">
      <div className="flex flex-wrap justify-center">
        <h3 className="text-blue-400 font-bold mb-4">Contatos</h3>
        <ul className="text-gray-400">
          <li className="inline-block pl-2">
            <a href="#">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li className="inline-block pl-2">
            <a href="#">
              <i className="fab fa-twitter "></i> WhatsApp
            </a>
          </li>
          <li className="inline-block pl-2">
            <a href="#">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
