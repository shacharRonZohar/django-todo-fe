<template>
  <main>
    <MainLoader v-if="isLoadingTodos" />
    <TodoList v-else-if="todos?.length" :todos="todos" />
    <p v-else>No todos found</p>
  </main>
</template>

<script setup lang="ts">
import MainLoader from '@/components/MainLoader.vue'
import TodoList from '@/components/TodoList.vue'

import { useTodos } from '@/composables/vue-query/queries/useTodos'

const { todos, isLoadingTodos } = useTodos()
</script>
