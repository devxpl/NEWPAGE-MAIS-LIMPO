const MainPage = () => {
  // Array de mini vídeos
  const miniVideos = [
    {
      descricao: 'Oi',
      video: '/assets/DIVULGA.mp4',
    },
  ];
  // Componente principal
  return (
    <>
      {/* Seção principal */}
      <section className="flex h-screen w-screen desktop:h-1/2">
        {/* Conteúdo */}
        <div className="mx-auto max-w-7xl mt-10 px-4 sm:px-6 lg:px-8 pt-10">
          {/* Título */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-10 flex justify-center">
            Bem-vindo!
          </h1>
          {/* Descrição */}
          <p className="text-lg text-black font-mono">
            Oferecemos serviços de limpeza pós-obra e higienização de estofados
            para garantir que seu ambiente esteja sempre limpo, saudável e
            seguro. Nossa equipe experiente utiliza técnicas avançadas e
            produtos de alta qualidade para garantir a satisfação de nossos
            clientes. Conte conosco para deixar sua casa ou escritório
            impecáveis!
          </p>
          {/* Mini vídeos */}
          <div className="grid desktop:grid-cols-1">
            {miniVideos.map((miniVideo) => (
              <div
                key={miniVideo.descricao}
                className="border p-1 shadow flex justify-center"
              >
                <video
                  src={miniVideo.video}
                  className="rounded-md"
                  width={400}
                  height={400}
                  autoPlay
                  loop
                />
              </div>
            ))}
          </div>
          {/* Botão do WhatsApp */}
          <div className="flex justify-center mt-5">
            <div className="bg-green-500 rounded-full py-2 px-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5519982348981&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white font-bold">WHATS APP</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
