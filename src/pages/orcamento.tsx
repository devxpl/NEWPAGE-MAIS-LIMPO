import { useState } from 'react';

const ContactForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const destinatario = 'afonsobachelli@gmail.com';
    const assunto = 'Novo Cliente';
    const mensagem = `Nome: ${nome}\nEmail: ${email}\nWhatsApp: ${whatsapp}`;

    fetch('/api/enviar-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinatario,
        assunto,
        mensagem,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Mensagem enviada com sucesso!');
        setNome('');
        setEmail('');
        setWhatsapp('');
      })
      .catch((error) => {
        console.error(error);
        alert(
          'Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
        );
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="mb-5 w-64 flex justify-center mx-auto">
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
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
