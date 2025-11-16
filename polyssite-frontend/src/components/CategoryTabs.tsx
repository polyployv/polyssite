import { ProductCategory } from '../types';

interface CategoryTabsProps {
  categories: (ProductCategory | 'all')[];
  selected: ProductCategory | 'all';
  onSelect: (category: ProductCategory | 'all') => void;
}

export const CategoryTabs = ({ categories, selected, onSelect }: CategoryTabsProps) => {
  const labelFor = (category: ProductCategory | 'all') => {
    if (category === 'all') return 'All';
    const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
    if (category === 'pants' || category === 'socks' || category === 'shoes') {
      return capitalized;
    }
    if (category === 'skirt') {
      return 'Skirts';
    }
    if (category === 'top') {
      return 'Tops';
    }
    if (category === 'hat') {
      return 'Hats';
    }
    if (category === 'jacket') {
      return 'Jackets';
    }
    return capitalized;
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-4 py-2 text-sm capitalize transition ${
            selected === category
              ? 'bg-vinyl text-white shadow'
              : 'bg-white/70 text-slate-600 hover:bg-white'
          }`}
        >
          {labelFor(category)}
        </button>
      ))}
    </div>
  );
};
