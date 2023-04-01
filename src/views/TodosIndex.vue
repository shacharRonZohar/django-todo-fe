<template>
  <main>
    <div v-for="todo in todos" :key="todo.id">
      {{ todo }}
    </div>
  </main>
</template>

<script setup lang="ts">
import { useQuery } from 'vue-query'
import { httpService } from '@/services/http.service'

const { data: todos } = useQuery('todos', () => httpService.get('todos'))
</script>
