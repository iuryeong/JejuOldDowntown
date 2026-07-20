<template>
  <section class="hello-world">
    <h1>{{ msg }}</h1>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  msg: String,
})
</script>

<style scoped>
.hello-world {
  text-align: center;
}
</style>
