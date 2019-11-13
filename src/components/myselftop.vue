<!--
 * @Author: 李太白
 * @Date: 2019-11-05 00:12:16
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-13 17:12:38
 * @Description: myselftop
 -->

<template>
    <div class="topBox">
        <div class="box1">
            <img class="img1" src="../assets/img/my1.jpg" alt="">
            <img class="img2" src="../assets/img/my3.jpg" alt="">
            <img class="img3" src="../assets/img/my2.jpg" alt="">
        </div>
        <div class="box2">
            <div class="box2a">
                <router-link to="login">
                  <img class="img4" src="../assets/img/my4.jpg" alt="">
                </router-link>

                <div class="use">
                    <router-link to="login">
                    <div class="username">
                        <h1>节点用户</h1><p>910010</p>
                    </div>
                    </router-link>
                    
                        <span>粉丝  0</span>
                        <span>粉丝  0</span>
                        <span>粉丝  0</span>
                </div>  
                <div class="rightBox">
                <div class="img5" ><img  src="../assets/img/my5.jpg" alt=""></div> 
                </div>
            </div>
            <img class="vip" src="../assets/img/vip.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.topBox{
    width: 100%;
    overflow: hidden;
}
.box1{
    width: 100%;
    height: .34rem;
}
.img1{
    width: .25rem;
    height: .34rem;
    float: left;
    margin-left: .15rem;
}
.img2{
    width: .31rem;
    height: .34rem;
    float: right;
    margin-right: .15rem;
}
.img3{
    width: .3rem;
    height: .34rem;
    float: right;
    margin-right: .1rem;
}
.box2a{
    width: 100%;
    height: .71rem;
    margin-left: .15rem;
    display: flex;
}
.img4{
    width: .71rem;
    height: .71rem;
    float: left;
}
.use{
    margin-top: .14rem;
}
.username{
     width: 1.5rem; 
     height: .22rem;
     display: flex; 
     align-items: center;
     margin-bottom: .1rem;
}
.username h1{
    /* float: left; */
    font-size: .2rem;
    margin-right: .1rem;
}
.username p{
    color: #837a71;
}
.box2a span{
    float: left;
    font-size: 15px;
    color: #9a9a9a;
    margin-right: .1rem;
}
.rightBox{
    width: .87rem;
    height: .41rem;
    background-color: #f09753;
    border-top-left-radius: .2rem;
    border-bottom-left-radius: .2rem;;
    margin-left: .4rem;
    margin-top: .2rem;
}
.img5{
    width: .34rem;
    height: .34rem;
    border: 3px solid white;
    border-radius:50% ;
    margin-left: .05rem;
}
.img5 img{
    width: .23rem;
    height: .22rem;
    margin-left: .055rem;
    margin-top: .055rem;
}
.vip{
    display: block;
    width: 3.45rem;
    height: .5rem;
    margin: .22rem auto 0;
}
</style>