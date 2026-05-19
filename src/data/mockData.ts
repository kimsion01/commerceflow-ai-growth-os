import type {
  AuditLog,
  Campaign,
  CategoryMetric,
  ChannelMetric,
  FunnelStep,
  Insight,
  KpiMetric,
  MobileAlert,
  Product,
  RevenuePoint,
  RoadmapItem,
  RoleDefinition,
  Segment,
  TeamMember
} from '../types';

export const kpis: KpiMetric[] = [
  { label: '총 매출', value: '₩148.6M', delta: '+21.4%', trend: 'up', helper: '전월 대비', spark: [38, 44, 47, 53, 58, 63, 72, 78] },
  { label: '구매 전환율', value: '5.18%', delta: '+0.72%p', trend: 'up', helper: '방문 → 구매', spark: [3.8, 4.1, 4.2, 4.6, 4.8, 5.0, 5.1, 5.18] },
  { label: '광고 ROAS', value: '564%', delta: '+48%p', trend: 'up', helper: '평균 효율', spark: [441, 468, 492, 506, 512, 538, 552, 564] },
  { label: '장바구니 이탈률', value: '58.9%', delta: '-6.3%p', trend: 'down', helper: '개선 추세', spark: [69, 67, 65, 64, 62, 61, 59.8, 58.9] }
];

export const revenueTrend: RevenuePoint[] = [
  { date: '05/01', revenue: 18.2, target: 17.4, orders: 420, adSpend: 4.2 },
  { date: '05/02', revenue: 20.4, target: 18.1, orders: 468, adSpend: 4.4 },
  { date: '05/03', revenue: 17.8, target: 18.8, orders: 405, adSpend: 3.9 },
  { date: '05/04', revenue: 24.7, target: 19.6, orders: 552, adSpend: 5.2 },
  { date: '05/05', revenue: 28.1, target: 21.0, orders: 610, adSpend: 5.7 },
  { date: '05/06', revenue: 33.6, target: 22.6, orders: 702, adSpend: 6.4 },
  { date: '05/07', revenue: 31.9, target: 24.1, orders: 681, adSpend: 6.2 },
  { date: '05/08', revenue: 36.8, target: 25.8, orders: 748, adSpend: 6.8 },
  { date: '05/09', revenue: 40.2, target: 27.3, orders: 812, adSpend: 7.1 },
  { date: '05/10', revenue: 43.5, target: 29.0, orders: 884, adSpend: 7.8 },
  { date: '05/11', revenue: 42.1, target: 30.2, orders: 861, adSpend: 7.5 },
  { date: '05/12', revenue: 47.6, target: 31.4, orders: 948, adSpend: 8.4 }
];

export const channelPerformance: ChannelMetric[] = [
  { key: 'naver', channel: '네이버 쇼핑', visitors: 48200, orders: 2820, conversionRate: 5.85, cac: 6240, revenue: 54.2, roas: 612 },
  { key: 'meta', channel: 'Meta Ads', visitors: 36600, orders: 1580, conversionRate: 4.32, cac: 7680, revenue: 31.4, roas: 384 },
  { key: 'kakao', channel: '카카오 리타겟팅', visitors: 22100, orders: 1518, conversionRate: 6.87, cac: 3980, revenue: 29.7, roas: 742 },
  { key: 'organic', channel: '오가닉 검색', visitors: 29100, orders: 1632, conversionRate: 5.61, cac: 1320, revenue: 23.1, roas: 1750 },
  { key: 'crm', channel: 'CRM 메시지', visitors: 12800, orders: 812, conversionRate: 6.34, cac: 2100, revenue: 10.2, roas: 980 }
];

export const categorySales: CategoryMetric[] = [
  { name: '스킨케어', value: 31, revenue: 45.9 },
  { name: '패션잡화', value: 24, revenue: 35.6 },
  { name: '홈리빙', value: 19, revenue: 28.2 },
  { name: '디지털', value: 16, revenue: 23.7 },
  { name: '푸드', value: 10, revenue: 15.2 }
];

