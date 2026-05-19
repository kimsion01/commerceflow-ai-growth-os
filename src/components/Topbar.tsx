import { CalendarDays, Download, Menu, RefreshCcw, Search } from 'lucide-react';
import type { Period } from '../types';

interface TopbarProps {
  period: Period;
  onPeriodChange: (period: Period) => void;
  onToggleNav: () => void;
}

export default function Topbar({ period, onPeriodChange, onToggleNav }: TopbarProps) {
  const exportSnapshot = () => {
    const content = JSON.stringify(
      {
        project: 'CommerceFlow AI Growth OS',
        exportedAt: new Date().toISOString(),
        scope: ['dashboard', 'ai-insights', 'rbac-account-admin', 'mobile-app-ui']
      },
      null,
      2
    );
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'commerceflow-case-snapshot.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <header className="topbar">
      <button className="icon-btn mobile-menu" onClick={onToggleNav} aria-label="메뉴 열기">
        <Menu size={20} />
      </button>
      <label className="global-search">
        <Search size={17} />
        <input placeholder="캠페인, 상품, 계정 검색" aria-label="검색" />
      </label>
      <div className="topbar-actions">
        <label className="filter-pill">
          <CalendarDays size={16} />
          <select value={period} onChange={(event) => onPeriodChange(event.target.value as Period)} aria-label="기간 선택">
            <option value="7d">최근 7일</option>
            <option value="30d">최근 30일</option>
            <option value="90d">최근 90일</option>
          </select>
        </label>
        <button className="ghost-btn"><RefreshCcw size={16} /> Sync</button>
        <button className="primary-btn" onClick={exportSnapshot}><Download size={16} /> Export Snapshot</button>
      </div>
    </header>
  );
}
