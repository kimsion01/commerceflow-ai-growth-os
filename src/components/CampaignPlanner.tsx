import { useMemo, useState } from 'react';
import { ArrowRightLeft, BrainCircuit, Target } from 'lucide-react';
import { campaigns } from '../data/mockData';
import { formatCurrencyM } from '../utils/format';

export default function CampaignPlanner() {
  const [shift, setShift] = useState(12);
  const baseRevenue = campaigns.reduce((sum, campaign) => sum + campaign.revenue, 0);
  const baseAdCost = campaigns.reduce((sum, campaign) => sum + campaign.adCost, 0);

  const scenario = useMemo(() => {
    const efficiencyLift = shift * 0.021;
    const projectedRevenue = baseRevenue + shift * 0.38;
    const projectedRoas = ((projectedRevenue / baseAdCost) * 100 + shift * 3.1).toFixed(0);
    return { efficiencyLift, projectedRevenue, projectedRoas };
  }, [baseAdCost, baseRevenue, shift]);

  return (
    <section className="panel planner-panel" id="campaigns">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Scenario Simulator</span>
          <h2>캠페인 예산 재분배 시뮬레이터</h2>
          <p>성과가 낮은 Meta 소재 예산을 리타겟팅/검색 채널로 일부 이동했을 때의 예상 매출을 계산합니다.</p>
        </div>
        <span className="panel-tag"><BrainCircuit size={15} /> AI planning</span>
      </div>

      <div className="scenario-layout">
        <div className="scenario-control">
          <div className="slider-head">
            <span><ArrowRightLeft size={16} /> 예산 이동 비율</span>
            <strong>{shift}%</strong>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            value={shift}
            onChange={(event) => setShift(Number(event.target.value))}
            aria-label="예산 이동 비율"
          />
          <div className="scenario-note">
            <Target size={17} />
            <span>권장 범위는 8~15%입니다. 20% 이상은 도달 빈도 포화 리스크를 추가 검증해야 합니다.</span>
          </div>
        </div>

        <div className="scenario-results">
          <div>
            <span>예상 추가 매출</span>
            <strong>{formatCurrencyM(scenario.projectedRevenue - baseRevenue)}</strong>
            <em>월 기준</em>
          </div>
          <div>
            <span>예상 총 매출</span>
            <strong>{formatCurrencyM(scenario.projectedRevenue)}</strong>
            <em>현재 {formatCurrencyM(baseRevenue)}</em>
          </div>
          <div>
            <span>예상 ROAS</span>
            <strong>{scenario.projectedRoas}%</strong>
            <em>효율 개선 +{scenario.efficiencyLift.toFixed(1)}%p</em>
          </div>
        </div>
      </div>
    </section>
  );
}
