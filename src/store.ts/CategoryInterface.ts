import type { Product } from './ProductInterface';
import type { SubCategory } from './SubCategoryInterface';

export interface Category {
  id: number;
  categoryID: string;
  categoryName: string;
  categoryDescription: string;
  categoryImage: string;
  subCategories: SubCategory[];
  products?: Product[];
}

export interface CategoriesStoreState {
  categoriesGroup: Category[];
}
