import { useState } from "react";
import { useProductGroupStore } from "../store.ts/ProductGroup";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";

function Products() {
  const productGroup = useProductGroupStore((state) => state.productsGroups);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + itemsPerPage, productGroup.length - itemsPerPage));
  };

  const visibleGroups = productGroup.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section id="products" className="py-24 bg-gradient-to-br from-blue-50 via-white to-red-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="navy-blue text-4xl md:text-5xl font-bold mb-4 text-balance">Our Products</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">Discover our comprehensive range of high-quality paint solutions</p>
                </div>

                <div className="space-y-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-full">
                            <LuSparkles size={20} className="text-white"/>
                            <h3 className="text-2xl font-bold text-white">Featured Products</h3>
                        </div>
                        <div className="flex-1 h-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-10">
                        <button
                            onClick={handlePrev}
                            className="navy-blue cursor-pointer disabled:opacity-50 disabled:cursor-default disabled:text-[#000000]"
                            disabled={startIndex === 0}
                            >
                            <MdKeyboardArrowLeft size={32} className="border border-zinc-400 rounded bg-white shadow-sm hover:text-white hover:bg-[#960000]"/>
                        </button>
                        <div className="grid grid-cols-4 gap-8">
                            {visibleGroups.map((item) => (
                                <div className="product-card hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                    <div className="h-[280px] bg-secondary/30">
                                        <img src={item.productImage || "./placeholder.svg"} alt={item.productName} className="object-cover rounded-lg" />
                                    </div>
                                    <h4 className="font-semibold text-lg text-center text-primary">{item.productName}</h4>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleNext}
                            className="navy-blue transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-default disabled:text-[#000000]"
                            disabled={startIndex + itemsPerPage >= productGroup.length}
                            >
                            <MdKeyboardArrowRight size={32} className="border border-zinc-200 rounded bg-white shadow-sm hover:text-white hover:bg-[#960000]"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;