<template>
  <div class="header">
    <router-link
      :to="{
        name: 'search-view'
      }"
    >
      <h1>holiday time</h1>
    </router-link>

    <h2>Worldwide Public Holidays</h2>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.header {
  height: 12.5rem;
  width: 100%;
  box-sizing: border-box;
  background-image: url('../assets/julian-myles-2YGrbLlbz6Y-unsplash.jpg');
  background-position: center;
  background-size: cover;
  border-bottom: 0.25rem solid #fffbdc;
}

h2 {
  text-shadow: -0.1rem 0.1rem 0 #fffbdc;
  padding: 1rem 0 2rem 0;
}

a {
  text-decoration: none;
}
</style>
