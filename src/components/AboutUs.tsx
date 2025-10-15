import { RiDoubleQuotesR } from "react-icons/ri";

const AboutUs = () => {
    return (
        <section className="bg-[#EFF2F5] py-24">
            <div className="flex flex-col justify-center items-center gap-10 px-4 lg:px-8">
                <div className="flex flex-col gap-6 items-center justify-center text-center pb-2">
                    <h2 className="header navy-blue">About Us</h2>
                    <p className="sub-header">Building trust through quality and innovation since 2001</p>
                </div>
                <div className="about-us-container p-6 md:p-10">
                    <h3 className="container-header">Who We Are</h3>
                    <div className="flex flex-col gap-4 max-w-none ">
                        <p className="container-text">
                            Founded in 2001, National Paint Industries (NPI) brings over 25 years of expertise in the production
                            and distribution of paints across West Africa. NPI Liberia, the third factory in the region, was
                            established in response to strong customer demand for Britone Paint—a trusted brand renowned for its
                            lasting quality and performance.
                        </p>
                        <p className="container-text">
                            Our growth has been fueled by the superior quality of our products and an unwavering commitment to
                            customer satisfaction. Before NPI's establishment in Liberia, Britone Paint had been imported into
                            the country for many years. The decision to open a local factory was driven by the brand's loyal
                            customer base and their encouragement to make Britone more accessible.
                        </p>
                        <p className="container-text">
                            Britone's high-performance formulations have made it a market leader in several African countries.
                            Today, we uphold the same high standards by sourcing premium raw materials from leading European
                            suppliers. Our continued success reflects our dedication to quality, innovation, and meeting the
                            evolving needs of our customers.
                        </p>
                    </div>
                </div>
                <div className="about-us-special-container gap-4 p-6 md:p-10">
                    <div className="w-[30%] rounded-full border-4 border-gray-400/50 p-3">
                        <img src="src/assets/ceo-sergio.jpg" alt="CEO" className="w-full shadow-[0_0_50px_rgba(0,0,0,0.2)] shadow-gray-300 mx-auto rounded-full" />
                    </div>
                    <div className="w-[70%] flex flex-col gap-6">
                        <div className="flex flex-col gap-2 items-start ">
                            <i className="text-[#ffffffe2] text-5xl"><RiDoubleQuotesR /></i>
                            <h3 className="text-white text-3xl font-bold">Sergio La Torre</h3>
                            <div className="flex flex-row items-center gap-1">
                                <span className="relative before:content-[''] before:block 
                                    before:w-8 before:h-[2px] before: bg-dark-red 
                                    before:align-middle mx-1">
                                </span>
                                <p className="text-white text-sm">
                                    Chief Executive Officer
                                </p>
                            </div>
                        </div>
                        <div className="px-4 py-2 border-l-[3px] border-[#a10212]">
                            <p className="text-white">"With a legacy built on intelligence, integrity, and passion, I lead Britone Paints into the
                                future by honoring its innovative past. Under our leadership, Britone continues to grow as
                                a dynamic, forward-thinking leader in the paint industry."
                            </p>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                            <span className="relative before:content-[''] before:block 
                                before:w-[270px] before:h-[0.5px] before: bg-[#cccacbd8] 
                                before:align-middle">
                            </span>
                            <p className="text-[#cccacb] text-sm tracking-wider">LEADERSHIP</p>
                            <span className="relative before:content-[''] before:block 
                                before:w-[270px] before:h-[0.5px] before: bg-[#cccacbd8] 
                                before:align-middle">
                            </span>
                        </div>
                    </div>
                </div>
                <div className="about-us-container p-6 md:p-10">
                    <h3 className="container-header">Our Mission</h3>
                    <div className="flex flex-col gap-4 max-w-none ">
                        <p className="container-text">
                            Our mission at Britone is to create high-quality, durable, and innovative paint solutions that
                            bring lasting beauty and protection to every surface. We are committed to making colour accessible,
                            sustainable, and meaningful, empowering individuals, builders, and communities to express identity,
                            improve living environments, and drive progress.
                        </p>
                        <p className="container-text">
                            Through continuous innovation, responsible manufacturing, and strong local partnerships,
                            we aim to enrich lives and contribute to the social and economic growth of the regions
                            we serve.
                        </p>
                    </div>
                </div>
                <div className="about-us-container p-6 md:p-10">
                    <h3 className="container-header">Our Vision</h3>
                    <div className="flex flex-col gap-4 max-w-none">
                        <p className="container-text">
                            To be the most trusted and innovative paint manufacturer in West Africa, setting the standard
                            for quality, sustainability, and customer satisfaction. We envision a future where Britone
                            Paints is synonymous with excellence, transforming spaces and inspiring communities across
                            the continent.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs