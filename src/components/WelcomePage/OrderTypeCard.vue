<template>
    <div class="welcome-background d-flex justify-content-center align-items-center">
        <div class="col-12 col-sm-9 col-lg-7 col-xl-5">
            <div class="card card-body text-center bg-light shadow-lg">
                <h1 class="mb-3">
                    <div class="navbar-brand-text mt-2">Restaurant <sup> APP</sup></div>
                </h1>
                <div class="row mb-5 d-flex justify-content-center">
                    <div class="col-5 mx-2">
                        <h1><i class="fas fa-shopping-bag"></i></h1>
                        <router-link :to="{ name: 'menu', params: { type: '1', category: 1  } }" class="no-style-link text-dark">
                            <div class="col-sm mb-3">
                                <div class="card border-1 shadow">
                                    <div class="col py-5">
                                        <img src="../../assets/in-restaurant.png" alt="" class="img-fluid ordertypeImg">
                                    </div>
                                    <h1 class=" my-3">
                                        Na miejscu
                                    </h1>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-5 mx-2">
                        <h1 class=""><i class="bi bi-bag"></i></h1>
                        
                        <router-link :to="{ name: 'menu', params: { type: '2',category: 1 } }" class="no-style-link text-dark">
                            <div class="col-sm">
                                <div class="card border-1 shadow">
                                    <div class="col py-5">
                                        <img src="../../assets/out-restaurant.png" alt="" class="img-fluid ordertypeImg">
                                    </div>
                                    <h1 class=" my-3">
                                        Na wynos
                                    </h1>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        setup() {

            return {
            }
        }
    }
</script>
<style>
.no-style-link{
    text-decoration: none;
}
</style>

<style scoped>
.ordertypeImg{
    width: 13vh;
    margin: 0 1rem;
}

.welcome-background{
    height: 100vh;
    padding: 1rem;
    background: rgb(255, 223, 223);
}
</style>
