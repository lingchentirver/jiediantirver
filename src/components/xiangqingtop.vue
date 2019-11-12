<!--
 * @Author: 李太白
 * @Date: 2019-11-05 00:12:16
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-12 11:13:35
 * @Description: 
 -->

<template>
    <div class="xingqingBox">
        <div class="fenxiang">
            <img class="leftimg" src="../assets/img/banner1a.jpg" alt="">
            <img class="rightimg" src="../assets/img/banner2a.jpg" alt="">
        </div>
        <div class="banner"> 
            <img class="bannerImg" src="../assets/img/xiangqing_banner1.jpg" alt="">
            <img class="bannerImg" src="../assets/img/xiangqing_banner2.jpg" alt="">
            <img class="bannerImg" src="../assets/img/xiangqing_banner3.jpg" alt="">
            <img class="bannerImg" src="../assets/img/xiangqing_banner4.jpg" alt="">
            <img class="bannerImg" src="../assets/img/xiangqing_banner5.jpg" alt="">
        </div>
        <div class="banner_information">
            <div class="nav">
                <h1>醉美太白|康养太白·养生温泉+住星级酒店+品“段不老”山珍药膳一票畅玩~</h1>
                <div class="dengzhi"><h2>398</h2><h3>CNY</h3><h4>起</h4><p>等值说明</p></div>
                <div class="dengzhiA"><span>等值于398 CEEC</span><span>等值于44719.1TNW</span></div>
            </div>
        </div>
        <div class="nav1">
            <div class="nav1a">
                <div class="nav1a_1">
                    <span>线路安排:</span><p>杀杀杀水水水水水水杀杀水水水水水水杀杀水水水水水水</p>
                </div>    
                <div class="nav1a_1">
                    <span>行程天数:</span><p>2222222222222</p>
                </div>    
                <div class="nav1a_1">
                    <span>集合信息:</span><div class="h5"><h5>10:10</h5><p>自驾</p></div>
                </div>    
            </div>
        </div>
    </div>
</template>
<script src="../dist/js/swiper.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    </script>
<script>
export default {
//     name:'xiangqing',
//     data () {
//     return {

//     }
//   },
//   methods{
    
//   }
}
</script>
<style scoped>
.xingqingBox{
    width: 100%;
    background: #6dc5bd;
    overflow: hidden;
    
}
.fenxiang{
    width: 100%;
    position: absolute;
    top: .3rem;
    z-index: 22;
}
.leftimg{
    float: right;
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
}
.rightimg{
    float: left;
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
}
.banner{
    width: 100%;
    height: 2.625rem;
    position: relative; 
    display: flex;
    overflow-x: auto;
}

.bannerImg{
    width: 100%;
    height: 100%;
}

.banner_information{
    width: 100%;
    height: 1.41rem;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin-top: -12px;
    background-color:white;
    position: absolute;
}
.nav{
    width: 90%;
    margin: 0 auto;
}
.nav h1{
    margin-top: .2rem;
    margin-bottom: .16rem;
    font-size: .18rem;
}
.dengzhi h2{
    font-size: .18rem;
    color: #ed8d40;
}
.dengzhi h3{
    color: #de8432;
    font-size: 12px;
}
.dengzhi h4{
    color: #646466;
    font-size:12px;
    margin-right: .2rem;
}
.dengzhi p{
    color: #6dc5bd;
    font-size: 10px;
}
.dengzhi{
    display: flex;
}
.dengzhiA span{
    color: #696969;
    font-size: 12px;
    margin-right: .2rem;
}
.nav1{
    width: 100%;
    height: 1.75rem;
    margin-top: 1.35rem;
    background-color: #fff;
    margin-bottom: 6px;
}
.nav1a{
    width: 90%;
    margin: 0 auto;
}
.nav1a_1{
    width: 100%;
    height: .574rem;
    background-color: #fff;
    border-bottom: 1px solid #6dc5bd;
    font-size: 15px;
}
.nav1a_1 span{
    float: left;
    width: .67rem;
    height: 100%;
    margin-right: .1rem;
    color: #999999;
}

.h5{
    float: left;
    width: 2.6rem; 
    height: 100%;
    display: flex;
    align-items: center;
}
.h5 h5{
    margin-right: .1rem;
}
.h5 p{
    color: rgb(91, 129, 167);
}
.nav1a_1:last-child{
    border: none;
}
</style>