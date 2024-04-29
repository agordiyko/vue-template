<template>
    <footer class="footer">
        <div class="container">
            <div class="navbar-content">
                <router-link to="/" class="navbar-logo">Logo</router-link>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
    import {app, links} from '@/_config';
    export default {
        data () {
            return {
                title: app.title,
                links,
            }
        }
        // props: {
        //     links: {
        //         type: Array,
        //         // required: true,
        //         default() {
        //             return [
        //                 {
        //                     title: 'Home',
        //                     alias: 'home',
        //                     url: '/',
        //                 },
        //             ]
        //         },
        //     }
        // }
    }
</script>