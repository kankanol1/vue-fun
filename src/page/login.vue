<template>
    <div id="login">
<!--        <HeadBar></HeadBar>-->
<!--        <FootBar></FootBar>-->
<div class="bg">
    <div class="l-content">
        <div class="l-title">你好，冰原狼！</div>
        <div class="input">
            <label>姓名：</label>
            <input v-model="name" type="text" placeholder="请输入用户名"/>
        </div>
        <div class="input">
            <label>密码：</label>
            <input v-model="pwd" type="password" placeholder="请输入密码"/>
        </div>
        <p class="cook">
            <span>帮助</span>
            <input type='checkbox' class='input-checkbox' v-model='checked' >
<!--            <checkbox v-model="checked"  style="height: 10px;width: 10px"></checkbox>-->

            一周内自动登录
        </p>
        <button v-on:click="isOK">
            点击登录
        </button>
<!--        <p v-on:click="getCookie(usename)">sdf</p>-->
    </div>

</div>

    </div>
</template>

<script>
    // import axios from 'axios';
    export default {
        data() {
            return {
                name: '',
                pwd: '',
                checked:true,
            }
        },
        mounted(){

        },
        methods: {
            isOK() {
                if (this.name === 'admin' && this.pwd === 'admin') {
                    this.$router.push({
                        name: 'mainPage',
                        query: {title: '首页', content: '首页内容在此'}
                    });
                } else {
                    alert('用户名或密码错误');
                }
               /* this.$axios({
                    method: "post",
                    url: login,
                    data: {
                        name: 'admin',
                        pwd: 'admin'
                    }
                })
                    .then(({data}) => {
                        console.log(data);
                        if (data.message === "success") {
                            this.$cookies.set("status", "logined", 30 * 60); // 设置cookie中存放的生命周期
                            let redirect = decodeURIComponent(
                                this.$route.query.redirect || "/mainPage"
                            );
                            this.$router.push({path: redirect});
                            this.$message({
                                title: '提示',
                                type: 'success',
                                message: '登录成功！'
                            });
                        } else {
                            this.$message({
                                title: '提示',
                                type: 'info',
                                message: '用户名或密码错误！请重新登录！'
                            });
                        }
                    });
*/
            },


        },
    };

</script>

<style lang="scss" scoped>

    #login{
        /*background-size: 100% 100%;*/
        height: 100%;
        overflow: hidden;
        .bg{
            height: 100%;
            background-image: url("../assets/bg.jpg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            .l-content{
                /*margin-top: 50%;*/
                padding: 20% 12%;
                .l-title{
                  font-size: 24px;
                    padding: 10px 0 100px 0;
                    color: #fff;
                }
                .input{
                    margin: 20px 0;
                    label{
                        font-size: 20px;
                        color: #fff;
                    }
                    input{
                        font-size: 20px;
                        padding: 0 5px;
                        outline: none;
                        width: 200px;
                    }
                }
                .cook{
                    font-size: 18px;
                    color: #fff;
                    input{
                        width: 20px;
                        height: 20px;
                        float:right;
                    }

                }
                button{
                    margin-top: 10px;
                    font-size: 20px;
                }
            }

        }

    }

</style>