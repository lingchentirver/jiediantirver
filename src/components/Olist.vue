<!--
 * @Author: your name
 * @Date: 2019-11-11 09:50:27
 * @LastEditTime: 2019-11-11 11:46:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Olist.vue
 -->

<template>
    <div class="box">
        <div class="box1">
            <div class="top">
                <div class="center">
                    <img src="../assets/img/biao01.jpg" alt="">
                    <p>旅行</p>
                </div>
                <div class="center1">
                    <p>待付款</p>
                </div>
            </div>
            <div class="box2">
                 <div class="top1">
                     <div class="bottom">
                         <p>醉美太白|康养太白·养生温泉+住<br>星级酒店+品"段不老"山珍药膳...</p>
                     </div>
                     <div class="bottom1">
                         <p>398&nbsp;CEEC</p>
                     </div>
                 </div>
                 <div class="top2">
                     <p>2019-11-12西安市出发&nbsp;&nbsp;&nbsp;2天1夜行程</p>
                 </div>
            </div>
            <div class="box3">
                <button class="a">00:29:48&nbsp;去支付</button>
                <button class="b">取消订单</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    width:3.4rem;
    height:5rem;
    margin:0 auto;
    margin-top:0.12rem;
    background:#f7f7f7;
}
.box1{
    background:white;
    width:3.2rem;
    height:1.87rem;
    margin:0 auto;
    margin-top:0.12rem;
    margin-bottom:0.12rem;
}
.top{
    width:3.2rem;
    height:0.42rem;
    display:flex;
    justify-content:space-between;
}
.center{
    width:.52rem;
    height:0.16rem;
    margin:auto 0;
    display:flex;
    justify-content:space-between;
}
.center img{
    width:0.17rem;
    height:0.16rem;
    display:block;
}
.center p{
    width:0.28rem;
    height:0.16rem;
    font-size:0.14rem;
}
.center1{
    width:0.42rem;
    height:0.16rem;
    margin:auto 0;
}
.center1 p{
   font-size:0.14rem;
   color:#5db3a1;
   font-weight:600;
}
.box2{
    width:3.2rem;
    height:0.71rem;
    margin:0 auto;
    margin-bottom:0.2rem;
}
.top1{
    width:3.2rem;
    height:0.37rem;
    margin-bottom:0.12rem;
    display: flex;
    justify-content: space-between;
}
.top1 p{
    font-size:0.14rem;
    font-weight:600;
}
.bottom{
    display: inline-block;
    width:2.12rem;
    height:0.37rem;
}
.bottom1{
    display: inline-block;
    width:0.65rem;
    height:0.37rem;
}
.top2{
    width:3.2rem;
    height:0.23rem;
}
.top2 p{
    width:1.85rem;
    font-size:0.11rem;
    line-height:0.23rem;
    color:#5db3a1;
    background:#f4fafa;
}
.box3{
    width:2.27rem;
    height:0.31rem;
    margin-left:0.91rem;
    display:flex;
    justify-content: space-between;
}
.a{
    width:1.18rem;
    height:0.31rem;
    color:#5db3a1;
    background:white;
    text-align:center;
    font-size:0.11rem;
    border-radius:5px ;
    border-style:none;
    font-weight:600;
    border:1px solid #5db3a1;
}
.b{
    width:0.9rem;
    height:0.31rem;
    color:#999999;
    background:white;
    text-align:center;
    font-size:0.11rem;
    border:none;
    font-weight:600;
    border-radius:5px ;
    border:1px solid #999999;
}
</style>