import { useTodos } from '../features/todos/hooks/useTodos';
import './StatsPage.css';

export const StatsPage = () => {
  const { todos } = useTodos();

  const totalCount = todos.length;
  const completedCount = todos.filter(t => t.status === 'completed').length;
  const pendingCount = todos.filter(t => t.status === 'pending').length;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="stats-page">
      <header className="stats-header">
        <h1>统计信息</h1>
      </header>
      <main className="stats-main">
        <div className="stats-cards">
          <div className="stat-card">
            <div className="stat-value">{totalCount}</div>
            <div className="stat-label">总任务数</div>
          </div>
          <div className="stat-card completed">
            <div className="stat-value">{completedCount}</div>
            <div className="stat-label">已完成</div>
          </div>
          <div className="stat-card pending">
            <div className="stat-value">{pendingCount}</div>
            <div className="stat-label">进行中</div>
          </div>
          <div className="stat-card rate">
            <div className="stat-value">{completionRate}%</div>
            <div className="stat-label">完成率</div>
          </div>
        </div>
      </main>
    </div>
  );
};