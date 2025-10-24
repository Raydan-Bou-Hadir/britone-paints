import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '../components/ui/card';

import { useFeaturedProductsStore } from '../store.ts/FeaturedProductsStore';
import { useDecorativeProductsStore } from '../store.ts/DecorativeProductsStore';
import { useIndustrialProductsStore } from '../store.ts/IndustrialProductsStore';
import { useColorProductsStore } from '../store.ts/ColorProductsStore';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const scrollToProducts = () => {
    // Navigate to home
    navigate('/', { replace: false });

    // Wait a tick to ensure the DOM renders
    setTimeout(() => {
      const element = document.getElementById('products');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const featured = useFeaturedProductsStore((state) => state.productGroup);
  const decorative = useDecorativeProductsStore((state) => state.productGroup);
  const industrial = useIndustrialProductsStore((state) => state.productGroup);
  const color = useColorProductsStore((state) => state.productGroup);

  const allProducts = [...featured, ...decorative, ...industrial, ...color];

  const productIndex = allProducts.findIndex((p) => String(p.id) === id);
  const product = allProducts[productIndex];

  if (!product)
    return (
      <div className='text-center py-20 text-red-500 font-medium'>
        Product not found
      </div>
    );

  // Get previous and next products
  const previousProduct =
    productIndex > 0 ? allProducts[productIndex - 1] : null;
  const nextProduct =
    productIndex < allProducts.length - 1
      ? allProducts[productIndex + 1]
      : null;

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header with Logo */}
      <header className='bg-background border-b sticky top-0 z-50'>
        <div className='container mx-auto px-4 lg:px-8 py-4'>
          <Link to='/#products'>
            <img
              src='/src/assets/britone-paints-logo.png'
              alt='Britone Paints'
              width={180}
              height={60}
              className='h-12 w-auto'
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1 py-12'>
        <div className='container mx-auto px-4 lg:px-8'>
          {/* Back Button */}
          <Link
            to='/'
            onClick={(e) => {
              e.preventDefault();
              scrollToProducts();
            }}
          >
            <Button
              variant='outline'
              className='navy-blue mb-8 bg-transparent cursor-pointer hover:bg-dark-red'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Products
            </Button>
          </Link>

          <div className='grid md:grid-cols-2 gap-12 mb-12'>
            {/* Product Image */}
            <div className='relative aspect-square rounded-lg overflow-hidden bg-secondary/30'>
              <img
                src={product.productImage || '/placeholder.svg'}
                alt={product.productName}
                className='object-cover w-full h-full'
              />
            </div>

            {/* Product Information */}
            <div className='space-y-6'>
              <h1 className='text-4xl font-bold mb-4 navy-blue'>
                {product.productName}
              </h1>

              <Card>
                <CardContent className='p-6'>
                  <h2 className='text-xl font-semibold mb-3 navy-blue'>
                    Product Details
                  </h2>
                  <p className='text-muted-foreground leading-relaxed'>
                    {product.productDescription}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h2 className='text-xl font-semibold mb-3 navy-blue'>
                    Features
                  </h2>
                  <ul className='space-y-2'>
                    {product.productFeatures?.map((feature, index) => (
                      <li key={index} className='flex items-start gap-2'>
                        <Check className='h-5 w-5 text-primary mt-0.5 flex-shrink-0 navy-blue' />
                        <span className='text-muted-foreground'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className='grid grid-cols-2 gap-4'>
                <Card>
                  <CardContent className='p-6'>
                    <h3 className='font-semibold mb-2 text-sm text-muted-foreground'>
                      Finish
                    </h3>
                    <p className='text-lg font-medium navy-blue'>
                      {product.productFinish}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className='p-6'>
                    <h3 className='font-semibold mb-2 text-sm text-muted-foreground'>
                      Color
                    </h3>
                    <p className='text-lg font-medium navy-blue'>
                      {product.productColor}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className='flex justify-between items-center border-t pt-8'>
            {previousProduct ? (
              <Link to={`/product/${previousProduct.id}`}>
                <Button variant='outline' size='lg' className='cursor-pointer'>
                  <ChevronLeft className='mr-2 h-5 w-5' />
                  Previous: {previousProduct.productName}
                </Button>
              </Link>
            ) : (
              <div />
            )}

            {nextProduct ? (
              <Link to={`/product/${nextProduct.id}`}>
                <Button variant='outline' size='lg' className='cursor-pointer'>
                  Next: {nextProduct.productName}
                  <ChevronRight className='ml-2 h-5 w-5' />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
