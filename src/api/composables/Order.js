import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default function useOrders() {

    const errors = ref('')
    const router = useRouter()

    const storeOrder = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/new-order', data)
            .then(function(response){
                const status = response.data.status
                const OrderNo = response.data.OrderNo
                console.log(response)

                if (status == 'success') {
                    router.push({name: 'success', params: { OrderNo: OrderNo} })
                }else{
                    router.push({name: 'error' })
                }
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
                router.push({name: 'Welcome'})
            }
        }
    }

    return {
        errors,
        storeOrder
    }
}