import { BarChart3, Boxes, BrainCircuit, FileText, LayoutDashboard, Megaphone, ShieldCheck, Smartphone, UsersRound } from 'lucide-react';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
  { id: 'products', label: 'Products', icon: Boxes },
  { id: 'customers', label: 'Customers', icon: UsersRound },
  { id: 'accounts', label: 'Account Admin', icon: ShieldCheck },
  { id: 'mobile-app', label: 'Mobile App', icon: Smartphone },
  { id: 'case-study', label: 'Case Study', icon: FileText }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <a className="brand" href="#overview" aria-label="CommerceFlow home">
        <div className="brand-mark">CF</div>
        <div>
          <strong>CommerceFlow</strong>
          <span>AI Growth OS</span>
        </div>
      </a>

      <nav className="nav-list" aria-label="Dashboard navigation">
        {navItems.map(({ id, label, icon: Icon }, index) => (
          <a className={`nav-item ${index === 0 ? 'active' : ''}`} href={`#${id}`} key={id}>
            <Icon size={18} strokeWidth={2.1} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-card">
        <BrainCircuit size={21} />
        <span className="eyebrow">Portfolio Case</span>
        <strong>의사결정형 SaaS 대시보드</strong>
        <p>성과 모니터링에서 끝나지 않고 권한 관리, 모바일 운영, AI 액션 추천까지 연결했습니다.</p>
      </div>
    </aside>
  );
}
