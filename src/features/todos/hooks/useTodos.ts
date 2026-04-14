import { useState, useCallback } from 'react';
import type { Todo, CreateTodoInput } from '../../../types';
import { todoService } from '../../../services';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(todoService.getAll());

  const refreshTodos = useCallback(() => {
    setTodos(todoService.getAll());
  }, []);

  const addTodo = useCallback((input: CreateTodoInput) => {
    todoService.create(input);
    refreshTodos();
  }, [refreshTodos]);

  const toggleTodoStatus = useCallback((id: string) => {
    todoService.toggleStatus(id);
    refreshTodos();
  }, [refreshTodos]);

  return {
    todos,
    addTodo,
    toggleTodoStatus,
  };
};