import { RiDoubleQuotesR } from "react-icons/ri";

const AboutUs = () => {
    return (
        <section className="bg-[#eff2f5] py-24">
            <div className="container flex flex-col gap-10 mx-auto px-4 lg:px-8">
                <div className="flex flex-col gap-6 items-center justify-center text-center pb-2">
                    <h2 className="header">About Us</h2>
                    <p className="sub-header">Building trust through quality and innovation since 2001</p>
                </div>
                <div className="card p-6 md:p-10">
                    <h3 className="text-3xl font-bold mb-6 text-primary">Who We Are</h3>
                    <div className="flex flex-col gap-4 max-w-none ">
                        <p className="card-text">
                            Founded in 2001, National Paint Industries (NPI) brings over 25 years of expertise in the production
                            and distribution of paints across West Africa. NPI Liberia, the third factory in the region, was
                            established in response to strong customer demand for Britone Paint—a trusted brand renowned for its
                            lasting quality and performance.
                        </p>
                        <p className="card-text">
                            Our growth has been fueled by the superior quality of our products and an unwavering commitment to
                            customer satisfaction. Before NPI's establishment in Liberia, Britone Paint had been imported into
                            the country for many years. The decision to open a local factory was driven by the brand's loyal
                            customer base and their encouragement to make Britone more accessible.
                        </p>
                        <p className="card-text">
                            Britone's high-performance formulations have made it a market leader in several African countries.
                            Today, we uphold the same high standards by sourcing premium raw materials from leading European
                            suppliers. Our continued success reflects our dedication to quality, innovation, and meeting the
                            evolving needs of our customers.
                        </p>
                    </div>
                </div>
                <div className="special-card flex flex-row gap-4 p-6 md:p-10">
                    <div className="w-[30%]"></div>
                    <div className="w-[70%] flex flex-col gap-6">
                        <div className="flex flex-col gap-2 items-start ">
                            <i className="text-white text-5xl"><RiDoubleQuotesR /></i>
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
                        <div className="flex flex-row items-center gap-1">
                            <span className="relative before:content-[''] before:block 
                                before:w-2 before:h-[2px] before: bg-dark-red 
                                before:align-middle mx-1">
                            </span>
                            <p>LEADERSHIP</p>
                            <span className="relative before:content-[''] before:block 
                                before:w-2 before:h-[2px] before: bg-dark-red 
                                before:align-middle mx-1">
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card p-6 md:p-10">
                    <h3 className="text-3xl font-bold mb-6 text-primary">Our Mission</h3>
                    <div className="flex flex-col gap-4 max-w-none ">
                        <p className="card-text">
                            Our mission at Britone is to create high-quality, durable, and innovative paint solutions that
                            bring lasting beauty and protection to every surface. We are committed to making colour accessible,
                            sustainable, and meaningful, empowering individuals, builders, and communities to express identity,
                            improve living environments, and drive progress.
                        </p>
                        <p className="card-text">
                            Through continuous innovation, responsible manufacturing, and strong local partnerships,
                            we aim to enrich lives and contribute to the social and economic growth of the regions
                            we serve.
                        </p>
                    </div>
                </div>
                <div className="card p-6 md:p-10">
                    <h3 className="text-3xl font-bold mb-6 text-primary">Our Vision</h3>
                    <div className="flex flex-col gap-4 max-w-none">
                        <p className="card-text">
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