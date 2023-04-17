/* eslint-disable @next/next/no-img-element */
const Produtos = () => {
  const products = [
    {
      id: 1,
      name: 'Produto 1',
      price: 10,
      image: '/assets/1.png',
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 20,
      image: '/assets/2.png',
    },
    {
      id: 3,
      name: 'Produto 3',
      price: 30,
      image: '/assets/3.png',
    },
    {
      id: 4,
      name: 'Produto 4',
      price: 40,
      image: '/assets/4.png',
    },
    {
      id: 5,
      name: 'Produto 5',
      price: 50,
      image: '/assets/5.png',
    },
    {
      id: 6,
      name: 'Produto 6',
      price: 60,
      image: '/assets/6.png',
    },
    {
      id: 7,
      name: 'Produto 7',
      price: 70,
      image: '/assets/7.png',
    },
    {
      id: 8,
      name: 'Produto 8',
      price: 80,
      image: '/assets/8.png',
    },
    {
      id: 9,
      name: 'Produto 9',
      price: 90,
      image: '/assets/9.png',
    },
    {
      id: 10,
      name: 'Produto 10',
      price: 100,
      image: '/assets/10.png',
    },
  ];

  return (
    <div className="grid desktop:grid-cols-4 xsm:grid-cols-1 laptop:grid-cols-2 gap-4 pt-20">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow">
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

export default Produtos;
