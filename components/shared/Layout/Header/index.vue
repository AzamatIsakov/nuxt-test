<template>
  <div>
    <div class="container">
      <nav>
        <ul>
          <li v-for="navItem in navLinks" :key="navItem.linkPath">
            <NuxtLink :href="navItem.linkPath">{{ navItem.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
const navLinks = computed(() => [
  { linkPath: "/", title: "Главная" },
  { linkPath: "/todos", title: "Todos" },
  { linkPath: "/products", title: "Продукты" },
  {
    path: "~/components",
    pathPrefix: false,
  },
]);
</script>
