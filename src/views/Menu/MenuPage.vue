<template>
<div class="page fade-in">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
            <div class="col-3">
                <div class="navbar-brand">Restaurant <sup> APP</sup></div>
            </div>
            <div class="col">
                <div class="navbar-text">Wybierz coś dla siebie</div>
            </div>
        </div>
    </nav>
    <div class="row contentPage">
        <div class="col-3 shadow categoryBox">
            <div class="card px-3" v-for="Category in Categories" :key="Category.id" 
                v-on:click="changeMeals(Category.id)" >
                <img :src="'http://localhost/images/category/' + Category.Photo" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">{{ Category.Name }}</h5>
                </div>
            </div>
        </div>
        <div class="col-9 shadow mealsBox">
            <div class="row p-3">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="Meal in MenuByCategory" :key="Meal.MealId">
                    <div class="card card-body shadow m-2 pointer mealCard" v-on:click="viewMeal(Meal)">
                        <img src="http://localhost/images/meals/Burger-S.png">
                        <p class="mb-0 text-start">{{ Meal.Name }}</p>
                        <p class="mb-0 text-end"><strong>{{ Meal.Price }} zł</strong></p>
                    </div>
                </div>
            </div>
            <Footer 
            :type="type"/>
        </div>
        <AddProductsToCart 
        :meal="meal"
        :active="active.view_meals"
        v-on:close-meal-details="closeMealsDetails()"/>
    </div>
</div>
</template>

<script>
    import useCategory from "../../api/composables/Category"
    import useMenu from "../../api/composables/Menu"
    import { onMounted } from "vue"
    import AddProductsToCart from "../../components/Products/AddProductsToCart"
    import Footer from "../../components/MenuPage/Footer"
    
    export default {
        props: {
            type: {
                required: true,
                type: String
            },
            category: {
                required: true,
                type: String
            },
        },
        components: {
            AddProductsToCart,
            Footer,
        },
        data () {
            return {
                meal: null,
                active: {
                    view_meals: false
                }
            }
        },
        setup(props) {
            const { Menu, getMenuByCategory, MenuByCategory } = useMenu()
            const { getCategories, Categories } = useCategory()


            onMounted(getCategories)
            onMounted(getMenuByCategory(props.category))

            const changeMeals = (id) => {
                getMenuByCategory(id);
            }

            return {
                Menu,
                Categories,
                changeMeals,
                MenuByCategory,
            }
        },
        methods: {
            viewMeal(thisMeal){
                this.meal = thisMeal
                this.active.view_meals = true
            },
            closeMealsDetails(){
                this.active.view_meals = false
            }
        }
    }
</script>

<style>

.contentPage{
}

.page{
    height: 100vh;
    background: rgb(218, 218, 218); 
}

.mealCard:hover{
    animation-name: example;
    animation-duration: 0.2s;
    animation-fill-mode: both;
}

@keyframes example {
  from {transform: scale(1);}
  to {transform: scale(1.05);}
}

.pointer{
    cursor: pointer;
}
.categoryBox, .mealsBox{
    overflow: auto;
    height:100vh;
    border-right: 1px solid green;
    padding: 3.5rem 0;
    
}

.categoryBox{
    background: rgb(255, 255, 255);
}

.fade-in{
    animation-name: fade-in;
    animation-duration: 0.6s;
    animation-delay: 0.2s;
    animation-fill-mode: both;
}

@keyframes fade-in {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}

/* width */
::-webkit-scrollbar {
  width: 2px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>