import { RiDoubleQuotesR } from 'react-icons/ri';

const AboutUs = () => {
  return (
    <section className='bg-[#EFF2F5] py-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-10 px-4 lg:px-8'>
          <div className='flex flex-col gap-6 items-center justify-center text-center pb-2'>
            <h2 className='header'>About Us</h2>
            <p className='sub-header'>
              Building trust through quality and innovation since 2001
            </p>
          </div>
          <div id='who-we-are' className='about-us-container p-6 md:p-10'>
            <h3 className='container-header'>Who We Are</h3>
            <div className='flex flex-col gap-4 max-w-none '>
              <p className='container-text'>
                Founded in 2001, National Paint Industries (NPI) brings over 25
                years of expertise in the production and distribution of paints
                across West Africa. NPI Liberia, the third factory in the
                region, was established in response to strong customer demand
                for Britone Paint—a trusted brand renowned for its lasting
                quality and performance.
              </p>
              <p className='container-text'>
                Our growth has been fueled by the superior quality of our
                products and an unwavering commitment to customer satisfaction.
                Before NPI's establishment in Liberia, Britone Paint had been
                imported into the country for many years. The decision to open a
                local factory was driven by the brand's loyal customer base and
                their encouragement to make Britone more accessible.
              </p>
              <p className='container-text'>
                Britone's high-performance formulations have made it a market
                leader in several African countries. Today, we uphold the same
                high standards by sourcing premium raw materials from leading
                European suppliers. Our continued success reflects our
                dedication to quality, innovation, and meeting the evolving
                needs of our customers.
              </p>
            </div>
          </div>
          <div className='about-us-special-container flex flex-col lg:flex-row lg:p-10 lg:gap-4 sm:gap-2 p-6'>
            {/* Image */}
            <div className='w-32 sm:w-40 lg:w-[30%] lg:h-full mx-auto lg:mx-0 rounded-full border-4 border-gray-400/50 p-2 sm:p-3'>
              <img
                src='./src/assets/ceo-sergio.jpg'
                alt='CEO'
                className='w-full shadow-[0_0_50px_rgba(0,0,0,0.2)] shadow-gray-300 rounded-full'
              />
            </div>

            {/* Content */}
            <div className='w-full lg:w-[70%] flex flex-col gap-6'>
              {/* Quote Header */}
              <div className='flex flex-col gap-2 items-center lg:items-start text-center lg:text-left'>
                <i className='text-[#ffffffe2] text-4xl sm:text-5xl lg:text-5xl'>
                  <RiDoubleQuotesR />
                </i>
                <h3 className='text-white text-2xl sm:text-2xl lg:text-3xl font-bold'>
                  Sergio La Torre
                </h3>
                <div className='flex flex-row items-center justify-center lg:pl-1 lg:justify-start gap-1'>
                  <p className='text-white text-sm sm:text-sm lg:text-base'>
                    Chief Executive Officer
                  </p>
                </div>
              </div>

              {/* Quote Text */}
              <div className='px-4 py-2 border-l-[3px] border-[#a10212]'>
                <p className='text-white text-sm sm:text-base lg:text-base'>
                  "With a legacy built on intelligence, integrity, and passion,
                  I lead Britone Paints into the future by honoring its
                  innovative past. Under our leadership, Britone continues to
                  grow as a dynamic, forward-thinking leader in the paint
                  industry."
                </p>
              </div>

              {/* Footer line */}
              <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-2'>
                <span className="relative before:content-[''] before:block before:w-full lg:before:w-[250px] before:h-[0.5px] before:bg-[#cccacbd8] before:align-middle"></span>
                <p className='text-[#cccacb] text-sm tracking-wider text-center lg:text-base'>
                  LEADERSHIP
                </p>
                <span className="relative before:content-[''] before:block before:w-full lg:before:w-[250px] before:h-[0.5px] before:bg-[#cccacbd8] before:align-middle"></span>
              </div>
            </div>
          </div>

          <div id='our-mission' className='about-us-container p-6 md:p-10'>
            <h3 className='container-header'>Our Mission</h3>
            <div className='flex flex-col gap-4 max-w-none '>
              <p className='container-text'>
                Our mission at Britone is to create high-quality, durable, and
                innovative paint solutions that bring lasting beauty and
                protection to every surface. We are committed to making colour
                accessible, sustainable, and meaningful, empowering individuals,
                builders, and communities to express identity, improve living
                environments, and drive progress.
              </p>
              <p className='container-text'>
                Through continuous innovation, responsible manufacturing, and
                strong local partnerships, we aim to enrich lives and contribute
                to the social and economic growth of the regions we serve.
              </p>
            </div>
          </div>
          <div id='our-vision' className='about-us-container p-6 md:p-10'>
            <h3 className='container-header'>Our Vision</h3>
            <div className='flex flex-col gap-4 max-w-none'>
              <p className='container-text'>
                To be the most trusted and innovative paint manufacturer in West
                Africa, setting the standard for quality, sustainability, and
                customer satisfaction. We envision a future where Britone Paints
                is synonymous with excellence, transforming spaces and inspiring
                communities across the continent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
