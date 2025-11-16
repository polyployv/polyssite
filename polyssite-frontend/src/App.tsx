import { useMemo, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ShopSelector } from './components/ShopSelector';
import { Mannequin } from './components/Mannequin';
import { CategoryTabs } from './components/CategoryTabs';
import { ProductRail } from './components/ProductRail';
import { BodyModal } from './components/BodyModal';
import { ProductDetailSheet } from './components/ProductDetailSheet';
import { products, shops, defaultMeasurements } from './data/mockData';
import {
  FitResult,
  Product,
  ProductCategory,
  SelectedItemsByCategory,
  UserMeasurements,
} from './types';
import { getFitResult } from './utils/fitLogic';
import './index.css';

const categories: (ProductCategory | 'all')[] = [
  'all',
  'hat',
  'top',
  'skirt',
  'pants',
  'socks',
  'shoes',
  'jacket',
];

function App() {
  const [selectedShopId, setSelectedShopId] = useState(shops[0].id);
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('all');
  const [selectedItems, setSelectedItems] = useState<SelectedItemsByCategory>({});
  const [userMeasurements, setUserMeasurements] = useState<UserMeasurements>(defaultMeasurements);
  const [focusProduct, setFocusProduct] = useState<Product | null>(null);
  const [bodyModalOpen, setBodyModalOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  const mixSectionRef = useRef<HTMLDivElement | null>(null);

  const visibleProducts = products.filter(
    (product) =>
      product.shopId === selectedShopId && (selectedCategory === 'all' || product.category === selectedCategory),
  );

  const fitResult: FitResult = useMemo(() => getFitResult(focusProduct, userMeasurements), [focusProduct, userMeasurements]);
  const detailFit = useMemo(() => getFitResult(detailProduct, userMeasurements), [detailProduct, userMeasurements]);

  const handleEquip = (product: Product) => {
    setSelectedItems((prev) => ({ ...prev, [product.category]: product }));
    setFocusProduct(product);
  };

  const handleStartStyling = () => {
    if (mixSectionRef.current) {
      mixSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeDetail = () => {
    setDetailOpen(false);
    setDetailProduct(null);
  };

  return (
    <div className="min-h-screen bg-boutique/80">
      <Header isMusicPlaying={isMusicPlaying} onToggleMusic={() => setIsMusicPlaying((prev) => !prev)} />
      <main className="space-y-16 pb-16">
        <Hero onStartStyling={handleStartStyling} isMusicPlaying={isMusicPlaying} shops={shops} />
        <section ref={mixSectionRef} className="mx-auto flex max-w-6xl flex-col gap-6 px-4">
          <ShopSelector shops={shops} selectedShopId={selectedShopId} onChange={setSelectedShopId} />
          <Mannequin
            selectedItems={selectedItems}
            userMeasurements={userMeasurements}
            onEditBody={() => setBodyModalOpen(true)}
            fitResult={fitResult}
          />
          <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg">
            <div className="flex flex-col gap-4">
              <CategoryTabs categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
              {visibleProducts.length ? (
                <ProductRail
                  products={visibleProducts}
                  selectedItems={selectedItems}
                  onEquip={handleEquip}
                  onShowDetails={(product) => {
                    setDetailProduct(product);
                    setDetailOpen(true);
                  }}
                />
              ) : (
                <p className="rounded-2xl bg-rose-50 px-4 py-8 text-center text-slate-500">
                  This shop has no pieces in that category yet.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <BodyModal
        isOpen={bodyModalOpen}
        measurements={userMeasurements}
        onClose={() => setBodyModalOpen(false)}
        onSave={(values) => setUserMeasurements(values)}
      />
      <ProductDetailSheet
        product={detailProduct}
        shop={shops.find((shop) => shop.id === detailProduct?.shopId)}
        fitResult={detailFit}
        onClose={closeDetail}
        onEquip={handleEquip}
        isOpen={detailOpen}
      />
    </div>
  );
}

export default App;
