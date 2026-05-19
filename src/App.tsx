import { useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { BrainCircuit, Filter, Menu, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import KpiCard from './components/KpiCard';
import InsightCard from './components/InsightCard';
import ProductTable from './components/ProductTable';
import MobileAppPreview from './components/MobileAppPreview';
import FunnelCard from './components/FunnelCard';
import AccountManagement from './components/AccountManagement';
import CampaignPlanner from './components/CampaignPlanner';
import CampaignGrid from './components/CampaignGrid';
import SegmentPanel from './components/SegmentPanel';
import ExecutiveReport from './components/ExecutiveReport';
import {
  aiInsights,
  campaigns,
  categorySales,
  channelPerformance,
  kpis,
  revenueTrend
} from './data/mockData';
import type { Channel, Period } from './types';
import { formatCurrencyM } from './utils/format';

const pieColors = ['#6d5dfc', '#0ea5e9', '#10b981', '#f59e0b', '#f472b6'];

export default function App() {
  const [period, setPeriod] = useState<Period>('30d');
  const [channel, setChannel] = useState<Channel>('all');
  const [keyword, setKeyword] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filteredCampaigns = useMemo(() => {
    if (channel === 'all') return campaigns;
    return campaigns.filter((campaign) => campaign.channel === channel);
  }, [channel]);

  const campaignSummary = useMemo(() => {
    const totalRevenue = filteredCampaigns.reduce((sum, campaign) => sum + campaign.revenue, 0);
    const totalCost = filteredCampaigns.reduce((sum, campaign) => sum + campaign.adCost, 0);
    const avgRoas = totalCost > 0 ? Math.round((totalRevenue / totalCost) * 100) : 0;
    return { totalRevenue, avgRoas };
  }, [filteredCampaigns]);

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="dashboard">
        <Topbar period={period} onPeriodChange={setPeriod} onToggleNav={() => setMobileNavOpen((value) => !value)} />

        {mobileNavOpen ? (
          <nav className="mobile-nav-note" aria-label="mobile navigation">
            {['Overview', 'Analytics', 'Campaigns', 'Products', 'Customers', 'Account Admin', 'Mobile App', 'Case Study'].map((item) => <span key={item}>{item}</span>)}
          </nav>
        ) : null}

        <section className="hero-panel" id="overview">
          <div className="hero-copy">
            <div className="ai-badge"><Sparkles size={16} /> Enterprise Portfolio Ready</div>
            <h1>AI 커머스 마케팅 성과 분석 + 모바일 운영자 앱 대시보드</h1>
            <p>
              매출, 캠페인 ROAS, 상품 전환율, 고객 세그먼트, 계정 권한, 모바일 운영 플로우를 하나의 SaaS 화면으로 연결했습니다.
              단순한 관리자 페이지가 아니라 “데이터를 보고 다음 액션을 결정하는 제품”으로 설계했습니다.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#case-study"><BrainCircuit size={16} /> Case Study 보기</a>
              <a className="ghost-btn" href="#accounts"><ShieldCheck size={16} /> 계정 관리 확인</a>
            </div>
          </div>
          <div className="hero-score-card">
            <span>Growth Health Score</span>
            <strong>87</strong>
            <p>캠페인 효율, 구매 전환율, 재고 리스크, 고객 재방문율을 종합한 운영 건강도</p>
            <div className="score-bars">
              <span style={{ height: '46%' }} />
              <span style={{ height: '62%' }} />
              <span style={{ height: '74%' }} />
              <span style={{ height: '88%' }} />
              <span style={{ height: '71%' }} />
              <span style={{ height: '92%' }} />
            </div>
          </div>
        </section>

        <section className="filterbar" aria-label="dashboard filters">
          <div className="filter-group">
            <Filter size={17} />
            <select value={channel} onChange={(event) => setChannel(event.target.value as Channel)} aria-label="채널 선택">
              <option value="all">전체 채널</option>
              <option value="naver">네이버 쇼핑</option>
              <option value="meta">Meta Ads</option>
              <option value="kakao">카카오 리타겟팅</option>
              <option value="organic">오가닉 검색</option>
              <option value="crm">CRM 메시지</option>
            </select>
          </div>
          <span className="filter-summary">{period} 기준 · 캠페인 매출 {formatCurrencyM(campaignSummary.totalRevenue)} · 평균 ROAS {campaignSummary.avgRoas}%</span>
        </section>

        <section className="kpi-grid" aria-label="핵심 지표">
          {kpis.map((item) => <KpiCard key={item.label} {...item} />)}
        </section>

        <section className="content-grid insight-hero-grid">
          <section className="panel insight-panel featured-insights">
            <div className="panel-header">
              <div>
                <span className="eyebrow">AI Decision Center</span>
                <h2>우선순위 기반 개선 액션</h2>
                <p>운영자가 오늘 바로 판단할 수 있도록 근거, 담당자, 예상 효과, 실행 기한을 함께 제공합니다.</p>
              </div>
            </div>
            <div className="insight-list">
              {aiInsights.slice(0, 3).map((insight) => <InsightCard key={insight.id} {...insight} />)}
            </div>
          </section>

          <section className="panel quality-panel">
            <div className="panel-header compact">
              <div>
                <span className="eyebrow">Data Quality</span>
                <h2>데이터 신뢰도</h2>
              </div>
            </div>
            <div className="quality-score">
              <strong>96%</strong>
              <span>CSV 업로드/캠페인 태깅/주문 이벤트 매칭 기준</span>
            </div>
            <div className="quality-list">
              <div><span>UTM coverage</span><strong>98%</strong></div>
              <div><span>Order matching</span><strong>94%</strong></div>
              <div><span>Duplicate check</span><strong>99%</strong></div>
              <div><span>Missing revenue</span><strong>0.7%</strong></div>
            </div>
          </section>
        </section>

        <section className="content-grid main-grid" id="analytics">
          <article className="panel wide-panel">
            <div className="panel-header">
              <div>
                <span className="eyebrow">Revenue Trend</span>
                <h2>일별 매출 / 목표 / 광고비 추이</h2>
              </div>
              <span className="panel-tag"><TrendingUp size={15} /> 목표 상회</span>
            </div>
            <div className="chart-area large-chart">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={revenueTrend} margin={{ top: 10, right: 16, left: -18, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6d5dfc" stopOpacity={0.38} />
                      <stop offset="95%" stopColor="#6d5dfc" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8ecf7" />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#6d5dfc" fill="url(#revenue)" strokeWidth={3} name="매출(백만원)" />
                  <Line type="monotone" dataKey="target" stroke="#14b8a6" strokeWidth={2} dot={false} name="목표" />
                  <Bar dataKey="adSpend" fill="#c7d2fe" radius={[8, 8, 0, 0]} name="광고비" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="panel">
            <div className="panel-header compact">
              <div>
                <span className="eyebrow">Category Mix</span>
                <h2>카테고리 매출 비중</h2>
              </div>
            </div>
            <div className="chart-area donut-chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categorySales} dataKey="value" nameKey="name" innerRadius={62} outerRadius={88} paddingAngle={4}>
                    {categorySales.map((_, index) => <Cell key={index} fill={pieColors[index % pieColors.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="donut-center"><strong>₩148.6M</strong><span>Revenue</span></div>
            </div>
          </article>
        </section>

        <section className="content-grid two-col">
          <article className="panel">
            <div className="panel-header compact">
              <div>
                <span className="eyebrow">Channel Performance</span>
                <h2>채널별 전환율 / ROAS</h2>
              </div>
            </div>
            <div className="chart-area medium-chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelPerformance} margin={{ top: 8, right: 10, left: -18, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8ecf7" />
                  <XAxis dataKey="channel" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="conversionRate" radius={[10, 10, 0, 0]} fill="#0ea5e9" name="전환율(%)" />
                  <Bar dataKey="roas" radius={[10, 10, 0, 0]} fill="#c084fc" name="ROAS(%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <FunnelCard />
        </section>

        <CampaignPlanner />
        <CampaignGrid campaigns={campaigns} channel={channel} />

        <section className="content-grid insight-layout">
          <ProductTable keyword={keyword} onKeywordChange={setKeyword} />
          <SegmentPanel />
        </section>

        <AccountManagement />
        <MobileAppPreview />
        <ExecutiveReport />
      </main>
    </div>
  );
}
