import { CheckCircle2, X } from 'lucide-react';
import { permissionLabels, roleDefinitions } from '../data/mockData';
import type { PermissionKey } from '../types';

const permissionOrder = Object.keys(permissionLabels) as PermissionKey[];

export default function PermissionMatrix() {
  return (
    <section className="panel permission-panel">
      <div className="panel-header compact">
        <div>
          <span className="eyebrow">RBAC Matrix</span>
          <h2>권한별 접근 범위</h2>
        </div>
      </div>
      <div className="matrix-scroll">
        <table className="permission-table">
          <thead>
            <tr>
              <th>Role</th>
              {permissionOrder.map((key) => <th key={key}>{permissionLabels[key]}</th>)}
            </tr>
          </thead>
          <tbody>
            {roleDefinitions.map((role) => (
              <tr key={role.role}>
                <td>
                  <strong>{role.role}</strong>
                  <small>{role.description}</small>
                </td>
                {permissionOrder.map((key) => {
                  const enabled = role.permissions.includes(key);
                  return <td key={key}>{enabled ? <CheckCircle2 className="allow" size={17} /> : <X className="deny" size={16} />}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
