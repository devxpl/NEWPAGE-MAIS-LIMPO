import router from 'next/router';
import { useState } from 'react';

export const HeaderPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  async function handleClick(href: string) {
    try {
      await router.push(href);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="flex  items-center  py-4">
      <div className="flex ml-auto pr-20 md:pr-0 xsm:pr-0">
        <button
          type="button"
          className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg viewBox="0 0 30 30" className="h-10 w-10 fill-current">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18v-2H3Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"
              />
            )}
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        }  absolute inset-x-0 top-5 p-7 transition transform origin-top-right md-hidden flex flex-col justify-end items-end`}
      >
        <a
          className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-blue-300 w-28"
          onClick={() => void handleClick('/')}
        >
          Inicio
        </a>
        <a
          className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-300 w-28"
          onClick={() => void handleClick('/orcamento')}
        >
          Orçamentos
        </a>
        <a
          className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-300 w-28"
          onClick={() => void handleClick('/empresa')}
        >
          Empresa
        </a>
        <a
          className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-300 w-28"
          onClick={() => void handleClick('/servicos')}
        >
          Serviços
        </a>
        <a
          className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-300 w-28"
          onClick={() => void handleClick('/contato')}
        >
          Contato
        </a>
      </nav>
    </section>
  );
};
