import { useState } from "react";
import { useFeaturedProductsStore } from "../store.ts/FeaturedProductsStore";
import type { Product } from "../store.ts/ProductsInterface";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LuSparkles, LuPaintbrush, LuFactory, LuPalette   } from "react-icons/lu";
import { useDecorativeProductsStore } from "../store.ts/DecorativeProductsStore";
import { useIndustrialProductsStore } from "../store.ts/IndustrialProductsStore";
import { useColorProductsStore } from "../store.ts/ColorProductsStore";

interface ProductCarouselProps {
  products: Product[];
}

function ProductCarousel({ products }: ProductCarouselProps) {
    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + itemsPerPage, products.length - itemsPerPage));
    };

    const visibleGroups = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            <button
            onClick={handlePrev}
            className="navy-blue cursor-pointer disabled:opacity-50 disabled:cursor-default disabled:text-[#000000]" 
            disabled={startIndex === 0}
            >
            <MdKeyboardArrowLeft
                size={32}
                className="border border-zinc-400 rounded bg-white shadow-sm hover:text-white hover:bg-[#960000]"
            />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 flex-1">
            {visibleGroups.map((item, index) => (
                <div
                key={index}
                onClick={() => navigate(`/product/${item.id}`)}
                className="product-card hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                <div className=" bg-secondary/30">
                    <img
                    src={item.productImage || "./placeholder.svg"}
                    alt={item.productName}
                    className="object-cover rounded-lg w-full h-full"
                    />
                </div>
                <h4 className="navy-blue font-semibold text-lg text-center mt-2">
                    {item.productName}
                </h4>
                </div>
            ))}
            </div>

            <button
            onClick={handleNext}
            className="navy-blue transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-default disabled:text-[#000000]"
            disabled={startIndex + itemsPerPage >= products.length}
            >
            <MdKeyboardArrowRight
                size={32}
                className="border border-zinc-200 rounded bg-white shadow-sm hover:text-white hover:bg-[#960000]"
            />
            </button>
        </div>
    );
}

function Products() {
  const featuredProducts = useFeaturedProductsStore((state) => state.productGroup);
  const decorativeProducts = useDecorativeProductsStore((state) => state.productGroup);
  const industrialProducts = useIndustrialProductsStore((state) => state.productGroup);
  const colorProducts = useColorProductsStore((state) => state.productGroup);

    return (
        <section id="products" className="flex flex-col gap-12 py-24 bg-gradient-to-br from-blue-50 via-white to-red-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="navy-blue text-4xl md:text-5xl font-bold mb-4 text-balance">Our Products</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">Discover our comprehensive range of high-quality paint solutions</p>
                </div>

                <div className="space-y-20">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-full">
                                <LuSparkles size={20} className="text-white"/>
                                <h3 className="text-2xl font-bold text-white">Featured Products</h3>
                            </div>
                            <div className="flex-1 h-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
                        </div>
                        <ProductCarousel products={featuredProducts} />
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col justify-center gap-8 px-4">
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    <div className="flex flex-col gap-3 lg:w-[65%] rounded-full pl-6">
                        <div className="flex flex-row items-center gap-2">
                            <LuPaintbrush size={24} className="navy-blue"/>
                            <h4 className="text-2xl font-bold navy-blue">Decorative Products</h4>
                        </div>
                        <p className="text-[14px] leading-relaxed text-muted-foreground">BRITONE offers a complete range of products in the field of decorative paints, which includes
                            water-based paints, solvent-based paints and solvent-free coatings. These products are used
                            for the inside and outside to decorate and protect the surface. The BRITONE paint is used
                            for residential buildings, hotels, theaters, restaurants, hospitals, shopping centers,
                            sports complexes.
                        </p>
                    </div>
                </div>
                <ProductCarousel products={decorativeProducts} />
            </div>
            <div className="container mx-auto flex flex-col justify-center gap-8 px-4">
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                    <div className="flex flex-col gap-3 lg:w-[65%] rounded-full pl-6">
                        <div className="flex flex-row items-center gap-2">
                            <LuFactory size={24} className="dark-red"/>
                            <h4 className="text-2xl font-bold dark-red">Industrial Products</h4>
                        </div>
                        <p className="text-[14px] leading-relaxed text-muted-foreground">The painting BRITONE offers quality solutions
                            to improve, beautify and protect your buildings. Our wide range of products is specially made for the sole
                            purpose of exercising to cheer you in the industry. Our paints are used as high-performance coatings for
                            various installations. BRITONE has developed a variety of Products for coating applications of all materials.
                        </p>
                    </div>
                </div>
                <ProductCarousel products={industrialProducts} />
            </div>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="space-y-20">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center gap-3 bg-gradient-to-r from-accent to-primary px-6 py-2 rounded-full">
                                <LuPalette size={20} className="text-white"/>
                                <h3 className="text-2xl font-bold text-white">Color Chart</h3>
                            </div>
                            <div className="flex-1 h-1 bg-gradient-to-r from-accent/30 to-transparent rounded-full"></div>
                        </div>
                        <ProductCarousel products={colorProducts} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;