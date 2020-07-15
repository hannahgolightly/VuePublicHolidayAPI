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
form {
  padding: 1rem;
}
.panel {
  width: 60%;
  height: auto;

  background-color: #fff1e6c1;
  margin: 3rem auto 8rem auto;
  /* border: 3px solid #fffbdc; */
  padding: 3.5rem 1rem 3rem 1rem;
}
.country-select {
  width: 250px;
  height: 40px;
  font-family: inherit;
  padding: 0.4rem;
  margin: 1rem 0;
}

.search-button {
  margin: 3rem auto;
}
</style>
