<template>
  <article>
    <span>{{ todo.title }}</span>
    <p>{{ todo.description }}</p>
  </article>
</template>

<script setup lang="ts">
import type { Todo } from '@/models/todo.model'
defineProps<{
  todo: Todo
}>()
</script>
