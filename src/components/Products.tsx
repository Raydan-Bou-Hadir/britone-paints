import { useState } from "react";
import { useProductGroupStore } from "../store.ts/ProductGroup";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
        <section className="w-full bg-gradient-to-br from-[#F2F8FF] via-white to-[#FFF5F5] py-24">
            <div className="flex flex-col gap-6 items-center justify-center text-center pb-10">
                <h2 className="header">Our Products</h2>
                <p className="sub-header">Discover our comprehensive range of high-quality paint solutions</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <h3 className="container-header">Featured Products</h3>
                <div className="flex flex-row justify-center gap-6 w-[75%]">
                    <button
                        onClick={handlePrev}
                        className="navy-blue hover:text-[#960000] cursor-pointer disabled:opacity-50 disabled:cursor-default disabled:text-[#000000]"
                        disabled={startIndex === 0}
                        >
                        <MdKeyboardArrowLeft size={32} className="border border-zinc-400 rounded bg-white shadow-sm"/>
                    </button>
                    <div className="grid grid-cols-4 gap-6">
                        {visibleGroups.map((item) => (
                            <div className="product-card hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                <img src={item.productImage} alt={item.productName} className="w-full h-60 rounded-lg object-cover" />
                                <h4 className="text-md font-semibold mt-2">{item.productName}</h4>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="navy-blue hover:text-[#960000] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-default disabled:text-[#000000]"
                        disabled={startIndex + itemsPerPage >= productGroup.length}
                        >
                        <MdKeyboardArrowRight size={32} className="border border-zinc-400 rounded bg-white shadow-sm"/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;