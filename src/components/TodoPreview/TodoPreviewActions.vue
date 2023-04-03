<template>
  <button @click="emit('remove-todo')">Remove</button>
  <TodoPreviewActionsSelect @update-todo-status="emit('update-todo-status', $event)" />
</template>

<script setup lang="ts">
import TodoPreviewActionsSelect from '@/components/TodoPreview/TodoPreviewActionsSelect.vue'
import type { StatusOptions } from '@/models/todo.model'
const emit = defineEmits<{
  (event: 'remove-todo'): void
  (event: 'update-todo-status', status: StatusOptions): void
}>()
</script>

<style scoped lang="scss">
select {
  text-transform: capitalize;
}
option {
  text-transform: capitalize;
}
</style>
