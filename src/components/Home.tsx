import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowRoundDown } from 'react-icons/io';

const Home = () => {
  return (
    <section id='home' className='w-full h-screen'>
      <div
        className='relative w-full h-full flex flex-col justify-between px-12 bg-cover bg-center'
        style={{
          backgroundImage: "url('./src/assets/products/hero-paint.jpg')",
        }}
      >
        <div className='absolute inset-0 bg-white/90 opacity-90 z-0'></div>
        <div className='container mx-auto h-[95%] '>
          <div className='relative flex flex-col justify-center items-start h-full max-w-3xl gap-6 md:max-w-xl'>
            <h1 className='navy-blue text-5xl lg:text-7xl font-bold text-balance md:text-6xl'>
              The Everlasting Tones of Brightness
            </h1>
            <p className='text-2xl text-pretty leading-relaxed text-gray-500 md:text-xl'>
              Over 25 years of expertise in paint production and distribution
              across West Africa. Trusted quality, lasting performance.
            </p>
            <div className='flex flex-row gap-4 items-start'>
              <a
                href='#products'
                className='flex items-center gap-2 bg-navy-blue text-white text-md rounded-md font-medium px-4 py-2 transition hover:opacity-80'
              >
                Explore Our Products
                <span className='text-[12px]'>
                  <FaArrowRight />
                </span>
              </a>
              <a
                href='#contact-us'
                className='font-medium navy-blue px-6 py-2 text-md border border-gray-300 rounded-md transition btn-hover hover:text-white cursor-pointer'
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className='relative flex flex-col gap-1 items-center justify-center animate-bounce'>
            <p className='text-sm text-gray-600'>SCROLL DOWN</p>
            <IoIosArrowRoundDown className='text-3xl text-gray-600' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
