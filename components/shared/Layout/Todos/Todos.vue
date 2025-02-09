<template>
  <ul class="my-5">
    <li v-for="todo in todos" :key="todo.title">
      <label class="flex gap-2 text-xl items-center">
        <input
          class="size-4"
          type="checkbox"
          :checked="todo.checked"
          @change="updateStatus(todo.id, todo.checked)"
        />
        <span>{{ todo.title }}</span>
      </label>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import type { Todo } from '~/types';

interface Props {
  todos: Todo[];
}
const { updateStatus } = useTodo();

defineProps<Props>();
</script>
