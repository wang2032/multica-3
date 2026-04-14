import type { Todo, CreateTodoInput } from '../types';

const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

class TodoService {
  private todos: Todo[] = [];

  constructor() {
    this.todos = this.loadFromStorage();
  }

  private loadFromStorage(): Todo[] {
    const stored = localStorage.getItem('todos');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return parsed.map((todo: Todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }));
      } catch {
        return [];
      }
    }
    return [];
  }

  private saveToStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getAll(): Todo[] {
    return [...this.todos].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  create(input: CreateTodoInput): Todo {
    const todo: Todo = {
      id: generateId(),
      title: input.title,
      status: 'pending',
      createdAt: new Date(),
    };
    this.todos.push(todo);
    this.saveToStorage();
    return todo;
  }

  toggleStatus(id: string): Todo | null {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.status = todo.status === 'pending' ? 'completed' : 'pending';
      this.saveToStorage();
      return todo;
    }
    return null;
  }

  getById(id: string): Todo | undefined {
    return this.todos.find((t) => t.id === id);
  }
}

export const todoService = new TodoService();