import { useState } from 'react';
import type { CreateTodoInput } from '../../../types';
import './AddTodo.css';

interface AddTodoProps {
  onAdd: (input: CreateTodoInput) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      onAdd({ title: trimmedTitle });
      setTitle('');
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-todo-input"
        placeholder="输入新任务..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="add-todo-button" disabled={!title.trim()}>
        添加
      </button>
    </form>
  );
};