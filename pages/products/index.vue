<template>
  <div>
    <div class="container">
      <h1 class="main-title">Задачи</h1>
      <Todos v-if="todos.length" :todos="todos" />
    </div>
  </div>
</template>
<script setup>
const { todos } = useTodo();
</script>
