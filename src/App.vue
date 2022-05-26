<template>
  <div id="app">
    <div class="create-shop">
       <!-- <create-shop /> -->
       <router-link to="/">Base</router-link> |
       <router-link to="/home">Home</router-link> |
       <router-link to="/data">Data</router-link>
       <router-view/>
    </div>
    <!-- <div class="list-shop-in-map">
       <map-ninja />
    </div> -->
  </div>
</template>

<script>
import Data from './Data'
// import CreateData from './CreateData'

export default {
  name: 'App',
  components: {
    Data
  }
}
</script>
