import { segments } from '../data/mockData';
import { formatNumber } from '../utils/format';

export default function SegmentPanel() {
  return (
    <section className="panel segment-panel" id="customers">
      <div className="panel-header compact">
        <div>
          <span className="eyebrow">Customer Segment</span>
          <h2>고객 세그먼트별 액션</h2>
        </div>
      </div>
      <div className="segment-list">
        {segments.map((segment) => (
          <div className="segment-row" key={segment.label}>
            <div className="segment-copy">
              <strong>{segment.label}</strong>
              <span>{segment.insight}</span>
              <em>{segment.recommendation}</em>
            </div>
            <div className="segment-count">
              <strong>{formatNumber(segment.count)}</strong>
              <span>{segment.share}%</span>
            </div>
            <div className="segment-bar"><span style={{ width: `${segment.share}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}
