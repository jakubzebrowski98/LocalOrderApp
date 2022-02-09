<template>
    <div class="page fade-in">
            <h1><div class="pt-3 mb-5">Restaurant <sup> APP</sup></div></h1>
            <div class="summaryBox mt-5">
                <div class="col-11 col-md-7 col-sm-11 col-md-10 col-lg-8 col-xl-6">
                    <h2 class="text-start">Moje zamówienie</h2>
                    <div class="row" v-for="meal in $store.state.cart" v-bind:key="meal.meal.MealId">
                        <div class="col-11">
                            <div class="card card-body shadow mb-3">
                                <div class="row">
                                    <div class="col-10 text-start">
                                        <h4 class="my-2">Posiłek: {{ meal.meal.Name }}, ilość: {{ meal.quantity }}</h4>
                                    </div>
                                    <div class="col-2 text-end">
                                        <h4 class="my-2">{{ meal.meal.Price * meal.quantity }} zł</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1 my-auto">
                            <h4 class="pointer" @click="removeFromCart(meal)"><font-awesome-icon icon="trash" /></h4>
                        </div>
                    </div>
                    
                    <h4 class="text-end mb-5">Suma zamówienia: {{ $store.state.sum }} zł</h4>
                    <div class="d-flex justify-content-center">
                        <router-link :to="{ name: 'menu', params: { type: type, category: 1 } }" class="no-style-link text-dark">
                            <button class="btn btn-light border-dark mx-2 px-4">Wróć do menu</button>
                        </router-link>
                        <button class="btn btn-success px-4 mx-2"
                        :disabled="$store.state.sum === 0"
                        v-on:click="sendOrder($store.getters.getCart); $store.commit('clearStore')">Zapłać</button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

import useOrder from "../../api/composables/Order";

export default {
    props: ['type'],
    setup(props){
        const { errors, storeOrder } = useOrder()


        const sendOrder = async (data) => {
            data.OrderType = props.type
            await storeOrder({...data})
        }

        return {
            sendOrder,
            errors
        }
    },
    methods: {
        removeFromCart(meal){
            this.$store.commit('deleteFromCart',{meal: meal})
        },
    }
}
</script>

<style scope>
    .page {
        height: 100vh;
        background: rgb(218, 218, 218); 
    }

    .summaryBox{
        display: flex;
        justify-content: center;
    }
</style>