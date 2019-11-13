<!--
 * @Author: 李太白
 * @Date: 2019-11-05 00:12:16
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-13 16:50:13
 * @Description: 
 -->

<template>
    <div class="xingqingFooter">
        <div class="leftbox">
            <span><img src="../assets/img/footer1.jpg" alt=""></span>
            <span><img src="../assets/img/footer2.jpg" alt=""></span>
            <span><img src="../assets/img/footer3.jpg" alt=""></span>
        </div>
        <router-link to="Fillorder">
            <div class="rightbox">
                立即报名
            </div>
        </router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.xingqingFooter{
    width: 100%;
    position: fixed;
    bottom: 0rem;
    z-index: 100;
    background-color: #fff;
}
.leftbox{
    float: left;
    width: 59%;
    height: .5rem;
    display: flex;
    justify-content:space-around;
    align-items: center
}
.leftbox img{
    width: .22rem;
    height: .22rem;
}
.rightbox{
    float: left;
    width: 40%;
    height: .5rem;
    background-color: #ed8637;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: .5rem;
}
</style>