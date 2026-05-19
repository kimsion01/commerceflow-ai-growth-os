import { useMemo, useState } from 'react';
import { ArrowDownUp, Search } from 'lucide-react';
import { products } from '../data/mockData';
import type { Product } from '../types';
import { formatCurrencyM, formatNumber } from '../utils/format';

interface ProductTableProps {
  keyword: string;
  onKeywordChange: (value: string) => void;
}

type SortKey = 'revenue' | 'conversion' | 'stock' | 'returnRate';

const sortLabels: Record<SortKey, string> = {
  revenue: '매출순',
  conversion: '전환율순',
  stock: '재고순',
  returnRate: '반품률순'
};

export default function ProductTable({ keyword, onKeywordChange }: ProductTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('revenue');

  const filtered = useMemo(() => {
    const source = products.filter((product) =>
      `${product.name} ${product.category} ${product.id}`.toLowerCase().includes(keyword.toLowerCase())
    );
    return [...source].sort((a: Product, b: Product) => b[sortKey] - a[sortKey]);
  }, [keyword, sortKey]);

  return (
    <section className="panel table-panel" id="products">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Product Analytics</span>
          <h2>상품별 전환 성과</h2>
          <p>조회 → 장바구니 → 구매 → 반품 리스크를 한 행에서 비교할 수 있도록 설계했습니다.</p>
        </div>
        <div className="table-tools">
          <label className="search-box">
            <Search size={16} />
            <input value={keyword} onChange={(event) => onKeywordChange(event.target.value)} placeholder="상품/카테고리 검색" />
          </label>
          <label className="sort-box">
            <ArrowDownUp size={16} />
            <select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)} aria-label="정렬 기준">
              {(Object.keys(sortLabels) as SortKey[]).map((key) => <option key={key} value={key}>{sortLabels[key]}</option>)}
            </select>
          </label>
        </div>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>상품</th>
              <th>카테고리</th>
              <th>조회</th>
              <th>장바구니</th>
              <th>구매</th>
              <th>전환율</th>
              <th>재고</th>
              <th>매출</th>
              <th>반품률</th>
              <th>리스크</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => (
              <tr key={product.id}>
                <td>
                  <strong>{product.name}</strong>
                  <small>{product.id}</small>
                </td>
                <td>{product.category}</td>
                <td>{formatNumber(product.views)}</td>
                <td>{formatNumber(product.cart)}</td>
                <td>{formatNumber(product.orders)}</td>
                <td>{product.conversion}%</td>
                <td><span className={product.stock < 30 ? 'stock low-stock' : 'stock'}>{product.stock}</span></td>
                <td>{formatCurrencyM(product.revenue)}</td>
                <td>{product.returnRate}%</td>
                <td><span className={`risk-pill ${product.risk}`}>{product.risk}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
