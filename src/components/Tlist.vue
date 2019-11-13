<!--
 * @Author: your name
 * @Date: 2019-11-08 18:11:02
 * @LastEditTime: 2019-11-09 16:11:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Tlist.vue
 -->
<template>
    <div class="box">
        <ul class="u">
            <li> 
                <div class="top">
                    <img src="../assets/img/1.jpg" alt="" class="bannerimg">
                </div>
                <div class="bottom">
                    <p class="a1">奇迹昊哥,柬埔寨...</p>
                    <div class="left">
                        <img src="../assets/img/xiao1.jpg" alt="">
                        <p>西安-暹粒-皇家公...</p>
                    </div>
                    <div class="right">
                        <img src="../assets/img/xiao2.jpg" alt="">
                        <p class="a2">5天3夜</p>
                    </div>
                    <p class="a3">1299CNY起/人</p>
                </div>
            </li>
            <li>
                <div class="top">
                    <img src="../assets/img/2.jpg" alt="" class="bannerimg">
                </div>
                <div class="bottom">
                    <p class="a1">节点旅行|第2期.自..</p>
                    <div class="left">
                        <img src="../assets/img/xiao1.jpg" alt="">
                        <p>西安-镇安-杜鹃山...</p>
                    </div>
                    <div class="right">
                        <img src="../assets/img/xiao2.jpg" alt="">
                        <p class="a2">2天1夜</p>
                    </div>
                    <p class="a3">298CNY起/人</p>
                </div>
            </li>
            <li>
                <div class="top">
                    <img src="../assets/img/1.jpg" alt="" class="bannerimg">
                </div>
                <div class="bottom">
                    <p class="a1">节点旅行|第2期·自..</p>
                    <div class="left">
                        <img src="../assets/img/xiao1.jpg" alt="">
                        <p>西安-暹粒-皇家公...</p>
                    </div>
                    <div class="right">
                        <img src="../assets/img/xiao2.jpg" alt="">
                        <p class="a2">5天3夜</p>
                    </div>
                    <p class="a3">1299CNY起/人</p>
                </div>
            </li>
            <li>
                <div class="top">
                    <img src="../assets/img/2.jpg" alt="" class="bannerimg">
                </div>
                <div class="bottom">
                    <p class="a1">一见青城·青城山+都...</p>
                    <div class="left">
                        <img src="../assets/img/xiao1.jpg" alt="">
                        <p>成都三环内，都江...</p>
                    </div>
                    <div class="right">
                        <img src="../assets/img/xiao2.jpg" alt="">
                        <p class="a2">1天0夜</p>
                    </div>
                    <p class="a3">220CNY起/人</p>
                </div>
            </li>
        </ul>
        <div class="bo">
            <p>特色推荐</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box
{
    width:100%;
    height:3.11rem;
}
.u{
    display: flex;
    width:100%;
    height:2.46rem;
    overflow-x: auto;
}
li
{
    width:1.89rem;
    height:2.46rem;
    flex-shrink: 0; /**/
    text-align: center;
}
.top
{
    width:1.71rem;
    height:1.28rem;
    margin-left:0.12rem;
    margin-bottom:0.2rem;
}
.bannerimg
{
    width:100%;
    height:1.15rem;
    margin-top:0.13rem;
    border-radius:10px;
}
.bottom{
    width:1.43rem;
    height:0.83rem;
    margin-left:0.18rem;
    margin-bottom:0.21rem;
    margin-top:0.13rem;
}
.a1
{
    width:100%;
    height:0.14rem;
    font-size:0.14rem;
}
.left{
    width:100%;
    height:0.13rem;
    margin-top:0.1rem;
    margin-bottom:0.05rem;
    font-size:0.13rem;
    display:flex;
    justify-content: space-around;
}
.left img{
    width:0.14rem;
    height:0.13rem;
    margin-left:0.165rem;
}
.left p{
    width:1.24rem;
    height:0.13rem;
    font-size:0.13rem;
}
.right{
    width:100%;
    height:0.13rem;
    margin-bottom:0.15rem;
    font-size:0.13rem;
    display:flex;
    justify-content: space-around;
}
.right img{
    display:inline-block;
    width:0.15rem;
    height:0.13rem;
    margin-left:0.165rem;
}
.right p{
    display:inline-block;
    width:1.24rem;
    height:0.13rem;
    font-size:0.12rem;
}
.a3
{
    color:red;
    font-size:0.14rem;
    width:100%;
    height:0.14rem;
    margin-bottom:0.21rem;
}
.bo{
    width:100%;
    height:0.66rem;
}
.bo p{
    font-size:0.22rem;
    font-weight:600;
    line-height:0.66rem;
    text-indent: 0.18rem;
};
</style>