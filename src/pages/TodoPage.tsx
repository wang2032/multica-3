import { AddTodo, TodoList } from '../features/todos/components';
import { useTodos } from '../features/todos/hooks/useTodos';
import './TodoPage.css';

export const TodoPage = () => {
  const { todos, addTodo, toggleTodoStatus } = useTodos();

  return (
    <div className="todo-page">
      <header className="todo-header">
        <h1>待办事项</h1>
      </header>
      <main className="todo-main">
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodoStatus} />
      </main>
    </div>
  );
};