export const campaigns: Campaign[] = [
  {
    id: 'CMP-2405-01',
    name: '봄 시즌 기획전',
    channel: 'naver',
    owner: 'Growth Team',
    status: 'Scale',
    objective: '기획전 구매 전환 극대화',
    impressions: 244000,
    clicks: 14800,
    ctr: 6.1,
    orders: 916,
    conversion: 6.19,
    revenue: 32.4,
    adCost: 5.3,
    roas: 611,
    budgetShare: 32,
    nextAction: '예산 12% 증액 및 상위 상품 소재 확장'
  },
  {
    id: 'CMP-2405-02',
    name: '신규 회원 10% 쿠폰',
    channel: 'meta',
    owner: 'Acquisition',
    status: 'Optimize',
    objective: '신규 회원 첫 구매 유도',
    impressions: 318000,
    clicks: 12420,
    ctr: 3.9,
    orders: 512,
    conversion: 4.12,
    revenue: 18.6,
    adCost: 5.1,
    roas: 365,
    budgetShare: 23,
    nextAction: '소재 2종 교체 후 48시간 A/B 테스트'
  },
  {
    id: 'CMP-2405-03',
    name: '장바구니 이탈 리마인드',
    channel: 'kakao',
    owner: 'CRM',
    status: 'Scale',
    objective: '결제 중단 고객 회수',
    impressions: 92000,
    clicks: 8840,
    ctr: 9.6,
    orders: 742,
    conversion: 8.39,
    revenue: 22.1,
    adCost: 2.9,
    roas: 762,
    budgetShare: 18,
    nextAction: '24시간 내 재방문 메시지 자동화 강화'
  },
  {
    id: 'CMP-2405-04',
    name: '브랜드 검색 유입 강화',
    channel: 'organic',
    owner: 'SEO',
    status: 'Maintain',
    objective: '검색 기반 재방문 확대',
    impressions: 76000,
    clicks: 9360,
    ctr: 12.3,
    orders: 544,
    conversion: 5.81,
    revenue: 14.7,
    adCost: 0.8,
    roas: 1838,
    budgetShare: 8,
    nextAction: '리뷰/FAQ 구조화 콘텐츠 추가'
  },
  {
    id: 'CMP-2405-05',
    name: 'VIP 재구매 큐레이션',
    channel: 'crm',
    owner: 'Retention',
    status: 'Maintain',
    objective: '고객 생애가치 증가',
    impressions: 36000,
    clicks: 4280,
    ctr: 11.9,
    orders: 388,
    conversion: 9.07,
    revenue: 12.9,
    adCost: 1.1,
    roas: 1172,
    budgetShare: 7,
    nextAction: 'VIP 전용 묶음 상품 추천 로직 확대'
  },
  {
    id: 'CMP-2405-06',
    name: '라이트 자켓 숏폼 광고',
    channel: 'meta',
    owner: 'Creative',
    status: 'Pause',
    objective: '패션잡화 트래픽 확대',
    impressions: 108000,
    clicks: 3240,
    ctr: 3.0,
    orders: 86,
    conversion: 2.65,
    revenue: 3.8,
    adCost: 2.4,
    roas: 158,
    budgetShare: 12,
    nextAction: '반품률 이슈 해결 전 예산 동결'
  }
];

export const aiInsights: Insight[] = [
  {
    id: 'INS-001',
    severity: 'critical',
    title: '모바일 결제 단계 이탈이 매출 손실의 핵심 원인입니다',
    summary: '모바일 장바구니 이탈률이 데스크톱 대비 14.2%p 높고, 배송비 확인 단계에서 집중적으로 빠져나갑니다.',
    evidence: '모바일 checkout_step_2 drop-off 41.8% · 간편결제 클릭률 18.6%',
    metric: '예상 개선 +₩8.2M / 월',
    owner: 'Product UX',
    confidence: 87,
    due: 'D+7'
  },
  {
    id: 'INS-002',
    severity: 'high',
    title: '카카오 리타겟팅은 예산 증액 여지가 있습니다',
    summary: 'ROAS가 762%로 전체 평균보다 높고 구매 전환율도 8.39%입니다. 단기 예산 증액 후 포화 여부를 확인할 수 있습니다.',
    evidence: '최근 7일 빈도 2.1회 · CPA 목표 대비 -24%',
    metric: '예상 추가 매출 +₩4.6M',
    owner: 'CRM',
    confidence: 82,
    due: 'D+3'
  },
  {
    id: 'INS-003',
    severity: 'medium',
    title: '조회수는 높지만 구매 전환이 낮은 상품은 상세페이지 개선이 필요합니다',
    summary: '라이트 트렌치 자켓은 방문은 충분하지만 반품률과 사이즈 문의가 높습니다. 사이즈 가이드와 착용 리뷰를 첫 화면으로 끌어올려야 합니다.',
    evidence: '조회수 TOP 2 · 반품률 5.9% · 전환율 3.2%',
    metric: '반품률 -1.2%p 목표',
    owner: 'Merchandising',
    confidence: 74,
    due: 'D+10'
  },
  {
    id: 'INS-004',
    severity: 'low',
    title: 'VIP 재구매 고객은 묶음 추천 반응이 높습니다',
    summary: 'VIP 세그먼트에서 스킨케어 듀오 세트와 리필 상품의 동시 구매 비중이 높아 개인화 추천 영역 확대가 유리합니다.',
    evidence: 'VIP AOV 2.4배 · 번들 구매율 31.2%',
    metric: '객단가 +₩6,800',
    owner: 'Retention',
    confidence: 69,
    due: 'D+14'
  }
];

