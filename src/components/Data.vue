<template>
  <div class="todo">
    <h2>{{ dataTodos }}</h2>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from '@vue/composition-api'

export default {
  name: 'dataTodos',
  components: {},
  data () {
    const dataTodos = ref([
      // { id: '1', name: 'Work 1', completed: 'pendding' },
      // { id: '2', name: 'Work 2', completed: 'completed' },
      // { id: '3', name: 'Work 3', completed: 'not completed' }
    ])
    const getAllData = async () => {
      try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
        // console.log(result.data)
        dataTodos.value = result.data
      } catch (error) {
        console.log(error)
      }
    }
    getAllData()
    return {
      dataTodos
    }
  }
}
</script>
