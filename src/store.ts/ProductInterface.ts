export interface Product {
  id: number;
  productID: string;
  productCode: string;
  productName: string;
  productDescription: string;
  productImage: string;
  productColor: string[];
  prodductSize: string[];
}

export interface ProductsStoreState {
  productsGroup: Product[];
}
