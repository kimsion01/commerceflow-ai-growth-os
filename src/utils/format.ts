export const formatNumber = (value: number) => new Intl.NumberFormat('ko-KR').format(value);

export const formatCurrencyM = (value: number) => `₩${value.toFixed(1)}M`;

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    maximumFractionDigits: 0
  }).format(value);

export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
