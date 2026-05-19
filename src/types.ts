import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

export type Period = '7d' | '30d' | '90d';
export type Channel = 'all' | 'naver' | 'meta' | 'kakao' | 'organic' | 'crm';
export type Trend = 'up' | 'down' | 'neutral';
export type Severity = 'critical' | 'high' | 'medium' | 'low';
export type MemberStatus = 'active' | 'pending' | 'suspended';
export type Role = 'Owner' | 'Admin' | 'Growth Marketer' | 'Data Analyst' | 'Viewer';
export type PermissionKey = 'dashboard' | 'campaigns' | 'products' | 'customers' | 'accounts' | 'exports' | 'settings';

export interface NavItem {
  id: string;
  label: string;
  icon: ComponentType<LucideProps>;
}

export interface KpiMetric {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  helper: string;
  spark: number[];
}

export interface RevenuePoint {
  date: string;
  revenue: number;
  target: number;
  orders: number;
  adSpend: number;
}

export interface ChannelMetric {
  key: Exclude<Channel, 'all'>;
  channel: string;
  visitors: number;
  orders: number;
  conversionRate: number;
  cac: number;
  revenue: number;
  roas: number;
}

export interface CategoryMetric {
  name: string;
  value: number;
  revenue: number;
}

export interface Campaign {
  id: string;
  name: string;
  channel: Exclude<Channel, 'all'>;
  owner: string;
  status: 'Scale' | 'Optimize' | 'Maintain' | 'Pause';
  objective: string;
  impressions: number;
  clicks: number;
  ctr: number;
  orders: number;
  conversion: number;
  revenue: number;
  adCost: number;
  roas: number;
  budgetShare: number;
  nextAction: string;
}

export interface Insight {
  id: string;
  severity: Severity;
  title: string;
  summary: string;
  evidence: string;
  metric: string;
  owner: string;
  confidence: number;
  due: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  views: number;
  cart: number;
  orders: number;
  conversion: number;
  stock: number;
  revenue: number;
  returnRate: number;
  risk: 'low' | 'medium' | 'high';
}

export interface Segment {
  label: string;
  count: number;
  share: number;
  insight: string;
  recommendation: string;
}

export interface FunnelStep {
  step: string;
  value: number;
  percent: number;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: MemberStatus;
  device: string;
  lastActive: string;
  avatar: string;
}

export interface RoleDefinition {
  role: Role;
  description: string;
  permissions: PermissionKey[];
}

export interface AuditLog {
  id: string;
  type: 'secure' | 'role' | 'export' | 'invite';
  message: string;
  actor: string;
  time: string;
}

export interface MobileAlert {
  label: string;
  value: string;
  helper: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'Designed' | 'Prototype' | 'Ready for API' | 'Next';
}
