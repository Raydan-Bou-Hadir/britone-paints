import { create } from 'zustand';
import type { ProductStoreState } from './ProductsInterface';

export const useIndustrialProductsStore = create<ProductStoreState>(() => ({
    productGroup: [
        {
            id: 1,
            productName: 'Premium Interior Paint',
            productId: 'PIP001',
            productImage: '/src/assets/products/product-number-one.jpg',
            productDescription: 'A high-quality interior paint that provides excellent coverage and durability.',
            productColor: 'White',
            productFinish: 'Matte',
            productFeatures: ['Low VOC', 'Easy to clean', 'Mildew resistant']
        },
        {
            id: 2,
            productName: 'Anti Rust Paint',
            productId: 'EWP002',
            productImage: 'src/assets/products/anti-rust-paint-can.jpg',
            productDescription: 'Durable exterior paint designed to withstand harsh weather conditions.',
            productColor: 'Blue',
            productFinish: 'Satin',
            productFeatures: ['UV resistant', 'Waterproof', 'Fade resistant']
        },
        {
            id: 3,
            productName: 'Blackboard Paint',
            productId: 'EFP003',
            productImage: '/src/assets/products/blackboard-paint-can.jpg',
            productDescription: 'An environmentally friendly paint option with low environmental impact.',
            productColor: 'Green',
            productFinish: 'Eggshell',
            productFeatures: ['Low odor', 'Non-toxic', 'Recyclable packaging']
        },
        {
            id: 4,
            productName: 'Enamel Paint',
            productId: 'HGE004',
            productImage: '/src/assets/products/enamel-paint-can.jpg',
            productDescription: 'A high-gloss enamel paint that provides a shiny, durable finish.',
            productColor: 'Red',
            productFinish: 'High Gloss',
            productFeatures: ['Scratch resistant', 'Easy to apply', 'Fast drying']
        },
        {
            id: 5,
            productName: 'Wood Stain',
            productId: 'WDP005',
            productImage: '/src/assets/products/wood-stain-can.jpg',
            productDescription: 'A premium wood paint that enhances the natural beauty of wood while providing long-lasting protection.',
            productColor: 'Brown',
            productFinish: 'Satin',
            productFeatures: ['Water-based', 'Low odor', 'Quick drying']
        }
    ],
}));