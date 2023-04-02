import { useQuery } from 'vue-query'

import { httpService } from '@/services/http.service'
import { isRef, type Ref } from 'vue'
import { todoService } from '@/services/todo.service'

export function useTodoById(todoId: string | Ref<string>) {
  const {
    data: todo,
    isLoading: isLoadingTodo,
    error: todoError
  } = useQuery(['todo', todoId], () => todoService.getById(isRef(todoId) ? todoId.value : todoId))

  return {
    todo,
    isLoadingTodo,
    todoError
  }
}
