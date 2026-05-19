import { useMemo } from 'react';
import type { Campaign, Channel } from '../types';
import { formatCurrencyM, formatNumber } from '../utils/format';

interface CampaignGridProps {
  campaigns: Campaign[];
  channel: Channel;
}

export default function CampaignGrid({ campaigns, channel }: CampaignGridProps) {
  const filteredCampaigns = useMemo(() => {
    if (channel === 'all') return campaigns;
    return campaigns.filter((campaign) => campaign.channel === channel);
  }, [campaigns, channel]);

  return (
    <section className="panel campaign-panel">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Campaign Performance</span>
          <h2>캠페인별 광고 성과</h2>
        </div>
        <span className="panel-tag">{filteredCampaigns.length} campaigns</span>
      </div>
      <div className="campaign-grid">
        {filteredCampaigns.map((campaign) => (
          <article className="campaign-card" key={campaign.id}>
            <div className="campaign-head">
              <span className={`status ${campaign.status.toLowerCase()}`}>{campaign.status}</span>
              <span>{campaign.id}</span>
            </div>
            <h3>{campaign.name}</h3>
            <p>{campaign.objective}</p>
            <dl>
              <div><dt>노출</dt><dd>{formatNumber(campaign.impressions)}</dd></div>
              <div><dt>CTR</dt><dd>{campaign.ctr}%</dd></div>
              <div><dt>전환율</dt><dd>{campaign.conversion}%</dd></div>
              <div><dt>매출</dt><dd>{formatCurrencyM(campaign.revenue)}</dd></div>
              <div><dt>ROAS</dt><dd>{campaign.roas}%</dd></div>
              <div><dt>예산 비중</dt><dd>{campaign.budgetShare}%</dd></div>
            </dl>
            <div className="next-action">
              <span>Next Action</span>
              <strong>{campaign.nextAction}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
