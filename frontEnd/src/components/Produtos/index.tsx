/* eslint-disable @next/next/no-img-element */
const ListProduct = () => {
  const products = [
    {
      id: 1,
      name: 'Nero Limpa Pisos 5l',
      description:
        'Este Produto é Especial, Limpa Seu Piso Encardido Com Facilidade.',
      price: 150,
      image: '/assets/limpa.png',
    },
    {
      id: 2,
      name: 'Nero Limpa Pedras 5l',
      description:
        'Limpa Pedra Encardida (Miracema, Portuguesa, São tomé) Com Facilidade. Você Alcançará Um Exelente Resultado!',
      price: 150,
      image: '/assets/limpa1.png',
    },
    {
      id: 3,
      name: 'Nero Limpa Pisos 1l',
      description:
        'Embalagem Economica Para Pequenos Reparos ou Testes de Eficacia do Produto',
      price: 40,
      image: '/assets/limpapiso1l.png',
    },
    {
      id: 4,
      name: 'Nero Limpa Pedras 1l',
      description:
        'Embalagem Economica Para Pequenos Reparos ou Testes de Eficacia do Produto',
      price: 40,
      image: '/assets/limpa1l.png',
    },
    {
      id: 5,
      name: 'Nero Aromatizante',
      description:
        'Deixa Seu Ambiente Com o Cheiro Agradavél Durante Dias. Utilizar em Estofados',
      price: 49.9,
      image: '/assets/buque.png',
    },
    {
      id: 6,
      name: 'Nero Tira Manchas',
      description:
        'Está Com Aquela Manchinha Desagradável No Seu estofado? Esse Produto Resolve Seu Problema',
      price: 59.9,
      image: '/assets/mancha.png',
    },
    {
      id: 7,
      name: 'Mascara Respirador 1/4 Facial',
      description:
        'TAMANHO: Único Compõe 1 Mascara e 1 Cartucho ALLTEC CMC Filtro Químico, Vapores Orgânicos e Gases Ácidos',
      price: 49.9,
      image: '/assets/mascara.png',
    },
    {
      id: 8,
      name: 'Luva NeoLátex Com Reforço CA 5774',
      description:
        'Luva De Segurança Confeccionada em látex (Borracha Natural) e Policloropreno (Neoprene) Na Palma e Dorso.',
      price: 24.8,
      image: '/assets/luva.png',
    },
  ];
  return (
    <div className="grid desktop:grid-cols-4 xsm:grid-cols-1 laptop:grid-cols-2 gap-4 pt-20">
      {products.map((product) => (
        <div key={product.id} className=" p-2 rounded-lg shadow">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-md mb-4 mx-auto"
            width={200}
            height={200}
          />
          <div className="font-bold flex justify-center">{product.name}</div>
          <div className="flex justify-center">
            R$ {product.price.toFixed(2)}
          </div>
          <p className="flex text-center" key={product.id}>
            {product.description}
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center mx-auto">
            <a
              className="flex justify-center mx-10"
              href="https://api.whatsapp.com/send/?phone=5519982348981&text&type=phone_number&app_absent=0"
            >
              COMPRAR
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};
export default ListProduct;
