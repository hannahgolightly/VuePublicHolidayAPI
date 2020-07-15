<template>
  <div class="container">
    <h3>Select a country...</h3>

    <SearchPanel :countries="countries" />
    <NextHolsPanel />
    <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
  </div>
</template>

<script>
import SearchPanel from '@/components/SearchPanel.vue'
import HolidayService from '@/services/HolidayService.js'
import NextHolsPanel from '@/components/NextHolsPanel.vue'

export default {
  components: {
    SearchPanel,
    NextHolsPanel
  },
  data() {
    return {
      countries: []
    }
  },
  created() {
    HolidayService.getCountries()
      .then(response => {
        this.countries = response.data
      })
      .catch(error => {
        console.log('There was an error' + error.response)
      })
  }
}
</script>

<style scoped>
.container {
  background: linear-gradient(
    45deg,
    #ffc45f7b 0%,
    #ff97567b 40%,
    #f577517b 100%
  );
  background-color: #fff6e8;
  min-height: 90vh;
  margin-top: 0rem;
  padding: 0;
}

h3 {
  padding: 3rem 0;
}
</style>
