<!--
 * @Author: your name
 * @Date: 2019-11-11 09:50:27
 * @LastEditTime: 2019-11-11 20:11:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Olist.vue
 -->

<template>
    <div class="box">
        <div class="box1">
            <div class="left">
                <input type="checkbox" class="a">
            </div>
            <div class="center">
                <p class="aa">xxx&nbsp;(&nbsp;成人&nbsp;)</p>
                <p>证件号码&nbsp;:&nbsp;&nbsp;6201211199701033838</p>
                <p>出生日期&nbsp;:&nbsp;&nbsp;1997-01-03</p>
            </div>
            <div class="right">
                <img src="../assets/img/biao02.jpg" alt="">
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
    margin-top:0.5rem;
    background:#f7f7f7;
}
.box1{
    background:white;
    width:3.2rem;
    height:0.91rem;
    margin:0 auto;
    margin-top:0.12rem;
    margin-bottom:0.12rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.left{
    width:0.2rem;
    height:0.91rem;
}
.left .a{
    width:0.2rem;
    margin-top:0.36rem;
    height:0.2rem;
    border:1px solid #9c9c9c;
    background:#ffffff;
    border-radius: 50%;
}
.center{
    width:2.54rem;
    height:0.91rem;
    margin-left:0.16rem;
}
.center p{
    font-size:0.15rem;
    color:#9c9c9c;
    margin-top:0.11rem;
}
.center p:first-child{
    font-size:0.16rem;
    color:black;
    font-weight:600;
}
.right{
    width:0.3rem;
    height:0.91rem;
}
.right img{
    margin-top:0.36rem;
    width:0.3rem;
    height:0.2rem;
}
</style>