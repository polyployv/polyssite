import { SelectedItemsByCategory, FitResult, UserMeasurements, ProductCategory } from '../types';
import { measurementSummary } from '../utils/fitLogic';
import { motion } from '../lib/cdnMotion';

interface MannequinProps {
  selectedItems: SelectedItemsByCategory;
  userMeasurements: UserMeasurements;
  onEditBody: () => void;
  fitResult: FitResult;
}

const layerMap: Record<
  ProductCategory,
  { top: string; left: string; width: string; height: string; color: string; label: string }
> = {
  hat: { top: '0%', left: '35%', width: '30%', height: '15%', color: '#f9c6d0', label: 'Hat' },
  top: { top: '25%', left: '25%', width: '50%', height: '30%', color: '#c1d4f4', label: 'Top' },
  skirt: { top: '55%', left: '25%', width: '50%', height: '25%', color: '#fce4b6', label: 'Skirt' },
  pants: { top: '55%', left: '27%', width: '46%', height: '35%', color: '#e5d3f8', label: 'Pants' },
  socks: { top: '85%', left: '32%', width: '36%', height: '12%', color: '#f4f0ff', label: 'Socks' },
  shoes: { top: '95%', left: '30%', width: '40%', height: '8%', color: '#d4e7ff', label: 'Shoes' },
  jacket: { top: '22%', left: '20%', width: '60%', height: '36%', color: '#fddfe0', label: 'Jacket' },
};

const orderedLayers: ProductCategory[] = ['hat', 'jacket', 'top', 'skirt', 'pants', 'socks', 'shoes'];

export const Mannequin = ({ selectedItems, userMeasurements, onEditBody, fitResult }: MannequinProps) => {
  return (
    <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="relative mx-auto h-96 w-64 overflow-hidden rounded-[120px] bg-gradient-to-b from-white via-rose-50 to-rose-100">
          <div className="absolute inset-x-8 top-4 h-20 rounded-full bg-rose-100" />
          <div className="absolute inset-x-12 top-20 h-60 rounded-full bg-white/90" />
          <div className="absolute inset-x-[35%] top-72 h-28 rounded-full bg-white/80" />
          {orderedLayers.map((category) => {
            const item = selectedItems[category];
            if (!item) return null;
            const layer = layerMap[category];
            return (
              <motion.div
                key={category}
                className="absolute rounded-full border border-white/60 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-600"
                style={{
                  top: layer.top,
                  left: layer.left,
                  width: layer.width,
                  height: layer.height,
                  backgroundColor: layer.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.95, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {item.name.split(' ')[0]}
              </motion.div>
            );
          })}
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-rose-500">Measurements</p>
            <div className="mt-1 flex flex-wrap items-center gap-3 rounded-full bg-rose-50 px-4 py-2 text-sm text-rose-600">
              {measurementSummary(userMeasurements)}
              <button
                onClick={onEditBody}
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-rose-600 shadow"
              >
                Edit body
              </button>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white/80 p-4">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Fit suggestion</p>
            <p
              className={`mt-2 text-base ${
                fitResult.status === 'good'
                  ? 'text-emerald-600'
                  : fitResult.status === 'warning'
                  ? 'text-amber-600'
                  : 'text-slate-500'
              }`}
            >
              {fitResult.message}
            </p>
            {fitResult.detail && <p className="text-xs text-slate-400">{fitResult.detail}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
