<template>
  <div class="relative">
    <preloader-view></preloader-view>
    <header class="p-5">
      <div class="mx-auto max-w-7xl container flex items-center">
        <a class="ml-16" href="/">
          <img class="h-8 w-24" src="./assets/logo.svg" alt="logo" />
        </a>
        <nav class="relative mx-auto translate-x-minus">
          <router-link
            class="link-hover transition-all duration-300 ease-linear hover:text-defaultBlue gray-new font-normal text-sm"
            to="/forms"
            >Форма</router-link
          >
          <router-link
            class="link-hover transition-all duration-300 ease-linear hover:text-defaultBlue gray-new font-normal ml-6 text-sm"
            to="/preview"
            >Превью</router-link
          >
        </nav>
      </div>
    </header>
    <main class="min-h-screen">
      <router-view />
    </main>
    <footer class="text-center bg-lighterGray p-8 mt-6">
      <span class="text-black text-sm1">all rights reserved</span>
    </footer>
  </div>
</template>

<script>
import PreloaderView from "./components/PreloaderView";
export default {
  data() {
    return {
      viewList: false,
      titlePage: null,
    };
  },
  components: {
    PreloaderView,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.titlePage = to.meta.title || "Some Default Title";
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.router-link-active {
  // @apply bg-slate-400 text-white;
}
</style>
