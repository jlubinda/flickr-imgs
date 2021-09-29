<template>
    <div class="card hoverable">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="res.media.m">
        </div>
        <div class="card-content">
            
            <span class="card-title activator grey-text text-darken-4" v-if="res.title.length<30">{{ res.title }}<i class="material-icons right">more_vert</i></span>
            <span class="card-title activator grey-text text-darken-4" v-else>{{ res.title.substring(0,30)+".." }}<i class="material-icons right">more_vert</i></span>

            <p><a :href="res.link" target="_new">Open on Flickr</a></p>
        </div>
        <div class="card-reveal">
            <span id="flickr_title" class="card-title grey-text text-darken-4">{{ res.title }}<i class="material-icons right">close</i></span>
            <span v-html="res.description"></span>
            <p id="date_taken"><b>Date Taken:</b> {{ res.date_taken }} </p>
            <p id="published"><b>Date Published:</b> {{ res.published }} </p>
            <p id="author"><b>Author:</b> {{ res.author }} </p>
            <p id="tags"><b>Tags:</b> {{ res.tags }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleImage",
    props: {
        res: Object,
    }
}
</script>