export const products: Product[] = [
  { id: 'P-1029', name: '비건 세럼 듀오 세트', category: '스킨케어', views: 18420, cart: 2420, orders: 928, conversion: 5.04, stock: 124, revenue: 21.7, returnRate: 1.8, risk: 'low' },
  { id: 'P-1188', name: '라이트 트렌치 자켓', category: '패션잡화', views: 14210, cart: 1710, orders: 462, conversion: 3.25, stock: 28, revenue: 14.4, returnRate: 5.9, risk: 'high' },
  { id: 'P-1420', name: '무드 테이블 램프', category: '홈리빙', views: 9850, cart: 1180, orders: 376, conversion: 3.82, stock: 73, revenue: 9.6, returnRate: 2.1, risk: 'low' },
  { id: 'P-1565', name: '미니 블루투스 키보드', category: '디지털', views: 11240, cart: 1620, orders: 448, conversion: 3.99, stock: 16, revenue: 11.3, returnRate: 4.4, risk: 'medium' },
  { id: 'P-1742', name: '프로틴 그래놀라 팩', category: '푸드', views: 7230, cart: 920, orders: 394, conversion: 5.45, stock: 212, revenue: 6.6, returnRate: 0.9, risk: 'low' },
  { id: 'P-1821', name: '오가닉 코튼 파자마', category: '패션잡화', views: 10310, cart: 1288, orders: 332, conversion: 3.22, stock: 19, revenue: 8.2, returnRate: 4.8, risk: 'high' },
  { id: 'P-1903', name: '스마트 멀티 충전 스테이션', category: '디지털', views: 8910, cart: 1164, orders: 308, conversion: 3.46, stock: 44, revenue: 7.8, returnRate: 3.7, risk: 'medium' },
  { id: 'P-2011', name: '향균 주방 타월 6P', category: '홈리빙', views: 6810, cart: 980, orders: 421, conversion: 6.18, stock: 96, revenue: 5.4, returnRate: 1.1, risk: 'low' }
];

export const segments: Segment[] = [
  { label: '신규 고객', count: 18400, share: 38, insight: '첫 구매 쿠폰 반응률 높음', recommendation: '웰컴 쿠폰 UX를 결제 전 단계에 재노출' },
  { label: '재구매 고객', count: 9700, share: 20, insight: '스킨케어 묶음 구매 선호', recommendation: '번들 추천 위젯 우선 적용' },
  { label: 'VIP 고객', count: 2200, share: 5, insight: '객단가 평균 대비 2.4배', recommendation: 'VIP 전용 큐레이션 메시지 자동화' },
  { label: '장바구니 이탈 고객', count: 12100, share: 25, insight: '배송비 단계 이탈 집중', recommendation: '무료배송 기준 및 간편결제 안내 선노출' },
  { label: '휴면 고객', count: 5800, share: 12, insight: '30일 재방문 캠페인 필요', recommendation: '브랜드 검색/CRM 동시 리마인드' }
];

export const funnel: FunnelStep[] = [
  { step: '방문', value: 148800, percent: 100 },
  { step: '상품 조회', value: 93600, percent: 62.9 },
  { step: '장바구니', value: 38500, percent: 25.9 },
  { step: '결제 진입', value: 21400, percent: 14.4 },
  { step: '구매 완료', value: 7710, percent: 5.18 }
];

