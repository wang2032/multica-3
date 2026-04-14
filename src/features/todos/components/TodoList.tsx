import type { Todo } from '../../../types';
import { TodoItem } from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
}

export const TodoList = ({ todos, onToggle }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="todo-list-empty">
        <p>暂无待办任务</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
};