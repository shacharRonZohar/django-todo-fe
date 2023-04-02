<template>
  <section>
    <TodoPreview v-for="todo in todos" :key="todo.id" :todo="todo" />
  </section>
</template>

<script setup lang="ts">
import TodoPreview from '@/components/TodoPreview.vue'
import type { Todo } from '@/models/todo.model'
defineProps<{
  todos: Todo[]
}>()
</script>
