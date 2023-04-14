import { useState, useEffect } from 'react';
import Image from 'next/image';

type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = [
    {
      id: 1,
      image: '/assets/slide-1.jpg',
      title: 'Slide 1',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      image: '/assets/slide-2.jpg',
      title: 'Slide 2',
      subtitle: 'Consectetur adipiscing elit',
    },
    {
      id: 3,
      image: '/assets/slide-3.jpg',
      title: 'Slide 3',
      subtitle: 'Praesent mollis lacus at nibh',
    },
  ];

  useEffect(() => {
    const handleNextSlide = () => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    };
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            slide.id === currentSlide + 1 ||
            (slide.id === 1 && currentSlide === slides.length - 1)
              ? 'opacity-100'
              : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            width={1000}
            height={50}
            className=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-20" />
          <div className="absolute bottom-0 left-0 p-4 text-white z-30">
            <h2 className="text-3xl font-bold">{slide.title}</h2>
            <p className="text-lg">{slide.subtitle} </p>
          </div>
        </div>
      ))}
    </div>
  );
};
