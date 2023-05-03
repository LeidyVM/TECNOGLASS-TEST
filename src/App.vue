<template>
  <div class="principal-container">
    <Header />

    <router-view v-slot="{ Component, route }">
      <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
.principal-container {
  display: flex;
  flex-direction: column;
  padding: 30px 30px 30px 30px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #1599aaaf;
}
</style>
