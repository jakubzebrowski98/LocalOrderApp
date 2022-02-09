import { createStore } from 'vuex'


const store = createStore({
    state: {
        cart: [],
        sum: 0,
    },
    getters: {
        getCart(state){

            return {
                meals: state.cart,
                price: state.sum
            }
        }
    },
    mutations: {
        addToCart(state, {meal, quantity}){

            let mealInCart = state.cart.find(item => {
                return item.meal.MealId === meal.MealId
            })

            if(mealInCart){
                mealInCart.quantity += quantity
                state.sum += meal.Price * quantity
                return
            }

            state.sum += meal.Price * quantity
            state.cart.push({
                meal,
                quantity
            })

        },
        deleteFromCart(state, meal){
            let mealInCart = state.cart.find(item => {
                return item.meal.MealId === meal.meal.meal.MealId
            })
            let indexOf = state.cart.indexOf(mealInCart)
            state.sum -= meal.meal.meal.Price * meal.meal.quantity
            state.cart.splice(indexOf,1)
        },
        clearStore(state){
            state.cart = [];
            state.sum = 0;
        }
    },
    actions: {

    }
})

export default store;