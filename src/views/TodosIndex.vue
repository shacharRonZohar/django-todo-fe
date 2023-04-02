<template>
  <main>
    <MainLoader v-if="isLoading" />
    <TodoList v-else-if="todos.length" :todos="todos" />
    <p v-else>No todos found</p>
  </main>
</template>

<script setup lang="ts">
import { useQuery } from 'vue-query'

import MainLoader from '@/components/MainLoader.vue'
import TodoList from '@/components/TodoList.vue'

import { httpService } from '@/services/http.service'

const { data: todos, isLoading } = useQuery('todos', () => httpService.get('todos'))
</script>
