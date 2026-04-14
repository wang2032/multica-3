import { useAuth } from '../features/auth/context/AuthContext';
import type { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  currentPage: 'todo' | 'new' | 'stats';
  onNavigate: (page: 'todo' | 'new' | 'stats') => void;
}

export const Layout = ({ children, currentPage, onNavigate }: LayoutProps) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>任务管理</h2>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-item ${currentPage === 'todo' ? 'active' : ''}`}
            onClick={() => onNavigate('todo')}
          >
            任务列表
          </button>
          <button
            className={`nav-item ${currentPage === 'new' ? 'active' : ''}`}
            onClick={() => onNavigate('new')}
          >
            新建任务
          </button>
          <button
            className={`nav-item ${currentPage === 'stats' ? 'active' : ''}`}
            onClick={() => onNavigate('stats')}
          >
            统计信息
          </button>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleLogout}>
            退出登录
          </button>
        </div>
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};