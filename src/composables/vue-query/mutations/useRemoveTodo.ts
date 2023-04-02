import { useMutation, useQueryClient } from 'vue-query'
import { todoService } from '@/services/todo.service'

export function useRemoveTodo() {
  const queryClient = useQueryClient()

  const {
    mutate: removeTodo,
    isLoading: isRemovingTodo,
    error: todoRemoveError
  } = useMutation((todoId: string) => todoService.remove(todoId), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  })

  return {
    removeTodo,
    isRemovingTodo,
    todoRemoveError
  }
}
