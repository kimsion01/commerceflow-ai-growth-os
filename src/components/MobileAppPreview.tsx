import { useState } from 'react';
import {
  BarChart3,
  Bell,
  ChevronRight,
  FileText,
  Grid2X2,
  Lightbulb,
  LockKeyhole,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  UserPlus,
  UsersRound
} from 'lucide-react';
import { mobileAlerts } from '../data/mockData';

const tabs = [
  { key: 'dashboard', label: '대시보드', icon: Grid2X2 },
  { key: 'report', label: '리포트', icon: FileText },
  { key: 'ai', label: '개선 제안', icon: Lightbulb },
  { key: 'manage', label: '관리', icon: UsersRound },
  { key: 'upload', label: '업로드', icon: UploadCloud }
] as const;

type TabKey = typeof tabs[number]['key'];

export default function MobileAppPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>('manage');

  const renderScreen = () => {
    if (activeTab === 'manage') {
      return (
        <>
          <div className="mobile-account-card">
            <span className="mobile-card-label">내 정보</span>
            <div className="mobile-profile-row">
              <div className="mobile-avatar">이</div>
              <div>
                <strong>이정훈</strong>
                <span>Owner · admin</span>
              </div>
              <button>수정</button>
            </div>
            <dl className="mobile-profile-list">
              <div><dt>직위</dt><dd>Owner</dd><button>변경</button></div>
              <div><dt>아이디</dt><dd>admin</dd><button>변경</button></div>
              <div><dt>비밀번호</dt><dd>••••••••</dd><button>변경</button></div>
            </dl>
          </div>

          <div className="mobile-session-card">
            <div className="mobile-section-title">
              <LockKeyhole size={16} />
              <strong>세션 만료 시간</strong>
            </div>
            <p>비활성 상태가 지속되면 자동 로그아웃됩니다.</p>
            <div className="mobile-timeout-buttons">
              <button>10분</button>
              <button>15분</button>
              <button className="active">30분</button>
            </div>
            <span>현재 설정: 30분</span>
          </div>

          <div className="phone-list compact-list">
            <button><UserPlus size={17} /><span>계정 추가 초대</span><ChevronRight size={17} /></button>
            <button><ShieldCheck size={17} /><span>권한 정책 확인</span><ChevronRight size={17} /></button>
          </div>
        </>
      );
    }

    if (activeTab === 'ai') {
      return (
        <>
          <div className="phone-hero">
            <Sparkles size={20} />
            <strong>AI가 우선순위 액션 4개를 추천했어요.</strong>
            <p>모바일 결제 UX, 리타겟팅 예산, 재고 부족 상품을 먼저 확인하세요.</p>
          </div>
          <div className="phone-list">
            <button><ScanLine size={17} /><span>주문 이상 징후 리포트</span><ChevronRight size={17} /></button>
            <button><Sparkles size={17} /><span>캠페인 예산 재분배</span><ChevronRight size={17} /></button>
            <button><Lightbulb size={17} /><span>상세페이지 개선 제안</span><ChevronRight size={17} /></button>
          </div>
        </>
      );
    }

    if (activeTab === 'report') {
      return (
        <>
          <div className="mobile-report-card">
            <span>이번 주 리포트</span>
            <strong>ROAS 564%</strong>
            <p>카카오 리타겟팅 효율이 가장 높고, Meta 신규 회원 캠페인은 소재 개선이 필요합니다.</p>
          </div>
          <div className="phone-list">
            <button><FileText size={17} /><span>PDF 리포트 생성</span><ChevronRight size={17} /></button>
            <button><UploadCloud size={17} /><span>CSV 데이터 내보내기</span><ChevronRight size={17} /></button>
          </div>
        </>
      );
    }

    if (activeTab === 'upload') {
      return (
        <>
          <div className="mobile-upload-card">
            <UploadCloud size={26} />
            <strong>상품/주문 CSV 업로드</strong>
            <p>운영 데이터를 업로드하면 AI가 캠페인 성과와 재고 위험을 자동 분석합니다.</p>
          </div>
          <div className="phone-list compact-list">
            <button><FileText size={17} /><span>orders_may.csv</span><ChevronRight size={17} /></button>
            <button><BarChart3 size={17} /><span>업로드 품질 리포트</span><ChevronRight size={17} /></button>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="phone-hero">
          <Sparkles size={20} />
          <strong>오늘 앱에서 확인할 운영 이슈 3개</strong>
          <p>AI 액션, 긴급 재고, 캠페인 예산을 모바일에서 바로 확인합니다.</p>
        </div>
        <div className="phone-grid">
          {mobileAlerts.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <em>{item.helper}</em>
            </div>
          ))}
        </div>
      </>
    );
  };

  const screenTitle = activeTab === 'manage' ? '계정 관리' : activeTab === 'report' ? '리포트' : activeTab === 'ai' ? 'AI 개선 제안' : activeTab === 'upload' ? '업로드' : '오늘의 운영 현황';

  return (
    <section className="mobile-preview panel" id="mobile-app">
      <div className="panel-header compact">
        <div>
          <span className="eyebrow">Mobile Admin App</span>
          <h2>앱 개발 역량이 보이는 모바일 운영자 화면</h2>
          <p>React Native/Expo로 확장 가능한 하단 탭 구조와 계정 관리 플로우를 웹 프로토타입 안에 구현했습니다.</p>
        </div>
      </div>

      <div className="phone-frame">
        <div className="phone-topbar">
          <span>9:41</span>
          <span className="dynamic-island" />
          <span>100%</span>
        </div>
        <div className="phone-content app-phone-content">
          <div className="phone-header">
            <div>
              <span className="eyebrow">CommerceFlow App</span>
              <h3>{screenTitle}</h3>
            </div>
            <button aria-label="notifications"><Bell size={18} /></button>
          </div>

          <div className="phone-screen-body">{renderScreen()}</div>

          <nav className="phone-bottom-nav" aria-label="mobile app bottom navigation">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button key={key} className={activeTab === key ? 'active' : ''} onClick={() => setActiveTab(key)}>
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
