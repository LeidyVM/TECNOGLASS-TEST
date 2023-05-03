<script setup>
</script>
<template>
  <div class="main-title">
    <router-link to="/">
      <h1 class="text-xl font-semibold tracking-wider text-gray-200 md:text-2xl">
        TEST TECNOGLASS
      </h1>
    </router-link>

    <router-link to="/fav" class="flex text-red-200 items-center cursor-pointer">

      <span class="text-lg text-movie">Favorite Movies</span>
    </router-link>
  </div>
</template>
<style>

.main-title {
  display: flex;
  gap: 30px;
}

.text-movie {
  font-size: 1.5rem;
}

</style>