
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default function useIngredients() {
    const Category = ref([])
    const Categories = ref([])
    const router = useRouter()
    const errors = ref('')

    const getCategories = async () =>{
        let res = await axios.get('http://127.0.0.1:8000/api/category');
        Categories.value = res.data.data;
    }
    const getThisCategory = async (id) =>{
        let res = await axios.get('http://127.0.0.1:8000/api/category/' + id);
        Category.value = res.data.data;
    }

    const storeCategory = async (data) => {

        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/category/', data)
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateCategory = async (id) => {
        errors.value = ''
        try {
            await axios.put('http://127.0.0.1:8000/api/category/' + id, Category.value)
            await router.push({name: 'meals.index'})
        } catch (e) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const destroyCategory = async (id) => {
        await axios.delete('http://127.0.0.1:8000/api/category/' + id);
    }

    return {
        Category,
        Categories,
        getCategories,
        getThisCategory,
        storeCategory,
        updateCategory,
        destroyCategory,
        errors
    }
}