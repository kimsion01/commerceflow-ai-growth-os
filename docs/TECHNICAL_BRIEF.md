# Technical Brief

## Stack

- React
- TypeScript
- Vite
- Recharts
- Lucide React
- CSS3
- localStorage
- PWA manifest

## Architecture

```txt
App.tsx
 ├─ Dashboard shell
 ├─ KPI/Charts
 ├─ AI Decision Center
 ├─ Campaign simulator
 ├─ Product table
 ├─ Account management
 ├─ Mobile app preview
 └─ Case study section

mockData.ts
 ├─ KPI metrics
 ├─ Revenue trend
 ├─ Channel performance
 ├─ Campaigns
 ├─ Products
 ├─ Customer segments
 ├─ Team members
 ├─ RBAC permissions
 └─ Audit logs
```

## State Management

현재 프로젝트는 외부 상태 관리 라이브러리 없이 React `useState`, `useMemo`, custom hook으로 구성했습니다.

- `useState`: 필터, 검색어, 모바일 탭, 폼 입력값
- `useMemo`: 캠페인 필터링, 요약 지표 계산, 정렬 결과 계산
- `usePersistentState`: 계정 관리/세션 설정 localStorage 저장

## Data Model Examples

```ts
export interface Campaign {
  id: string;
  name: string;
  channel: Channel;
  status: 'Scale' | 'Optimize' | 'Maintain' | 'Pause';
  revenue: number;
  adCost: number;
  roas: number;
  nextAction: string;
}
```

```ts
export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: 'active' | 'pending' | 'suspended';
  device: string;
  lastActive: string;
}
```

## Production Expansion Plan

1. Replace Mock Data with REST/GraphQL API
2. Add Auth with Supabase/Firebase/NextAuth
3. Enforce RBAC on the server
4. Add CSV upload and validation pipeline
5. Add PDF report generation
6. Add test suite with Vitest/React Testing Library
7. Build React Native/Expo mobile app
