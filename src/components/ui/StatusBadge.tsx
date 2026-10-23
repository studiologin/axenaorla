import type { Fact } from '@/content/types';
import { ui } from '@/content/interface';
import { isReview } from '@/lib/site';
export function StatusBadge({ item, always = false }: { item: Fact; always?: boolean }) {
  if (!always && !isReview) return null;
  return <span className="status-wrap"><span className={`status status-${item.status}`}>{ui.status[item.status]}</span>{isReview && <small className="source">{ui.fonte}: {item.fonte}</small>}</span>;
}
