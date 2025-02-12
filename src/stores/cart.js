import { defineStore } from 'pinia'

// named export called useCart
export const useCart = defineStore('cart-store', {
  state: () => {
    return {
      cart: []
    }
  },

  getters: {
    // from `cart` array, return a `contents` array that combines same books together and increase the quantity
    getContents(state) {
      const {cart} = state;

      return cart.reduce((contents, item) => {
        // iterate through contents array, check if item already exists in contents or not
        const index = contents.findIndex(added => added.isbn13 === item.isbn13);
        // if the item already exists in contents, increment its quantity by 1
        if (index > -1 ) {
          ++contents[index].quantity;

          return contents;
        }
        // if the item doesnt exist, set the quantity to 1 and push the item to contents array
        item.quantity = 1;
        contents.push(item);

        return contents;
      }, []);
    },

    count(state) {
      return state.cart.length;
    },

    // calculate the total value from `cart` array, not `contents` array
    total(state) {
      const {cart} = state;

      return cart.reduce((total, item) => {
        total = total + item.price;

        return total;
      }, 0);
    }
  },

  actions: {
    // same book also gets added to `cart`
    addToCart(book) {
      this.cart = this.cart.slice(0);
      this.cart.push(book);
    },
    removeFromCart(book) {
      let bookId = this.cart.findIndex(added => added.isbn13 === book.isbn13);
      this.cart.splice(bookId, 1);
    },
    removeAllFromCart(book) {
      while (this.cart.findIndex(added => added.isbn13 === book.isbn13) !== -1) {
        this.removeFromCart(book);
      }
    },
  }
})
