<template>
    <div class="home fade-in">
        <OrderTypeCard/>

    </div>
</template>

<script>

import OrderTypeCard from '@/components/WelcomePage/OrderTypeCard.vue'

export default {
    name: 'Welcome',
    components: {
        OrderTypeCard
    }
}
</script>
