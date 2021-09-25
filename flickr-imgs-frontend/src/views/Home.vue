<template>
    <div class="row"> 
        <div class="col s12">
            <input id="mysearch" type="text" class="search" v-model="searchinput" />
            <button class="btn" @click="fetchResults()">SEARCH</button>
        </div>
    </div>
    <FlickrList results="results" />  
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
    },
}
</script>