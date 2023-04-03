<template>
  <select
    v-model="newStatus"
    @change="emit('update-todo-status', newStatus)"
    name="status"
    id="status"
  >
    <option v-for="status in STATUS_OPTIONS" :key="status" :value="status">
      {{ utilService.fromSnakeToKebabCase(status) }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { STATUS_OPTIONS, type StatusOptions } from '@/models/todo.model'
import { utilService } from '@/services/util.service'

const status = inject<StatusOptions>('todo-preview-status')
const emit = defineEmits<{
  (event: 'update-todo-status', status: StatusOptions): void
}>()
const newStatus = ref<StatusOptions>(status ?? STATUS_OPTIONS[0])
</script>
