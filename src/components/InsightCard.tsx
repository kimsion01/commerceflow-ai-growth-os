import { AlertTriangle, CheckCircle2, Clock3, Flame, Lightbulb, ShieldAlert } from 'lucide-react';
import type { Insight } from '../types';

const iconMap = {
  critical: ShieldAlert,
  high: AlertTriangle,
  medium: Flame,
  low: Lightbulb
} as const;

export default function InsightCard({ severity, title, summary, evidence, metric, owner, confidence, due }: Insight) {
  const Icon = iconMap[severity];
  return (
    <article className={`insight-card ${severity}`}>
      <div className="insight-icon"><Icon size={18} /></div>
      <div className="insight-body">
        <div className="insight-title-row">
          <span className={`severity-pill ${severity}`}>{severity}</span>
          <span className="confidence"><CheckCircle2 size={14} /> {confidence}% confidence</span>
        </div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <div className="evidence-box">{evidence}</div>
        <div className="insight-meta">
          <strong>{metric}</strong>
          <span>{owner}</span>
          <span><Clock3 size={14} /> {due}</span>
        </div>
      </div>
    </article>
  );
}
