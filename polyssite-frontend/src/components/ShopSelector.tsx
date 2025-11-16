import { Shop } from '../types';

interface ShopSelectorProps {
  shops: Shop[];
  selectedShopId: string;
  onChange: (shopId: string) => void;
}

export const ShopSelector = ({ shops, selectedShopId, onChange }: ShopSelectorProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm">
      <p className="text-xs uppercase tracking-[0.4em] text-rose-500">Shop</p>
      <div className="flex flex-wrap items-center gap-4">
        <button className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-600">
          {shops.find((shop) => shop.id === selectedShopId)?.name}
        </button>
        <div className="flex flex-wrap gap-3 text-sm">
          {shops.map((shop) => (
            <button
              key={shop.id}
              onClick={() => onChange(shop.id)}
              className={`rounded-full border px-3 py-1 transition ${
                shop.id === selectedShopId
                  ? 'border-rose-400 bg-rose-50 text-rose-600'
                  : 'border-slate-200 text-slate-500 hover:border-rose-200 hover:text-rose-500'
              }`}
            >
              {shop.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
