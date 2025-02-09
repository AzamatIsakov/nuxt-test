<template>
  <nav>
    <ul class="flex gap-5">
      <li v-for="navItem in navLinks" :key="navItem.linkPath">
        <NuxtLink
          v-if="navItem.linkPath !== route.path"
          :href="navItem.linkPath"
          >{{ navItem.title }}</NuxtLink
        >
        <span v-else class="text-blue-500 cursor-default">{{
          navItem.title
        }}</span>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const route = useRoute();

const navLinks = computed(() => [
  { linkPath: '/', title: 'Главная' },
  { linkPath: '/todos', title: 'Задачи' },
  { linkPath: '/products', title: 'Продукты' },
]);
</script>
