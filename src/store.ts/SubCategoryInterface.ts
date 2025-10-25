import type { Category } from './CategoryInterface';
import type { Product } from './ProductInterface';

export interface SubCategory {
  id: number;
  subCategoryID: string;
  subCategoryName: string;
  subCategoryDescription: string;
  subCategoryImage: string;
  categoryID: Category['categoryID'];
  products: Product[];
}

export interface SubCategoriesStoreState {
  subCategoriesGroup: SubCategory[];
}
