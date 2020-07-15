<template>
  <div>
    <div class="grid-container header">
      <div>Date</div>
      <div>
        Name of holiday<br />
        (local name)
      </div>
      <div>Name of holiday</div>
      <div>Global holiday?</div>
      <div>Counties</div>
      <div>Holiday type</div>
    </div>
    <div
      class="grid-container"
      v-for="(holiday, index) in holidays"
      :key="index"
    >
      <div>{{ holiday.date }}</div>
      <div>{{ holiday.localName }}</div>
      <div>{{ holiday.name }}</div>
      <div v-if="holiday.global">&nbsp;&#10004;&nbsp;</div>
      <div v-else>&nbsp;&#10007;&nbsp;</div>
      <div>
        <span v-for="(county, index) in holiday.counties" :key="index">
          {{ county }}
        </span>
      </div>
      <div>{{ holiday.type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    holidays: Array
  }
}
</script>

<style lang="css" scoped>
.grid-container {
  display: grid;
  width: 80%;
  background-color: #fff1e6c1;
  margin: auto;
  grid-template-columns: 12.5% repeat(2, 25%) repeat(3, 12.5%);
}

.grid-container div {
  line-height: 1.2rem;
  margin: 0.5rem 0;
}

.header {
  font-family: 'Corben', cursive;
  font-weight: 700;
  font-size: 0.9rem;
  background-color: #b9e8e2;
}

.header div {
  padding: 0.5rem;
}

@media screen and (max-width: 1080px) {
  .header {
    font-size: 0.7rem;
  }

  .grid-container {
    width: 90%;
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 800px) {
  .header {
    font-size: 0.65rem;
  }

  .grid-container {
    width: 98%;
  }
}
</style>
