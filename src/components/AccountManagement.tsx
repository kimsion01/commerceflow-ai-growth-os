import { useMemo, useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Clock3,
  Laptop,
  LockKeyhole,
  Mail,
  MoreVertical,
  PauseCircle,
  ShieldCheck,
  Smartphone,
  UserPlus,
  UsersRound
} from 'lucide-react';
import { auditLogs, initialTeamMembers, roleDefinitions, usageStats } from '../data/mockData';
import { usePersistentState } from '../hooks/usePersistentState';
import type { Role, TeamMember } from '../types';
import { isEmail } from '../utils/format';
import PermissionMatrix from './PermissionMatrix';

const roleOptions = roleDefinitions.map((role) => role.role);

export default function AccountManagement() {
  const [members, setMembers] = usePersistentState<TeamMember[]>('commerceflow-members', initialTeamMembers);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Role>('Growth Marketer');
  const [timeout, setTimeoutValue] = usePersistentState('commerceflow-session-timeout', 30);
  const [message, setMessage] = useState('');

  const activeMembers = useMemo(() => members.filter((member) => member.status === 'active').length, [members]);
  const emailValid = email.length === 0 || isEmail(email);
  const canInvite = name.trim().length >= 2 && isEmail(email);

  const addMember = () => {
    if (!canInvite) {
      setMessage('이름과 유효한 이메일을 입력해야 초대할 수 있습니다.');
      return;
    }

    const safeName = name.trim();
    const safeEmail = email.trim().toLowerCase();
    if (members.some((member) => member.email.toLowerCase() === safeEmail)) {
      setMessage('이미 등록된 이메일입니다.');
      return;
    }

    const newMember: TeamMember = {
      id: `U-${String(members.length + 1).padStart(3, '0')}`,
      name: safeName,
      email: safeEmail,
      role,
      status: 'pending',
      device: '초대 대기',
      lastActive: '방금 초대됨',
      avatar: safeName.slice(0, 1)
    };

    setMembers((current) => [newMember, ...current]);
    setName('');
    setEmail('');
    setMessage(`${safeName}님에게 ${role} 권한 초대를 발송했습니다.`);
  };

  const updateRole = (id: string, nextRole: Role) => {
    setMembers((current) => current.map((member) => (member.id === id ? { ...member, role: nextRole } : member)));
  };

  const toggleStatus = (id: string) => {
    setMembers((current) =>
      current.map((member) => {
        if (member.id !== id) return member;
        return { ...member, status: member.status === 'suspended' ? 'active' : 'suspended', lastActive: member.status === 'suspended' ? '방금 복구됨' : '접근 중지됨' };
      })
    );
  };

  const resendInvite = (id: string) => {
    setMembers((current) => current.map((member) => (member.id === id ? { ...member, lastActive: '초대 메일 재발송됨' } : member)));
    setMessage('초대 메일을 재발송했습니다.');
  };

  return (
    <section className="account-section" id="accounts" aria-label="계정 추가 및 앱 관리">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Account & Security Admin</span>
          <h2>계정 추가/권한/세션까지 관리하는 SaaS형 운영 구조</h2>
          <p>실제 서비스 확장을 고려해 초대 폼, RBAC 권한 변경, 접근 중지, 세션 정책, 감사 로그를 한 화면에 구성했습니다.</p>
        </div>
        <div className="app-badges">
          <span><Smartphone size={14} /> Mobile App UX</span>
          <span><ShieldCheck size={14} /> RBAC</span>
          <span><LockKeyhole size={14} /> Session Policy</span>
        </div>
      </div>

      <div className="content-grid account-grid">
        <article className="panel account-form-panel">
          <div className="panel-header compact">
            <div>
              <span className="eyebrow">Invite Flow</span>
              <h2>운영자 계정 초대</h2>
            </div>
            <span className="panel-tag"><UserPlus size={15} /> 초대 발송</span>
          </div>

          <div className="invite-card">
            <label>
              이름
              <input value={name} onChange={(event) => setName(event.target.value)} placeholder="예: 김서연" />
            </label>
            <label>
              이메일
              <input className={!emailValid ? 'field-error' : ''} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="operator@commerceflow.io" />
              {!emailValid ? <small className="error-text">이메일 형식을 확인하세요.</small> : null}
            </label>
            <label>
              권한
              <select value={role} onChange={(event) => setRole(event.target.value as Role)}>
                {roleOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <button className="primary-btn invite-submit" onClick={addMember} disabled={!canInvite}><UserPlus size={16} /> 계정 초대</button>
            {message ? <div className="form-message"><Mail size={15} /> {message}</div> : null}
          </div>

          <div className="session-card">
            <div>
              <Clock3 size={18} />
              <strong>세션 만료 시간</strong>
              <p>비활성 상태가 지속되면 자동 로그아웃됩니다. 전체 사용자에게 동일하게 적용됩니다.</p>
            </div>
            <div className="timeout-options">
              {[10, 15, 30, 60].map((minute) => (
                <button key={minute} className={timeout === minute ? 'selected' : ''} onClick={() => setTimeoutValue(minute)}>
                  {minute}분
                </button>
              ))}
            </div>
            <span className="current-timeout">현재 설정: {timeout}분</span>
          </div>
        </article>

        <article className="panel member-panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">Team Members</span>
              <h2>계정 및 권한 관리</h2>
            </div>
            <div className="member-count"><UsersRound size={16} /> 활성 {activeMembers}명</div>
          </div>

          <div className="member-list">
            {members.map((member) => (
              <div className="member-row" key={member.id}>
                <div className="member-avatar">{member.avatar}</div>
                <div className="member-info">
                  <strong>{member.name}</strong>
                  <span>{member.email}</span>
                </div>
                <label className="role-select" aria-label={`${member.name} 권한 변경`}>
                  <select value={member.role} onChange={(event) => updateRole(member.id, event.target.value as Role)}>
                    {roleOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                <div className={`member-status ${member.status}`}>{member.status === 'active' ? '활성' : member.status === 'pending' ? '초대중' : '중지'}</div>
                <div className="member-device">
                  {member.device.includes('iPhone') || member.device.includes('Galaxy') ? <Smartphone size={15} /> : <Laptop size={15} />}
                  <span>{member.device}</span>
                </div>
                <span className="last-active">{member.lastActive}</span>
                {member.status === 'pending' ? (
                  <button className="row-action" onClick={() => resendInvite(member.id)}>재발송</button>
                ) : (
                  <button className="row-action" onClick={() => toggleStatus(member.id)}>{member.status === 'suspended' ? <CheckCircle2 size={15} /> : <PauseCircle size={15} />}</button>
                )}
                <button className="row-menu" aria-label="계정 더보기"><MoreVertical size={17} /></button>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="content-grid app-admin-grid">
        <PermissionMatrix />

        <article className="panel usage-panel">
          <div className="panel-header compact">
            <div>
              <span className="eyebrow">Usage & Security</span>
              <h2>이용 현황 / 감사 로그</h2>
            </div>
          </div>
          <div className="usage-grid">
            {usageStats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <em>{stat.helper}</em>
              </div>
            ))}
          </div>
          <div className="activity-log">
            {auditLogs.map((log) => (
              <div key={log.id}>
                {log.type === 'secure' ? <CheckCircle2 size={17} /> : log.type === 'role' ? <ShieldCheck size={17} /> : <Activity size={17} />}
                <span>{log.message}</span>
                <em>{log.actor} · {log.time}</em>
              </div>
            ))}
          </div>
          <div className="security-note">
            <LockKeyhole size={17} />
            <span>현재는 Mock Data + localStorage 기반 프로토타입이며, 실제 서비스에서는 Auth/DB/API로 교체 가능한 분리 구조입니다.</span>
          </div>
        </article>
      </div>
    </section>
  );
}
