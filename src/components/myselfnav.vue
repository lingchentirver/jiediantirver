<!--
 * @Author: 李太白
 * @Date: 2019-11-05 00:12:16
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-13 16:40:13
 * @Description: 
 -->

<template>
    <div class="navBox">
        <div class="nav">
            <ul class="nav1">
              <router-link to="Order">
              <li><img src="../assets/img/j5.png" alt=""><p>全部订单</p> </li>
              </router-link>
              <li><img src="../assets/img/j1.png" alt=""><p>待付款</p></li>
              <li><img src="../assets/img/j2.png" alt=""><p>待处理</p></li>
              <li><img src="../assets/img/j3.png" alt=""><p>待评价</p></li>
            </ul>
            <div class="nav2">
                <img src="../assets/img/j4.png" alt="">
            </div>
            <div class="nav3">
                <h1>必备工具</h1>
                <ul class="nav3a">
                    <li><img src="../assets/img/s.png" alt=""><p>全部订单</p> </li>
                    <li><img src="../assets/img/x.png" alt=""><p>待付款</p></li>
                    <li><img src="../assets/img/x1.png" alt=""><p>待处理</p></li>
                    <li><img src="../assets/img/x2.png" alt=""><p>待评价</p></li>
                </ul>
                <h1>常用工具</h1>
                <ul class="nav3a">
                    <li><img src="../assets/img/st.png" alt=""><p>我的收藏</p> </li>
                    <li><img src="../assets/img/st1.png" alt=""><p>购物车</p></li>
                    <li><img src="../assets/img/st2.png" alt=""><p>我的评论</p></li>
                    <li><img src="../assets/img/st3.png" alt=""><p>常用信息</p></li>
                </ul>
                <h1>商务合作与服务</h1>
                <ul class="nav3a">
                    <li><img src="../assets/img/s1.png" alt=""><p>旅行合作</p> </li>
                    <li><img src="../assets/img/s2.png" alt=""><p>商城合作</p></li>
                    <li><img src="../assets/img/s3.png" alt=""><p>票务合作</p></li>
                    <li><img src="../assets/img/s4.png" alt=""><p>我要吐槽</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.navBox{
    width: 100%;
    background-color: #f8f8f8;
}
.nav{
    width: 92%;
    height: 7rem;
    margin: 0 auto;
    overflow: hidden;
}
.nav1{
    width: 100%;
    height: .95rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: .08rem;
    text-align: center;
}

.nav1 img{
    width: .24rem;
    height: .29rem;
}
.nav1 p{
    display: block;
}
.nav2{
    width: 100%;
    height: .92rem;
    text-align: center;
}
.nav2 img{
    width: 3.3rem;
    height: .9rem;
    margin-top: .05rem;
}
.nav3{
    width: 100%;
    background-color: #ffffff;
    margin-top: .1rem;
    overflow: hidden;
}
.nav3 h1{
    font-size: .17rem;
    margin-left: .17rem;
    margin-top: .16rem;
}
.nav3a{
    width: 100%;
    height: .95rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: .08rem;
    text-align: center;
}

.nav3a img{
    width: .24rem;
    height: .29rem;
}
.nav3a p{
    display: block;
    color: #6e6e6e;
    margin-top: .1rem;
}
</style>