export interface Product {
  id: number;
  productName: string;
  productId: string;
  productImage: string;
  productDescription: string;
  productColor: string;
  productFinish: string;
  productFeatures: string[];
}

export interface ProductStoreState {
  productGroup: Product[];
}
