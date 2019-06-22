<template>
    <div id="foot">
        <ul>
            <li v-on:click="changeColor(0)" >
                <router-link  :to="{path:'/shouye',query:{title:'首页',content:'首页内容在此'}}">首页</router-link>
            </li>
            <li v-on:click="changeColor(1)">
                <router-link    :to="{path:'/find',query:{title:'发现',content:'发现内容在此'}}">发现</router-link>
            </li>
            <li v-on:click="changeColor(2)" >
                <router-link :to="{path:'/my',query:{title:'我的',content:'我的内容在此'}}">我的</router-link>
            </li>
            <li v-on:click="changeColor(3)" >
                <router-link :to="{path:'/myset',query:{title:'设置',content:'设置内容在此'}}">设置</router-link>
            </li>
            <div style="clear: both"></div>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num:0,
            }
        },
        mounted(){
            this.changeColor(this.num);
        },

        watch: {
            '$route' (to, from) {
                // 对路由变化作出响应...
                // console.log(to,from);
            }
        },
        methods:{
            changeColor(num){
                this.num = num;
                let oLi = document.querySelectorAll("li");
                for(let i=0;i<oLi.length;i++){
                    oLi[i].lastElementChild.classList = '';
                }
                oLi[num].lastElementChild.classList = "color";
            }
        }
    };
</script>

<style scoped lang="scss">
    ul {
        list-style: none;
        background-color: cornflowerblue;
        padding: 0;
        margin:0;
        li {
            float: left;
            width: 25%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #000;
            padding: 0;
            margin: 0;

            .color{
                color: #fff;
            }
            a {
                
                text-decoration: none;
            }
        }
    }
    #foot{
        position: relative;
        bottom: 0;
    }
</style>