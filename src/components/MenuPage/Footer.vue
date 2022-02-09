<template>
    <div class="footer">
        <div class="card card-body rounded-0 py-2 text-start">
            <div class="row">
                <div class="col-3">
                    {{ $store.state.sum }} zł
                </div>
                <div class="col">
                    <div class="d-flex justify-content-end">
                        <router-link :to="{ name: 'Welcome' }" class="no-style-link text-dark">
                            <button class="btn btn-light border-dark btn-sm mx-1"
                            @click="$store.commit('clearStore')">Anuluj zamówienie</button>
                        </router-link>
                        <router-link v-if="$store.state.cart.length !== 0" :to="{ name: 'SummaryOrder', params: { type: type } }" class="no-style-link text-dark">
                            <button class="btn btn-success btn-sm mx-1">Zakończ zamówienie</button>
                        </router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['type']
}
</script>

<style>
.footer{
    position: fixed;
    bottom: 0;
    width: 75%;
}
</style>