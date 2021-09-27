<template>
    <h4>Home</h4>
    <div class="row"> 
        <div class="col s9">
            <input id="mysearch" type="text" class="search" v-model="searchinput" />
        </div>
        <div class="col s3">
            <button class="btn" @click="doSearch()">SEARCH</button>
        </div>
    </div>
    <FlickrList :results="results" />  
</template>

<script>
import FlickrList from '../components/FlickrList';

export default {
    name:"Home",
    components: {
        FlickrList,
    },
    props: {
        results: Array,
        searchinput: String,
    },
   data() {
    return {
      searchinput: ""
    }
  },
    methods: {
        doSearch(){
            this.$emit('do-search',this.searchinput)
        }
    }
}
</script>