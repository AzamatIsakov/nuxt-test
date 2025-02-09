<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transform: translateY(-10px);
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  transform: translateY(0px);
  opacity: 0;
}
</style>
