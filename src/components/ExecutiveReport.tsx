import { CheckCircle2, Code2, DatabaseZap, GitBranch, Rocket } from 'lucide-react';
import { roadmap } from '../data/mockData';

const deliverables = [
  'React + TypeScript 기반 대시보드 컴포넌트 구조화',
  'Recharts 기반 매출/채널/카테고리/퍼널 데이터 시각화',
  'AI 인사이트 카드와 예산 재분배 시뮬레이터 설계',
  '운영자 계정 초대, 권한 변경, 세션 정책, 감사 로그 UI 구현',
  'PWA manifest와 모바일 앱 스타일 하단 탭 인터페이스 구성',
  'README, 기술 설명서, 면접 답변 스크립트 포함'
];

export default function ExecutiveReport() {
  return (
    <section className="case-section" id="case-study">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Portfolio Case Study</span>
          <h2>대기업 서류 제출용으로 설명 가능한 프로젝트 구조</h2>
          <p>단순 UI 클론이 아니라 문제 정의, 데이터 모델링, 컴포넌트 설계, 모바일 확장성, 한계와 다음 단계까지 제시할 수 있도록 문서화했습니다.</p>
        </div>
      </div>

      <div className="content-grid case-grid">
        <article className="panel case-card dark-card">
          <Rocket size={24} />
          <h3>Problem</h3>
          <p>커머스 운영자는 매출, 광고, 상품, 고객, 계정 권한을 각각 다른 도구에서 확인해 의사결정 속도가 느립니다.</p>
        </article>
        <article className="panel case-card">
          <DatabaseZap size={24} />
          <h3>Solution</h3>
          <p>핵심 지표와 원인 분석, AI 액션 추천, 계정 관리, 모바일 확인 흐름을 하나의 SaaS 대시보드로 통합했습니다.</p>
        </article>
        <article className="panel case-card">
          <Code2 size={24} />
          <h3>Implementation</h3>
          <p>React 컴포넌트, TypeScript 타입, Mock Data, localStorage 상태 저장, 반응형 CSS를 분리해 확장 가능한 구조로 만들었습니다.</p>
        </article>
        <article className="panel case-card">
          <GitBranch size={24} />
          <h3>Next</h3>
          <p>Supabase/Firebase Auth, REST API, React Native/Expo, 실제 CSV 업로드 파이프라인으로 확장할 수 있습니다.</p>
        </article>
      </div>

      <div className="content-grid roadmap-grid">
        <article className="panel deliverable-panel">
          <div className="panel-header compact">
            <div>
              <span className="eyebrow">Deliverables</span>
              <h2>제출 파일에 포함된 산출물</h2>
            </div>
          </div>
          <ul className="deliverable-list">
            {deliverables.map((item) => <li key={item}><CheckCircle2 size={17} /> {item}</li>)}
          </ul>
        </article>

        <article className="panel roadmap-panel">
          <div className="panel-header compact">
            <div>
              <span className="eyebrow">Build Roadmap</span>
              <h2>기획 → 구현 → 확장 단계</h2>
            </div>
          </div>
          <div className="roadmap-list">
            {roadmap.map((item) => (
              <div key={item.phase}>
                <span>{item.phase}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
                <em>{item.status}</em>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
