<script setup>
import TopNavbar from '@/components/TopNavbar.vue';
import NewArrivals from '@/components/NewArrivals.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <TopNavbar />
  <NewArrivals />
  <Footer />
</template>
<style></style>

<script>
export default {
  components: {
    TopNavbar,
    NewArrivals,
    Footer,
  },

  computed: {},
  
  mounted() {
  },
  
  data() {
    return {
    };
  },
};
</script>