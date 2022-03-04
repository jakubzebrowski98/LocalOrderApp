<template>
<div class="background" :class="{show: active, close: !active}" v-if="meal">
    <div class="col-9 col-xl-6 productDetails" v-if="meal" :class="{show: active, close: !active}">
        <div class="card card-body shadow m-2">
            <div class="d-flex justify-content-end">
                <button class="btn btn-success btn-sm px-3" @click="$emit('close-meal-details')">
                    x
                </button>
            </div>
            <div class="d-flex justify-content-center">
                <img class="meal-img" :src="require(`../../assets/meals/${meal.Category}.png`)">
            </div>
            <p class="">{{ meal.Name }}</p>
            <div class="d-flex justify-content-center mb-3">
                <button class="btn btn-success btn-sm px-4"
                v-on:click="decQuantity()" :disabled="quantity == 1">
                    -
                </button>
                <div class="mx-4 pt-1">
                    {{ quantity }}
                </div>
                
                <button class="btn btn-success btn-sm px-4 "
                v-on:click="incQuantity()">
                    +
                </button>
            </div>
            <div class="d-flex justify-content-center mb-3">
                <button class="btn btn-light btn-sm px-5 shadow border border-dark"
                @click="addToCart(meal);$emit('close-meal-details')">
                    Dodaj do koszyka
                </button>
            </div>

        </div>
    </div>
</div>
    
</template>

<script>


export default {
    props: ['meal', 'active'],
    data() {
        return {
            quantity: 1,
            disabled: true
        }
    },
    methods: {
        addToCart(meal){
            this.$store.commit('addToCart', {meal, quantity: this.quantity});
            this.quantity = 1
        },
        incQuantity(){
            this.quantity++
        },
        decQuantity(){
            if(this.quantity > 1){
                this.quantity--
            }
        }
    }
}
</script>

<style>
    .productDetails{
        z-index: 21;
        position:fixed;
        display: none;
        -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
           -moz-animation: fadein 0.5s; /* Firefox < 16 */
            -ms-animation: fadein 0.5s; /* Internet Explorer */
             -o-animation: fadein 0.5s; /* Opera < 12.1 */
                animation: fadein 0.5s;
    }

    .background{
        background-color: rgba(0, 0, 0, 0.253);
        width: 74.9vw;
        right: 0;
        z-index: 20;
        height: 100vh;
        position:fixed;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    .show{
        display: flex;
    }
    .productImg{
        width: 50%;
    }

    @keyframes fadein {
        from { opacity: 0;transform:translateY(100vh) }
        to   { opacity: 1; }
    }

    .close{
        -webkit-animation: fadeout 0.5s; /* Safari, Chrome and Opera > 12.1 */
           -moz-animation: fadeout 0.5s; /* Firefox < 16 */
            -ms-animation: fadeout 0.5s; /* Internet Explorer */
             -o-animation: fadeout 0.5s; /* Opera < 12.1 */
                animation: fadeout 0.5s;
        animation-fill-mode: both;
    }
    @keyframes fadeout {
        0% { 
            opacity: 1; 
        }
        100% {
            opacity: 0;
            transform:translateY(100vh)
        }
    }
</style>
