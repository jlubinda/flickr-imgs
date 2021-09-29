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

import 'materialize-css';//import Materializecss. Instead of Bootstrap, I have use Materializecss to beautify the UI.

const M = require('materialize-css'); //load Materializecss module. 

export default {
  mounted () {
      M.AutoInit() //automatically initiate Materializecss.
  },
  name: 'App',
  components: {
    Header,
    Footer,
  },
  methods:{
    
    myScreenHeight(){
      /* this method will calculate the window hieght to determine the minimum height of the UI to help make the app look good on all screens.*/ 
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
      /* this method is used to send a query for public images to flickr.com */

      let myinput; //the variable for holding tags
      if(myinputx) //check to see if the user has specified any tags
      {
        myinput = "/"+myinputx.split(' ').join(','); //spaces in user input are converted to commas, and the results populates "myinput"
      }
      else
      {
        myinput = ''; //if no user input, myinput is kept empty.
      }

      let url = 'http://localhost:3000/list'+myinput //build url for get request to node.js backend

      const response = await fetch(url) //make async "get" request

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
    this.fetchResults() // make "get" request to backend automatically when app is loaded.
  }
}

</script>
