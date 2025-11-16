import { AnimatePresence, motion } from '../lib/cdnMotion';
import { FitResult, Product, Shop } from '../types';

interface ProductDetailSheetProps {
  product: Product | null;
  shop?: Shop;
  fitResult: FitResult;
  onClose: () => void;
  onEquip: (product: Product) => void;
  isOpen: boolean;
}

export const ProductDetailSheet = ({
  product,
  shop,
  fitResult,
  onClose,
  onEquip,
  isOpen,
}: ProductDetailSheetProps) => {
  return (
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col justify-end bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="rounded-t-3xl bg-white p-6 shadow-2xl"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 240 }}
          >
            <div className="mx-auto h-48 w-full max-w-sm overflow-hidden rounded-2xl bg-rose-50">
              <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">{product.name}</h3>
                  <p className="text-sm text-slate-500">{shop?.name}</p>
                </div>
                <p className="text-lg font-semibold text-rose-500">${product.price}</p>
              </div>
              <div
                className={`rounded-2xl border p-3 text-sm ${
                  fitResult.status === 'good'
                    ? 'border-emerald-200 text-emerald-600'
                    : fitResult.status === 'warning'
                    ? 'border-amber-200 text-amber-600'
                    : 'border-slate-200 text-slate-500'
                }`}
              >
                <p className="font-semibold">{fitResult.message}</p>
                {fitResult.detail && <p className="text-xs">{fitResult.detail}</p>}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-500">
                <Detail label="Bust" value={product.bustCm} />
                <Detail label="Waist" value={product.waistCm} />
                <Detail label="Hips" value={product.hipsCm} />
                <Detail label="Length" value={product.lengthCm} />
                <div className="col-span-2 rounded-xl bg-rose-50 px-3 py-2 text-xs uppercase tracking-[0.3em] text-rose-500">
                  {product.stretch ? 'Stretch fabric' : 'Structured fabric'}
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => {
                    onEquip(product);
                    onClose();
                  }}
                  className="flex-1 rounded-full bg-vinyl px-4 py-2 text-white"
                >
                  Add to outfit
                </button>
                <button
                  onClick={() => console.log('View in shop', product.name)}
                  className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-slate-600"
                >
                  View in shop
                </button>
              </div>
              <p className="pt-2 text-center text-xs text-slate-400">
                Fit suggestions are estimates. You can still try any piece on your mannequin.
              </p>
              <button onClick={onClose} className="mt-2 w-full text-center text-sm text-slate-500">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Detail = ({ label, value }: { label: string; value?: number }) => (
  <div className="rounded-xl border border-slate-100 bg-white px-3 py-2">
    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{label}</p>
    <p className="text-sm text-slate-700">{value ? `${value} cm` : '—'}</p>
  </div>
);
