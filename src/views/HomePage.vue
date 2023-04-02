<template>
  <main>
    <h2>Welcome to your todos!</h2>
    <p>
      This is a simple todo app built with Vue 3, TypeScript, and vue-query, with a django REST api.
    </p>
    <p>
      You can view the source code for the frontend
      <a href="https://github.com/shacharRonZohar/django-todo-fe">here</a>, and the backend
      <a href="https://github.com/shacharRonZohar/django-todo-be">here</a>.
    </p>
    <MainLogin />
  </main>
</template>

<script setup lang="ts">
import MainLogin from '@/components/MainLogin.vue'
</script>
