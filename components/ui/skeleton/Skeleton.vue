<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  class?: HTMLAttributes['class'];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
  <div
    :class="
      cn(
        'animate-pulse rounded-md bg-gray-900/10 dark:bg-gray-50/10',
        props.class,
      )
    "
  />
</template>
