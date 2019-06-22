<template>
    <div id="contents">
        <img src="../assets/logo.png" alt="">
        <div class="contents">
            {{contents}}
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            contents: String,
            required: true,
            default: '默认内容',
        },
    };
</script>

<style scoped lang="scss">
    #contents {
        width: 100%;
        text-align: center;

        img {
            width: 200px;
            height: 200px;
        }

        div {
            background: pink;
            font-size: 30px;
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        }
    }
</style>