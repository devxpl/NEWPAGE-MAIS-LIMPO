import { useState } from 'react';

const Form = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      name: nome,
      phone: whatsapp,
      email: email,
      message: mensagem,
    };

    if (typeof window !== 'undefined') {
      fetch('http://localhost:3001/emails/emailSend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert('Mensagem enviada com sucesso!');
          setNome('');
          setEmail('');
          setWhatsapp('');
          setMensagem('');
        })
        .catch((error) => {
          console.error(error);
          alert(
            'Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
          );
        });
    }
  };

  return (
    <>
      <section>
        <h1 className=" flex justify-center relative z-20 xsm:mt-36 desktop:mt-5 font-mono border-l-slate-950 text-2xl">
          Faça Agora Seu Orçamento!
        </h1>
      </section>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4 mt-28  w-64 flex justify-center mx-auto">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="nome">
            Nome:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nome"
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>
        <div className="mb-4  w-64 flex justify-center mx-auto">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-5 w-64 flex justify-center mx-auto ">
          <label
            className="block text-gray-700 font-bold mb-1"
            htmlFor="whatsapp"
          >
            WhatsApp:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="whatsapp"
            type="text"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mensagem"
            className="text-gray-700 text-sm font-bold mb-2 flex justify-center mx-auto"
          >
            Digite sua mensagem:
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={3}
            className="shadow appearance-none border rounded flex justify-center mx-auto w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-300"
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
