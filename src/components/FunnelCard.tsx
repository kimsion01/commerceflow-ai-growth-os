import { funnel } from '../data/mockData';
import { formatNumber } from '../utils/format';

export default function FunnelCard() {
  return (
    <section className="panel funnel-panel">
      <div className="panel-header compact">
        <div>
          <span className="eyebrow">Conversion Funnel</span>
          <h2>구매 전환 퍼널</h2>
        </div>
      </div>
      <div className="funnel-list">
        {funnel.map((item) => (
          <div className="funnel-row" key={item.step}>
            <div className="funnel-label">
              <strong>{item.step}</strong>
              <span>{formatNumber(item.value)}</span>
            </div>
            <div className="funnel-bar" aria-label={`${item.step} ${item.percent}%`}>
              <span style={{ width: `${item.percent}%` }} />
            </div>
            <em>{item.percent}%</em>
          </div>
        ))}
      </div>
    </section>
  );
}
