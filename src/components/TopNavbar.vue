<script setup>
import {useCart} from '@/stores/cart.js'
</script>

<template>
	<router-link class="shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" :class="{'bg-gray-100 text-gray-900' : isActive('')}" to="/">Home</router-link>
	<router-link class="shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" :class="{'bg-gray-100 text-gray-900' : isActive('cart/')}" to="/cart/">
		Cart
		<span class="rounded bg-gray-300 px-2">{{count}}</span>
	</router-link>
	<div class="relative inline-block text-left">
	  <div>
	    <button @click="toggleMenu" type="button" class="inline-flex justify-center w-full shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
	      User
	      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
	        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
	      </svg>
	    </button>
	  </div>

	  <div v-show="showMenu" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
	    <div class="py-1" role="none">
	      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
	      <router-link class="text-gray-700 block px-4 py-2 text-sm" :class="{'bg-gray-100 text-gray-900' : isActive('sign-in/')}" to="/sign-in/" id="menu-item-0">Sign In</router-link>
	      <router-link class="text-gray-700 block px-4 py-2 text-sm" :class="{'bg-gray-100 text-gray-900' : isActive('sign-up/')}" to="/sign-up/" id="menu-item-1">Register</router-link>
	      
	    </div>
	  </div>
	</div>
</template>

<script>
import { mapState } from 'pinia'

export default {
	data() {
		return {
			showMenu: false,
		};
	},
	computed: {
		...mapState(useCart, {
			count: 'count'
		})
	},
	methods: {
		toggleMenu() {
			this.showMenu = !this.showMenu;
		},
		isActive(url) {
			return window.location.pathname === (APP_BASE_URL + url);
		},
	}
}	
</script>