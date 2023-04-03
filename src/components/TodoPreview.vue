<template>
  <article>
    <span>{{ todo.title }}</span>
    <p>{{ todo.description }}</p>
    <button @click="onRemoveTodo">Remove</button>
    <span>
      <span v-if="isRemovingTodo">Removing...</span>
      <span v-if="todoRemoveError">Error removing todo</span>
    </span>
  </article>
</template>

<script setup lang="ts">
import { useRemoveTodo } from '@/composables/vue-query/mutations/useRemoveTodo'
import type { Todo } from '@/models/todo.model'
const props = defineProps<{
  todo: Todo
}>()

const { removeTodo, isRemovingTodo, todoRemoveError } = useRemoveTodo()

const onRemoveTodo = () => {
  console.log('remove todo')
  removeTodo(props.todo.id)
}
</script>
