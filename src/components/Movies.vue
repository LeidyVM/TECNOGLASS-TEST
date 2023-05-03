<script setup>
import Movie from "./Movie.vue";
const props = defineProps({
  movies: Array,
});
console.log(props);
</script>

<template>
  <div class="principal-card">
    <div class="card" v-for="movie in movies" :key="movie.imdbID">
      <Movie :movie="movie" />
    </div>
  </div>
</template>

<style>
.principal-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px 20px;
  flex-wrap: wrap;
}

.card {
  width: 202px;
  padding: 10px;
  border-radius: 9px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}



@media (min-width: 861px) {
  .detail {
    gap: 50px;
    flex-direction: row;
    margin-bottom: 40px;
  }
}
</style>