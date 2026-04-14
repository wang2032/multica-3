import { useState } from 'react';
import { AuthProvider, useAuth } from './features/auth/context/AuthContext';
import { Layout } from './components/Layout';
import { TodoPage, LoginPage, NewTaskPage, StatsPage } from './pages';

type PageType = 'todo' | 'new' | 'stats';

const MainApp = () => {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState<PageType>('todo');

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const handleTaskCreated = () => {
    setCurrentPage('todo');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'todo':
        return <TodoPage />;
      case 'new':
        return <NewTaskPage onTaskCreated={handleTaskCreated} />;
      case 'stats':
        return <StatsPage />;
      default:
        return <TodoPage />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default App;