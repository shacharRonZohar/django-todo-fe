<template>
  <section class="todo-list">
    <TodoPreview
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :isRemovingTodo="isRemovingTodo"
      :todoRemoveError="todoRemoveError"
      @remove-todo="onRemoveTodo"
      @update-todo-status="onUpdateTodoStatus"
    />
  </section>
</template>

<script setup lang="ts">
import TodoPreview from '@/components/TodoPreview/TodoPreview.vue'
import { useRemoveTodo } from '@/composables/vue-query/mutations/useRemoveTodo'
import { useSaveTodo } from '@/composables/vue-query/mutations/useSaveTodo'
import type { StatusOptions, Todo } from '@/models/todo.model'

const props = defineProps<{
  todos: Todo[]
}>()

const { removeTodo, isRemovingTodo, todoRemoveError } = useRemoveTodo()
const { saveTodo, isSavingTodo, todoSaveError } = useSaveTodo()

function onRemoveTodo(todoId: string) {
  removeTodo(todoId)
}

function onUpdateTodoStatus(status: StatusOptions, todoId: string) {
  const todo = props.todos.find((todo) => todo.id === todoId)
  if (!todo) return
  const updatedTodo = { ...todo, status }
  saveTodo(updatedTodo)
}
</script>

<style scoped lang="scss">
.todo-list {
  display: grid;
  grid-auto-rows: minmax(65px, auto);
  gap: 1rem;
}
</style>
