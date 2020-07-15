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
          class="search-button"
          :to="{
            name: 'results-view',
            params: { countryCode: selected.key }
          }"
          >SEARCH
        </router-link>
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
h1 {
  padding: 1rem;
  color: #035c6c;
}
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
  display: block;
  margin: 3rem auto;
  width: 120px;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  background: linear-gradient(
    0deg,
    #ffc45f7b 0%,
    #ff97567b 40%,
    #f577517b 100%
  );
  border-radius: 0.2rem;
  border: 2px solid #fffbdc;
  color: #454545;
  text-decoration: none;
}
.search-button:hover {
  background: linear-gradient(
    180deg,
    #ffc45f7b 0%,
    #ff97567b 40%,
    #f577517b 100%
  );
}
</style>
