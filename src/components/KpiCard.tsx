import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import type { KpiMetric } from '../types';

export default function KpiCard({ label, value, delta, trend, helper, spark }: KpiMetric) {
  const max = Math.max(...spark);
  const min = Math.min(...spark);
  const range = max - min || 1;
  const points = spark
    .map((v, index) => {
      const x = (index / (spark.length - 1)) * 100;
      const y = 42 - ((v - min) / range) * 34;
      return `${x},${y}`;
    })
    .join(' ');
  const TrendIcon = trend === 'up' ? ArrowUpRight : trend === 'down' ? ArrowDownRight : ArrowRight;

  return (
    <article className="kpi-card">
      <div className="kpi-head">
        <span>{label}</span>
        <span className={`trend ${trend}`}><TrendIcon size={15} /> {delta}</span>
      </div>
      <strong>{value}</strong>
      <div className="kpi-bottom">
        <small>{helper}</small>
        <svg className="sparkline" viewBox="0 0 100 48" role="img" aria-label={`${label} trend`}>
          <polyline fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" points={points} />
        </svg>
      </div>
    </article>
  );
}
