export type ProductCategory =
  | 'hat'
  | 'top'
  | 'skirt'
  | 'pants'
  | 'socks'
  | 'shoes'
  | 'jacket';

export interface Shop {
  id: string;
  name: string;
  styleTag?: string;
}

export interface Product {
  id: string;
  shopId: string;
  category: ProductCategory;
  name: string;
  price: number;
  imageUrl: string;
  bustCm?: number;
  waistCm?: number;
  hipsCm?: number;
  lengthCm?: number;
  stretch?: boolean;
}

export interface UserMeasurements {
  heightCm: number;
  bustCm: number;
  waistCm: number;
  hipsCm: number;
}

export type SelectedItemsByCategory = Partial<Record<ProductCategory, Product>>;

export type FitStatus = 'good' | 'warning' | 'unknown';

export interface FitResult {
  status: FitStatus;
  message: string;
  detail?: string;
}
