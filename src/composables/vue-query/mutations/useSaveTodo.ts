import { useMutation, useQueryClient } from 'vue-query'
import type { Todo, NewTodo } from '@/models/todo.model'
import { todoService } from '@/services/todo.service'

export function useSaveTodo() {
  const queryClient = useQueryClient()

  const {
    mutate: saveTodo,
    isLoading: isSavingTodo,
    error: todoSaveError
  } = useMutation((todo: Todo | NewTodo) => todoService.save(todo), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  })

  return {
    saveTodo,
    isSavingTodo,
    todoSaveError
  }
}
