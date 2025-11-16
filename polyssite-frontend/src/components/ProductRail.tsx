import { Product, SelectedItemsByCategory } from '../types';
import { motion } from '../lib/cdnMotion';

interface ProductRailProps {
  products: Product[];
  selectedItems: SelectedItemsByCategory;
  onEquip: (product: Product) => void;
  onShowDetails: (product: Product) => void;
}

export const ProductRail = ({ products, selectedItems, onEquip, onShowDetails }: ProductRailProps) => {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Pieces</p>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {products.map((product) => {
          const isEquipped = selectedItems[product.category]?.id === product.id;
          return (
            <motion.div
              key={product.id}
              className={`min-w-[220px] rounded-2xl border border-white/40 bg-white/70 p-3 shadow-sm transition ${
                isEquipped ? 'ring-2 ring-rose-300' : 'hover:-translate-y-0.5'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <button onClick={() => onEquip(product)} className="w-full text-left">
                <div className="h-36 w-full overflow-hidden rounded-xl bg-rose-50">
                  <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-sm font-semibold text-slate-700">{product.name}</p>
                  <p className="text-xs text-slate-500">${product.price}</p>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-rose-400">{product.category}</p>
                </div>
              </button>
              <div className="mt-3 flex items-center justify-between text-sm">
                <button
                  onClick={() => onEquip(product)}
                  className="rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white"
                >
                  Wear it
                </button>
                <button
                  onClick={() => onShowDetails(product)}
                  className="text-xs font-semibold text-slate-500 underline-offset-4 hover:text-rose-500"
                >
                  Details
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
