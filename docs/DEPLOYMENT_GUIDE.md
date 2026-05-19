# Deployment Guide - GitHub + Vercel

이 문서는 CommerceFlow AI Growth OS를 GitHub에 정리하고 Vercel로 배포하기 위한 제출용 가이드입니다.

## 1. GitHub Repository 생성

추천 저장소명:

```txt
commerceflow-ai-growth-os
```

Repository 설명:

```txt
AI commerce marketing analytics dashboard with React, TypeScript, Recharts, RBAC admin UI and mobile app prototype.
```

추천 Topics:

```txt
react
typescript
vite
recharts
dashboard
saas
analytics
ai-dashboard
portfolio
responsive-design
```

## 2. 로컬 프로젝트 업로드

압축을 푼 뒤 프로젝트 폴더에서 아래 명령어를 실행합니다.

```bash
git init
git add .
git commit -m "Initial commit: CommerceFlow AI Growth OS"
git branch -M main
git remote add origin https://github.com/YOUR_ID/commerceflow-ai-growth-os.git
git push -u origin main
```

## 3. Vercel 배포

1. Vercel 로그인
2. Add New Project 클릭
3. GitHub에서 `commerceflow-ai-growth-os` 저장소 선택
4. 아래 설정 확인

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

5. Deploy 클릭
6. 배포 완료 후 생성된 URL을 README 상단의 `Live Demo` 영역에 입력

## 4. README 링크 교체

배포 후 README의 아래 영역을 수정합니다.

```md
> Live Demo: https://your-vercel-url.vercel.app
```

포트폴리오 사이트에도 같은 링크를 연결합니다.

## 5. 제출 전 체크

```bash
npm install
npm run typecheck
npm run build
```

에러 없이 통과한 뒤 GitHub/Vercel 링크를 제출합니다.

## 6. Vercel 배포 후 확인할 항목

- 첫 화면 로딩 정상 여부
- 모바일 화면 반응형 깨짐 여부
- 계정 초대 입력/추가 동작 여부
- 세션 만료 버튼 동작 여부
- 모바일 앱 하단 탭 클릭 여부
- README의 Demo GIF, Preview 이미지 경로 정상 여부

## 7. 포트폴리오 제출 링크 구성

제출 시 아래 3개 링크를 함께 정리하는 것을 추천합니다.

```txt
1. Live Demo: Vercel 배포 URL
2. GitHub: GitHub Repository URL
3. Case Study: 포트폴리오 상세 페이지 또는 docs/CASE_STUDY.md
```
