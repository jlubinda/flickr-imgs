<template>
  <Header />
  
  <main :style="{'min-height': myScreenHeight()}" class="container white lighten-1">
    <div class="col s12 white lighten-1 ">
      <div class="row"> 
        <div class="col s12">
          <input id="mysearch" type="text" class="search" v-model="searchinput" />
          <button class="btn" @click="fetchResults()">SEARCH</button>
        </div>
        </div>
              <div class="row">
          <div class="col s12">
            <router-view results="results"></router-view>
          </div>
        </div>
    </div>
  </main>
  <Footer />
</template>


<script>
import Header from './components/Header';
import Footer from './components/Footer';
import 'materialize-css';

const M = require('materialize-css');

export default {
  mounted () {
      M.AutoInit()
  },
  name: 'App',
  components: {
    Header,
    Footer,
  },
  methods:{
    myScreenHeight(){
      var height1 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      
      if(height1<200){
        return   "200px"
      }
      else
      {
        return (height1-200)+"px";
      }

    },
  data() {
    return {
      searchinput: "",
      results: []
    }
  },
    async fetchResults(){
      var myinput;
      
      if(this.searchinput)
      {
        myinput = "/"+this.searchinput;
      }
      else
      {
        myinput = '';
      }

      const res = await fetch('http://localhost:3000/list'+myinput)

      const data = await res.json()

      console.log(data)

      return data
    }
  },
  async created(){
    this.results = await this.fetchResults()
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
</style>
