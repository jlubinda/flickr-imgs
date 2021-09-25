<template>
    	<div class="row">
		<div class="col s12">
			<div class="row" :key="res.id" v-for="res in results">
                
				<div class="col s12 m6 l6">
          <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" :src="res.media.m">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{ res.title }}<i class="material-icons right">more_vert</i></span>
                <p><a :href="res.link" target="_new">Open on Flickr</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{ res.title }}<i class="material-icons right">close</i></span>
                @{{ res.description }}
              </div>
            </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    name: "FlickrList",
    props: {
        results: Array,
    }
}
</script>