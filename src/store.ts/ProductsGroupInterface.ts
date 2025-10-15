
export interface ProductGroup {
    id: number;
    productName: string;
    productId: string;
    productImage: string;
    productDescription: string;
    productColor: string;
    productFinish: string;
    productFeatures: string[];
}

export interface ProductGroupStoreState {
    productsGroups: ProductGroup[];
}