import { httpService } from './http.service'

import type { NewTodo, Todo } from '@/models/todo.model'

export const todoService = {
  query,
  getById,
  remove,
  save
}

function query() {
  return httpService.get<Todo[]>('todos')
}

function getById(todoId: string) {
  return httpService.get<Todo>(`todos/${todoId}`)
}

function remove(todoId: string) {
  return httpService.delete(`todos/${todoId}`)
}

function save(todo: Todo | NewTodo) {
  return _isFullTodo(todo) ? _update(todo) : _add(todo)
}

function _add(todo: NewTodo) {
  return httpService.post<Todo>('todos', todo)
}

function _update(todo: Todo) {
  return httpService.put<Todo>(`todos/${todo.id}`, todo)
}

function _isFullTodo(todo: Todo | NewTodo): todo is Todo {
  return 'id' in todo
}
