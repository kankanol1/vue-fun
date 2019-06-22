<template>
    <div id="head" class="head">
        <span class="title-left"><router-link to="/"> 返回 </router-link></span>
        <span class="title-mid">{{$route.query.title}}</span>
        <span class="title-right"></span>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            default: '默认标题',
            required: true,
        },
        /*data(){
            return{
                title:'病原狼',
            };
        },*/
    };
</script>

<style scoped lang="scss">

    #head {
        background-color: black;
        padding: 5px;
        height: 40px;
        color: #fff;
        position: relative;

        .title-left {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            width: 15%;
            position: relative;
            left: 0;
            a {
                display: inline-block;
                height: 40px;
                line-height: 40px;
                color: #fff;
                text-decoration: none;
                font-size: 18px;

            }
        }

        .title-mid {
            display: inline-block;
            width: 70%;
            height: 40px;
            line-height: 40px;
            color: #eee;
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-size: 20px;
        }
        .title-right{
            display: inline-block;
            width: 15%;
        }

    }
</style>