import { FitResult, Product, UserMeasurements } from '../types';

const formatDetail = (
  measurement: string,
  itemValue?: number,
  userValue?: number,
): string | undefined => {
  if (itemValue == null || userValue == null) {
    return undefined;
  }
  return `${measurement} – you ${userValue}cm · item ${itemValue}cm`;
};

const evaluateDimension = ({
  productLabel,
  measurementLabel,
  itemValue,
  userValue,
  stretch,
}: {
  productLabel: string;
  measurementLabel: string;
  itemValue?: number;
  userValue?: number;
  stretch?: boolean;
}): FitResult => {
  if (itemValue == null || userValue == null) {
    return {
      status: 'unknown',
      message: 'Fit info not available for this item.',
    };
  }

  const difference = itemValue - userValue;
  const detail = formatDetail(measurementLabel, itemValue, userValue);

  if (difference >= 0 && difference <= 5) {
    return {
      status: 'good',
      message: `✅ This ${productLabel} is likely to fit your ${measurementLabel}.`,
      detail,
    };
  }

  if (difference < 0) {
    if (stretch && difference >= -3) {
      return {
        status: 'warning',
        message: `⚠️ Stretch fabric should help but expect a snug ${measurementLabel}.`,
        detail,
      };
    }

    return {
      status: 'warning',
      message: `⚠️ This ${productLabel} may feel tight around your ${measurementLabel}.`,
      detail,
    };
  }

  return {
    status: 'good',
    message: `✅ Relaxed fit over your ${measurementLabel}.`,
    detail,
  };
};

const mergeResults = (results: FitResult[]): FitResult => {
  const warnings = results.filter((r) => r.status === 'warning');
  const goods = results.filter((r) => r.status === 'good');
  const details = results.map((r) => r.detail).filter(Boolean).join(' | ');

  if (warnings.length) {
    return {
      status: 'warning',
      message: `${warnings[0].message}`,
      detail: details || warnings[0].detail,
    };
  }

  if (goods.length) {
    return {
      status: 'good',
      message: goods[0].message,
      detail: details || goods[0].detail,
    };
  }

  return {
    status: 'unknown',
    message: 'Fit info not available for this item.',
  };
};

export const getFitResult = (
  product: Product | null,
  user: UserMeasurements,
): FitResult => {
  if (!product) {
    return {
      status: 'unknown',
      message: 'Select an item to see fit suggestions.',
    };
  }

  switch (product.category) {
    case 'top':
    case 'jacket':
      return evaluateDimension({
        productLabel: product.category,
        measurementLabel: 'bust',
        itemValue: product.bustCm,
        userValue: user.bustCm,
        stretch: product.stretch,
      });
    case 'skirt':
    case 'pants': {
      const waist = evaluateDimension({
        productLabel: product.category,
        measurementLabel: 'waist',
        itemValue: product.waistCm,
        userValue: user.waistCm,
        stretch: product.stretch,
      });
      const hips = evaluateDimension({
        productLabel: product.category,
        measurementLabel: 'hips',
        itemValue: product.hipsCm,
        userValue: user.hipsCm,
        stretch: product.stretch,
      });
      return mergeResults([waist, hips]);
    }
    default:
      return {
        status: 'unknown',
        message: 'Fit info not available for this item.',
      };
  }
};

export const measurementSummary = (user: UserMeasurements): string =>
  `${user.heightCm}cm – ${user.bustCm} / ${user.waistCm} / ${user.hipsCm}`;
