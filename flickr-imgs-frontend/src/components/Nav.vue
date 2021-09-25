<template>
    <nav class="indigo darken-1 z-depth-4">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo"> &nbsp;Flickr IMGs</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about-us">About Us</router-link></li>
                <li><router-link to="/contact-us">Contact Us</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
}
</script>