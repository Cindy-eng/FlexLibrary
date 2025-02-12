<script setup>
// name import called useCatalog and useCart
import {useCatalog} from '@/stores/catalog.js'
import {useCart} from '@/stores/cart.js'

</script>

<template>
  <div class="container mx-auto">
  <h1 class="text-center text-purple-800 my-6 text-6xl">New Arrivals</h1>

  <div class="grid grid-cols-2 mb-2">
    <div class="columns-1" v-for="bookDetail in newArrivals">
      <div class="border flex rounded mb-4 shadow-xl relative mx-2">
        <div class="p-4 flex flex-col static max-w-xl">
          <strong class="inline-block mb-2 text-lime-400 text-left">{{ bookDetail.category }}</strong>
          <h3 class="text-amber-700 text-left text-lg">{{ bookDetail.title }}</h3>
          <div class="mb-1 text-purple-400 text-left font-normal">{{ bookDetail.author }}</div>
          <p class="text-gray-600 text-left">{{ bookDetail.description }}</p>

          <div class="flex justify-between mt-6 mx-6">
            <span class="text-gray-400 mt-3 w-5 h-5 text-lg font-semibold mx-5" v-text="`\$${bookDetail.price}`"></span>
            <button @click="addToCart(bookDetail)" class="w-12 h-12" type="button"><img src="/icons/basket_icon.svg" alt="Add to basket"></button>
          </div>

        </div>
        <div class="col-auto block bg-white/[.8] p-2.5">
          <img class="h-64" :src="bookDetail.image" :alt="bookDetail.title + ' by ' + bookDetail.author" />
        </div>
      </div>
    </div>


  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'

// component simply use the state, getter and action from the stores
export default {
  data() {
    return {};
  },

  computed: {
    // use `results` getter as `newArrivals` computed property
    ...mapState(useCatalog, {
      newArrivals: 'results'
    })
  },

  mounted() {
    console.log('results: ', this.newArrivals)
  },

  methods: {
    // use `fetchNewArrivals` and `addToCart` actions as methods property with same name
    ...mapActions(useCatalog, [
      'fetchNewArrivals'
    ]),

    ...mapActions(useCart, [
      'addToCart'
    ])
  },

  created() {
    this.fetchNewArrivals();
  }
};
</script>