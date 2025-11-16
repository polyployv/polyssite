import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from '../lib/cdnMotion';
import { UserMeasurements } from '../types';

interface BodyModalProps {
  isOpen: boolean;
  measurements: UserMeasurements;
  onClose: () => void;
  onSave: (measurements: UserMeasurements) => void;
}

const presets: Record<string, UserMeasurements> = {
  S: { heightCm: 158, bustCm: 78, waistCm: 60, hipsCm: 86 },
  M: { heightCm: 165, bustCm: 86, waistCm: 68, hipsCm: 94 },
  L: { heightCm: 172, bustCm: 94, waistCm: 78, hipsCm: 104 },
};

export const BodyModal = ({ isOpen, measurements, onClose, onSave }: BodyModalProps) => {
  const [form, setForm] = useState(measurements);

  useEffect(() => {
    if (isOpen) {
      setForm(measurements);
    }
  }, [isOpen, measurements]);

  const handleChange = (key: keyof UserMeasurements, value: number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const previewScale = Math.min(Math.max(form.heightCm / 170, 0.8), 1.2);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-lg rounded-3xl bg-white p-6 text-slate-700 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-rose-500">Customize</p>
                <h3 className="font-serif text-2xl">Your mannequin</h3>
              </div>
              <div className="flex gap-2">
                {Object.entries(presets).map(([label, preset]) => (
                  <button
                    key={label}
                    onClick={() => setForm({ ...preset })}
                    className="rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-500"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                {(
                  [
                    ['heightCm', 'Height (cm)'],
                    ['bustCm', 'Bust (cm)'],
                    ['waistCm', 'Waist (cm)'],
                    ['hipsCm', 'Hips (cm)'],
                  ] as [keyof UserMeasurements, string][]
                ).map(([key, label]) => (
                  <label key={key} className="block text-sm">
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</span>
                    <input
                      type="number"
                      value={form[key]}
                      onChange={(event) => handleChange(key, Number(event.target.value))}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2"
                    />
                  </label>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-rose-50 p-6">
                <div
                  className="relative h-64 w-32"
                  style={{ transform: `scale(${previewScale})`, transformOrigin: 'bottom' }}
                >
                  <div className="absolute inset-x-2 top-0 h-16 rounded-full bg-white/80" />
                  <div className="absolute inset-x-4 top-14 h-32 rounded-full bg-white" />
                  <div className="absolute inset-x-6 top-44 h-[72px] rounded-full bg-white/90" />
                </div>
                <p className="mt-4 text-xs text-rose-500">Preview scales with height</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={onClose} className="rounded-full px-4 py-2 text-sm text-slate-500">
                Cancel
              </button>
              <button
                onClick={() => {
                  onSave(form);
                  onClose();
                }}
                className="rounded-full bg-vinyl px-5 py-2 text-sm font-semibold text-white"
              >
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
