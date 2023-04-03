<template>
  <article class="todo-preview" :class="status">
    <div class="details">
      <span class="title">{{ todo.title }}</span>
      <span class="desc">{{ todo.description }}</span>
    </div>
    <div class="actions-container">
      <span v-if="isRemovingTodo">Removing...</span>
      <span v-else-if="todoRemoveError">Error removing todo</span>
      <TodoPreviewActions
        v-else
        @remove-todo="emit('remove-todo', todo.id)"
        @update-todo-status="emit('update-todo-status', $event, todo.id)"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import TodoPreviewActions from '@/components/TodoPreview/TodoPreviewActions.vue'
// import { useRemoveTodo } from '@/composables/vue-query/mutations/useRemoveTodo'
import { utilService } from '@/services/util.service'
import type { StatusOptions, Todo } from '@/models/todo.model'

const props = defineProps<{
  todo: Todo
  isRemovingTodo: boolean
  todoRemoveError: unknown
}>()

provide('todo-preview-status', props.todo.status)

const emit = defineEmits<{
  (event: 'remove-todo', todoId: string): void
  (event: 'update-todo-status', status: StatusOptions, todoId: string): void
}>()

const status = computed(() => {
  // Transform status to from SNAKE_CASE to kebab-case
  return utilService.fromSnakeToKebabCase(props.todo.status)
})
</script>

<style scoped lang="scss">
.todo-preview {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--color-border);
  gap: 0.5rem;
  border-radius: 5px;
  .details {
    flex: 1;
    display: flex;
    align-items: center;
    // justify-content: ce;
    gap: 1rem;

    .title {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  .msgs {
    position: absolute;
  }

  $status-colors: (
    pending: var(--color-pending),
    completed: var(--color-completed),
    in-progress: var(--color-in-progress),
    blocked: var(--color-blocked)
  );

  @each $status, $color in $status-colors {
    &.#{$status} {
      border-color: $color;
    }
  }
}
</style>
