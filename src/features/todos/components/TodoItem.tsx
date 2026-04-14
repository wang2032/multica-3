import type { Todo } from '../../../types';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className={`todo-item ${todo.status === 'completed' ? 'completed' : ''}`}>
      <label className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.status === 'completed'}
          onChange={() => onToggle(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="todo-content">
        <span className="todo-title">{todo.title}</span>
        <span className="todo-date">{formatDate(todo.createdAt)}</span>
      </div>
    </div>
  );
};