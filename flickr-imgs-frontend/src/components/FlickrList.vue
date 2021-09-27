<template>
    <div class="row">
		<div class="col s12">
			<div class="col s12 m6 l6" :key="res.link" v-for="res in results">
                <SingleImage :res="res" />
			</div>
		</div>
	</div>
</template>
<script>
import SingleImage from "./SingleImage";

export default {
    name: "FlickrList",
    props: {
        results: Array,
    },
    components: {
    SingleImage,
    },
}
</script>