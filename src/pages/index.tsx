import { Slider } from '~/components/slider';

const Home = () => {
  return (
    <>
      <section className="flex justify-center h-screen ">
        <div className="bg-gray-200 h-200 fixed top-0 left-0 w-full">
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Home;
