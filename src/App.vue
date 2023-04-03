<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="main-layout">
    <header class="main-header">
      <div class="logo">Todo App</div>
      <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/todos">Todos</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
}

.main-layout {
  display: grid;

  // place-items: center;
  /* minheight: 100vh; */
  height: 100%;
  grid-template: 100px 1fr / minmax(20px, 1fr) 1000px minmax(20px, 1fr);

  > * {
    grid-column: 2;
    // grid-row: 1;
  }
}

.main-header {
  line-height: 1.5;
  // max-height: 100vh;
  display: flex;
  justify-content: space-between;
}

.main-nav {
  display: flex;
  font-size: 19px;
  margin: auto 0;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &:first-of-type {
      border: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }

    &.router-link-exact-active:hover {
      background-color: transparent;
    }
    &.router-link-exact-active {
      color: var(--color-text);
    }
  }
}
</style>
