import { useState, type FormEvent } from 'react';
import { useTodos } from '../features/todos/hooks/useTodos';
import './NewTaskPage.css';

interface NewTaskPageProps {
  onTaskCreated?: () => void;
}

export const NewTaskPage = ({ onTaskCreated }: NewTaskPageProps) => {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      return;
    }
    addTodo({ title: title.trim() });
    setTitle('');
    onTaskCreated?.();
  };

  return (
    <div className="new-task-page">
      <header className="new-task-header">
        <h1>新建任务</h1>
      </header>
      <main className="new-task-main">
        <form className="new-task-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">任务标题</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="请输入任务标题"
              autoFocus
            />
          </div>
          <button type="submit" className="submit-button" disabled={!title.trim()}>
            创建任务
          </button>
        </form>
      </main>
    </div>
  );
};