<template class="grey lighten-2">
  <Header />
  
  <main :style="{'min-height': myScreenHeight()}" class="container grey lighten-2">
    <div class="col s12 white lighten-1 ">
        <div class="row">
          <div class="col s12">
            <router-view @do-search="fetchResults" :results="myresults"></router-view>
          </div>
        </div>
    </div>
  </main>
  <Footer />
</template>


<script>
import Header from './components/Header';
import Footer from './components/Footer';
import axios from "axios";

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
        return   "135px"
      }
      else
      {
        return (height1-135)+"px";
      }

    },
    async fetchResults(myinputx=''){
      let myinput;
      if(myinputx)
      {
        //myinput = "/"+encodeURI(myinputx);
        //myinput = "/"+myinputx;
        myinput = "/"+myinputx.split(' ').join(',');
      }
      else
      {
        myinput = '';
      }

      let url = 'http://localhost:3000/list'+myinput

      console.log(url)

      const response = await fetch(url)

      this.myresults = await response.json()
    }
  },
   data() {
    return {
      searchinput: "",
      myresults: []
    }
  },
  created(){
    this.fetchResults()
  }
}

</script>
