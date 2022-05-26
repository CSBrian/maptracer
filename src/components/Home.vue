<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>Essential Links</h2> -->
    <div>
      <gmap-map :center="center" :zoom="13" style="width: 100%; height: 520px">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center = m.position"
        ></gmap-marker>
        <gmap-autocomplete class="form-control" @place_changed="setAddress">
        </gmap-autocomplete>
      </gmap-map>
    </div>
  </div>
</template>

<script>
// import datas from '../assets/data.json'
// test show maps ok

// export default {
//   name: 'Map',
//   data () {
//     return {
//       center: { lat: 55.3010398, lng: 25.2432105 },
//       currentPlace: null,
//       datas: []
//     }
//   }

// call API get data to show maps
import {axios} from 'axios'
import { ref } from '@vue/composition-api'
export default {
  name: 'Map',
  // components: {},
  data () {
    const dataLatLng = ref([])
    const getDataLatLng = async () => {
      try {
        const result = await axios.get(`http://15.206.179.12:5000/api/v1/ninja/buckets/K2021162109BN4`)
        console.log(result.data)
        dataLatLng.value = result.data
      } catch (error) {
        console.log(error)
      }
    }
    getDataLatLng()
    return {
      // center: { lat: dataLatLng.latitude, lng: dataLatLng.longitude },
      center: { lat: 55.3010398, lng: 25.24321050 },
      currentPlace: null
      // dataLatLng
    }
  }
  // ,
  // computed: {
  //   markers () {
  //     return datas.map(
  //       ({ names, coordinates: { longitude, latitude }, address }) => ({
  //         names: {
  //           names,
  //           color: '#333',
  //           fontSize: '10px'
  //         },
  //         address,
  //         position: {
  //           lat: latitude,
  //           lng: longitude
  //         }
  //       })
  //     )
  //   }
  // }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
