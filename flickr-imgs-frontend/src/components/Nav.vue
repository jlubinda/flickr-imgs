<template>
    <nav class="indigo darken-1 z-depth-4">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo"> &nbsp;flickr-imgs</router-link>
            <ul id="nav-mobile" class="right ">
                <li><router-link id="nav_home" to="/">Home</router-link></li>
                <li><router-link id="nav_about" to="/about-us">About Us</router-link></li>
                <li><router-link id="nav_contact" to="/contact-us">Contact Us</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
}
</script>