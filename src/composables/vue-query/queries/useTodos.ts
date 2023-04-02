import { useQuery } from 'vue-query'
import { todoService } from '@/services/todo.service'

export function useTodos() {
  const {
    data: todos,
    isLoading: isLoadingTodos,
    error: todosError
  } = useQuery('todos', () => todoService.query())

  return {
    todos,
    isLoadingTodos,
    todosError
  }
}
