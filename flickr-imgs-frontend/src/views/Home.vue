<template>
    <h3>Welcome to Flickr IMGs</h3> <hr>
    <FlickrList results="results" />
</template>

<script>
import FlickrList from '../components/FlickrList';

export default {
    components: {
        FlickrList,
    },
    props: {
        results: Array,
    },
}
</script>