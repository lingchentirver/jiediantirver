<!--
 * @Author: 李太白
 * @Date: 2019-11-05 00:12:16
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-13 14:46:54
 * @Description: 
 -->

<template>
    <div class="xingqingBox">
        <div class="fenxiang">
            <img class="leftimg" src="../assets/img/banner1a.jpg" alt="">
            <img class="rightimg" src="../assets/img/banner2a.jpg" alt="">
        </div>
        <div class="banner">
            <ul>
                <li v-for="(bannerimg,index) in bannerimgs" :key="index">
                <img :src="bannerimg.src" >
                </li>
            </ul>
        </div>
        <div class="banner_information">
            <div class="nav">
                <h1>{{tour.name}}</h1>
                <div class="dengzhi"><h2>{{tour.price}}</h2><h3>CNY</h3><h4>起</h4><p>等值说明</p></div>
                <div class="dengzhiA"><span>等值于398 CEEC</span><span>等值于44719.1TNW</span></div>
            </div>
        </div>
        <div class="nav1">
            <div class="nav1a">
                <div class="nav1a_1">
                    <span>线路安排:</span><p>{{tour.router}}</p>
                </div>    
                <div class="nav1a_1">
                    <span>行程天数:</span><p>{{tour.days}}</p>
                </div>    
                <div class="nav1a_1">
                    <span>集合信息:</span><div class="h5"><h5>{{tour.time}}</h5><p>{{tour.address}}</p></div>
                </div>    
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'xiangqingtop',
    props:['cid'],
    data () {
    return {
          bannerimgs:[
              
          ],
          tour:{}
    }
  },
  created() {
    fetch('http://localhost:3000/bannerimgs')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
          this.bannerimgs = data;
        //   console.log(this.bannerimgs)
     })
     .catch(err=>{
       console.log(err);
     });
    //  console.log(this.cid);
     //从后端获取数据     
     axios.get('api/tour/'+"?cid="+this.cid)
     .then(res=>{ 
         console.log(res.data[0]);
         this.tour = res.data[0];
     })
     .catch(err=>{
         console.log(err);
     });
  },
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

.banner ul{
    width: 100%;
    height: 2.625rem;
    display: flex;
    overflow-x: auto;   
}
.banner li{
    width :100%;
    height: 100%;
}
.banner img{
    width: 3.75rem;
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