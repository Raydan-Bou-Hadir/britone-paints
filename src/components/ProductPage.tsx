import { useParams, Link } from "react-router-dom";
import { useFeaturedProductsStore } from "../store.ts/FeaturedProductsStore";
import { useDecorativeProductsStore } from "../store.ts/DecorativeProductsStore";
import { useIndustrialProductsStore } from "../store.ts/IndustrialProductsStore";
import { useColorProductsStore } from "../store.ts/ColorProductsStore";

export default function ProductPage() {
  const { id } = useParams();

  const featured = useFeaturedProductsStore((state) => state.productGroup);
  const decorative = useDecorativeProductsStore((state) => state.productGroup);
  const industrial = useIndustrialProductsStore((state) => state.productGroup);
  const color = useColorProductsStore((state) => state.productGroup);

  const allProducts = [...featured, ...decorative, ...industrial, ...color];

  const product = allProducts.find((p) => String(p.id) === id);

  if (!product) return <div className="text-center py-20 text-red-500">Product not found</div>;

  return (
    <section className="min-h-screen flex flex-col w-full">
      <header className="bg-background border-b">
        <div className="container mx-auto border-b px-4 lg:px-8 py-4">
          <Link to="/" className="h-full w-full">
            <img
              src="../src/assets/britone-paints-logo.png"
              alt="Britone Paints Logo"
              width={180}
              height={60}
              className="h-12 w-auto">
            </img>
          </Link>
        </div>
      </header>
    </section>
  );
};