import { Product, Shop, UserMeasurements } from '../types';

export const shops: Shop[] = [
  { id: 'roselle', name: 'Roselle Atelier', styleTag: 'Vintage blooms' },
  { id: 'etoile', name: 'Étoile Loft', styleTag: 'Parisian loft' },
  { id: 'juniper', name: 'Juniper Arcade', styleTag: 'Playful streetwear' },
];

export const products: Product[] = [
  {
    id: 'hat-1',
    shopId: 'roselle',
    category: 'hat',
    name: 'Velvet Cloud Beret',
    price: 58,
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'hat-2',
    shopId: 'etoile',
    category: 'hat',
    name: 'Ribboned Sun Visor',
    price: 42,
    imageUrl:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'top-1',
    shopId: 'roselle',
    category: 'top',
    name: 'Porcelain Corset Top',
    price: 128,
    bustCm: 86,
    waistCm: 68,
    imageUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'top-2',
    shopId: 'etoile',
    category: 'top',
    name: 'Shimmer Knit Tank',
    price: 98,
    bustCm: 92,
    waistCm: 74,
    stretch: true,
    imageUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'top-3',
    shopId: 'juniper',
    category: 'top',
    name: 'Draped Satin Blouse',
    price: 110,
    bustCm: 96,
    waistCm: 78,
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'skirt-1',
    shopId: 'roselle',
    category: 'skirt',
    name: 'Tulle Bloom Skirt',
    price: 140,
    waistCm: 66,
    hipsCm: 94,
    lengthCm: 72,
    imageUrl:
      'https://images.unsplash.com/photo-1503342250614-ca4407868a5b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pants-1',
    shopId: 'etoile',
    category: 'pants',
    name: 'Wide Leg Trouser',
    price: 155,
    waistCm: 72,
    hipsCm: 100,
    lengthCm: 102,
    imageUrl:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pants-2',
    shopId: 'juniper',
    category: 'pants',
    name: 'Studio Track Pants',
    price: 95,
    waistCm: 70,
    hipsCm: 98,
    stretch: true,
    imageUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'socks-1',
    shopId: 'roselle',
    category: 'socks',
    name: 'Lace Anklets',
    price: 24,
    imageUrl:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'socks-2',
    shopId: 'juniper',
    category: 'socks',
    name: 'Colorblock Crew',
    price: 18,
    imageUrl:
      'https://images.unsplash.com/photo-1455122917848-7d9c24148a2b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'shoes-1',
    shopId: 'etoile',
    category: 'shoes',
    name: 'Marble Mary Janes',
    price: 210,
    imageUrl:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'shoes-2',
    shopId: 'juniper',
    category: 'shoes',
    name: 'Studio Platform Sneaker',
    price: 165,
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'jacket-1',
    shopId: 'roselle',
    category: 'jacket',
    name: 'Bouclé Cropped Jacket',
    price: 220,
    bustCm: 94,
    imageUrl:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'jacket-2',
    shopId: 'juniper',
    category: 'jacket',
    name: 'Hologram Windbreaker',
    price: 185,
    bustCm: 100,
    stretch: true,
    imageUrl:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
  },
];

export const defaultMeasurements: UserMeasurements = {
  heightCm: 164,
  bustCm: 84,
  waistCm: 66,
  hipsCm: 92,
};
