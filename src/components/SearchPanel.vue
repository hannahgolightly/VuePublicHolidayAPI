<template>
  <div>
    <div class="panel">
      <form>
        <select
          v-model="selected"
          name="selected"
          placeholder="select country"
          class="country-select"
        >
          <option
            v-for="country in countries"
            :key="country.key"
            :value="country"
            required
            >{{ country.value }} ( {{ country.key }} )</option
          >
        </select>
        <router-link
          class="button search-button"
          :to="{
            name: 'results-view',
            params: { countryCode: selected.key }
          }"
          >SEARCH</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countries: Array
  },
  data() {
    return {
      selected: { key: '' }
    }
  }
}
</script>

<style lang="css" scoped>
.panel {
  width: 60%;
  height: auto;
  background-color: #fff1e6c1;
  margin: 0 auto 7rem auto;
  padding: 4.5rem 1rem;
}
.country-select {
  width: 15rem;
  height: 2.5rem;
  font-family: inherit;
  padding: 0.4rem;
  box-sizing: border-box;
}

.search-button {
  margin: 4.5rem auto 0 auto;
}
</style>
