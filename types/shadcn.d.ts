// types/shadcn.d.ts
import "@nuxt/schema";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    shadcn?: {
      prefix: string;
      componentDir: string;
    };
  }
}