export const initialTeamMembers: TeamMember[] = [
  { id: 'U-001', name: '이정훈', email: 'owner@commerceflow.io', role: 'Owner', status: 'active', device: 'MacBook Pro · Chrome', lastActive: '2분 전', avatar: '이' },
  { id: 'U-002', name: '김서연', email: 'growth@commerceflow.io', role: 'Growth Marketer', status: 'active', device: 'iPhone 15 · App', lastActive: '12분 전', avatar: '김' },
  { id: 'U-003', name: '박민재', email: 'data@commerceflow.io', role: 'Data Analyst', status: 'active', device: 'Galaxy S24 · App', lastActive: '38분 전', avatar: '박' },
  { id: 'U-004', name: '최하린', email: 'viewer@commerceflow.io', role: 'Viewer', status: 'pending', device: '초대 대기', lastActive: '초대 메일 발송됨', avatar: '최' }
];

export const roleDefinitions: RoleDefinition[] = [
  { role: 'Owner', description: '결제/조직/권한을 포함한 전체 관리', permissions: ['dashboard', 'campaigns', 'products', 'customers', 'accounts', 'exports', 'settings'] },
  { role: 'Admin', description: '조직 운영 및 대부분의 데이터 관리', permissions: ['dashboard', 'campaigns', 'products', 'customers', 'accounts', 'exports'] },
  { role: 'Growth Marketer', description: '캠페인 운영과 리포트 내보내기', permissions: ['dashboard', 'campaigns', 'customers', 'exports'] },
  { role: 'Data Analyst', description: '상품/고객 데이터 분석 및 리포트 생성', permissions: ['dashboard', 'products', 'customers', 'exports'] },
  { role: 'Viewer', description: '읽기 전용 접근', permissions: ['dashboard'] }
];

export const auditLogs: AuditLog[] = [
  { id: 'LOG-001', type: 'secure', message: '2단계 인증 정책이 전체 활성 계정에 적용됨', actor: 'System', time: '09:12' },
  { id: 'LOG-002', type: 'role', message: 'Growth Marketer 권한에서 계정 관리 접근 제한', actor: 'Policy Engine', time: '08:58' },
  { id: 'LOG-003', type: 'export', message: '주간 성과 리포트 CSV 내보내기 완료', actor: '김서연', time: '08:34' },
  { id: 'LOG-004', type: 'invite', message: 'Viewer 계정 초대 메일 발송', actor: '이정훈', time: '어제' }
];

export const usageStats = [
  { label: '월간 활성 사용자', value: '4명', helper: '관리자 앱 접속 포함' },
  { label: '평균 세션', value: '18분', helper: '자동 로그아웃 정책 적용' },
  { label: '리포트 생성', value: '27건', helper: 'PDF/CSV mock export' },
  { label: '모바일 확인 비중', value: '61%', helper: '운영 이슈 확인' }
];

export const mobileAlerts: MobileAlert[] = [
  { label: '신규 주문', value: '148건', helper: '전일 대비 +12%' },
  { label: '재고 위험', value: '4개', helper: '48시간 내 확인' },
  { label: 'AI 액션', value: '7개', helper: '우선순위 High 2개' }
];

export const roadmap: RoadmapItem[] = [
  { phase: '01', title: 'Data Modeling', description: '캠페인, 상품, 고객, 계정 데이터를 타입으로 분리하고 Mock API 구조로 설계', status: 'Designed' },
  { phase: '02', title: 'Dashboard UX', description: 'KPI → 원인 분석 → 액션 추천으로 이어지는 운영자 의사결정 흐름 구성', status: 'Prototype' },
  { phase: '03', title: 'RBAC Account Admin', description: '운영자 초대, 권한, 세션, 디바이스 로그를 관리하는 SaaS형 계정 화면 구현', status: 'Ready for API' },
  { phase: '04', title: 'Mobile App Extension', description: 'PWA/React Native 확장을 고려한 하단 탭 기반 운영자 앱 인터페이스 설계', status: 'Next' }
];

export const permissionLabels: Record<string, string> = {
  dashboard: '대시보드 조회',
  campaigns: '캠페인 관리',
  products: '상품 분석',
  customers: '고객 세그먼트',
  accounts: '계정/권한 관리',
  exports: '리포트 내보내기',
  settings: '조직 설정'
};
