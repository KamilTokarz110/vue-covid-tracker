<template>
  <div class="home">Hellow World</div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    async featchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    const data = await this.featchCovidData();
    console.log(data);
  },
};
</script>
