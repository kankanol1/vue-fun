<template>
    <div id="outBox">
        <HeadBar class="head" />
        <h3>{{$route.query.title}}-{{$route.query.content}}</h3>
        <Contents class="content" />
        <FootBar class="foot" />
    </div>

</template>

<script>

    export default {
        name: 'mainPage',
    };
</script>


<style scoped lang="scss">

    html, body {
        padding: 0;
        margin: 0;

    }
    #outBox {
        position: relative;
        padding: 50px 0;
        .head {
            position: fixed;
            width: 100%;
            top: 0;
        }
        .foot {
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    }


</style>
