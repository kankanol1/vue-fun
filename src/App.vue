<template>
<!--    <div>-->
<!--        <div class="init">-->
<!--            <HeadBar />-->
            <div id="app">
                       <!-- <div id="nav">
                            <router-link to="/">Home</router-link>
                            |
                            <router-link to="/about">About</router-link>
                        </div>-->
                <router-view/>
            </div>
<!--            <FootBar class="footer" />-->
<!--        </div>-->
<!--    </div>-->
</template>
<script>
    export default {
        name: 'App',

    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
        padding: 0;

        height: 100%;
    }
    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    html, body {
        padding: 0;
        margin: 0;
        height: 100%;
    }
    body{
        /*background-image: url("./assets/bg.jpg");*/
    }








</style>
