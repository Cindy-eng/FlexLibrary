<script setup>
import TopNavbar from '@/components/TopNavbar.vue';
import {useCart} from '@/stores/cart.js'
import Footer from '@/components/Footer.vue';
</script>

<template>
  <TopNavbar />
  <div class="container mx-auto flex h-full flex-col bg-white shadow-xl mb-6">
    <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
      <div class="mt-8">
        <div class="flow-root">
          <ul role="list" class="-my-6 divide-y divide-gray-200" v-for="(bookDetail, index) in cartContents" :key="index">
            <li class="flex py-6">
              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img :src="bookDetail.image" class="h-full w-full object-cover object-center">
              </div>

              <div class="ml-4 flex flex-1 flex-col">
                <div>
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#"> {{ bookDetail.title }} </a>
                    </h3>
                    <p class="ml-4">${{ bookDetail.price }}</p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500">{{ bookDetail.author }}</p>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <p class="text-gray-500">Qty: {{ bookDetail.quantity }}</p>

                  <div class="flex">
                    <button type="button" @click="removeAllFromCart(bookDetail)" class=" mr-2 font-medium text-indigo-600 hover:text-indigo-500" v-if="bookDetail.quantity > 1">Remove All</button>
                    <button type="button" @click="removeFromCart(bookDetail)" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="count" class="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div class="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>${{ total.toFixed(2) }}</p>
      </div>
      <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
      <div class="mt-6">
        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
      </div>
      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or <router-link class="font-medium text-indigo-600 hover:text-indigo-500" to="/">Continue Shopping<span aria-hidden="true"> &rarr;</span></router-link>
        </p>
      </div>
    </div>

    <div v-else class="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div class="flex justify-center text-center text-sm text-gray-500">
        <p>
          You cart is empty! Let <router-link class="font-medium text-indigo-600 hover:text-indigo-500" to="/">add some books</router-link> first
        </p>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style></style>

<script>
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    TopNavbar,
    Footer,
  },

  computed: {
    ...mapState(useCart, {
      cartContents: 'getContents',
      count: 'count',
      total: 'total',
    })
  },

  methods: {
    // use `removeFromCart` and `removeAllFromCart` actions as methods property with same name
    ...mapActions(useCart, [
      'removeFromCart',
      'removeAllFromCart',
    ])
  },

  mounted() {
  },
  
  data() {
    return {
    };
  },
};
</script>