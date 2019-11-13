<!--
 * @Author: your name
 * @Date: 2019-11-05 01:25:07
 * @LastEditTime: 2019-11-09 15:04:20
 * @LastEditors: 李太白
 * @Description: In User Settings Edit
 * @FilePath: \tongzhend:\workspace\workspace\src\components\center.vue
 -->
 <template>
    <div class="centerBox">
        <div class="navBox">
            <div class="a1" id="b1">
               <p>钱包</p> 
               <img src="../assets/img/nav1.jpg" alt="">
            </div>
            <div class="a1" id="b2">
                <p>兑换</p> 
                <img src="../assets/img/nav2.jpg" alt="">
            </div>
            <div class="a1" id="b3">
               <p>红包</p>
               <img src="../assets/img/nav3.jpg" alt=""> 
            </div>
            <div class="a2" id="b4">
                <p>CEEC</p> 
                <img src="../assets/img/nav4.jpg" alt="">
            </div>
            <div class="a2" id="b5">
               <p>消费奖励</p>  
               <img src="../assets/img/nav5.jpg" alt="">
            </div>
        </div>
    </div>
 </template>
 <script>
 export default {
    
}
 </script>
<style scoped>
 .centerBox{
     width: 100%;
     height: 1.93rem;
     background-color: #f8f8f8;
 }
 .navBox{
     width: 3.46rem;
     height: 1.16rem;
     margin: 0 auto ;
     background-color: #f8f8f8;
     font-size: .2rem;
 }
 .navBox p{
     float: left;
     margin-top: .15rem;
     left: .15rem;
 }
 .a1{
     width:1.1rem;
     height: .77rem;
     margin-top: .12rem;
     margin-bottom: .07rem;
 }
 .a2{
     width: 1.69rem;
     height: .81rem;
 }
 #b1{
     background-color: #ffe2da;
     float: left;
 }
 #b2{
     background-color: #e3e8fb;
     float: left;
     margin-left: .07rem;
     margin-right: .07rem;
 }
 #b3{
     background-color: #f9e1dd;
     float: left;
 }
 #b4{
     background-color: #d7f0f4;
     float: left;
 }
 #b5{
     background-color: #f8e3d0;
     float: left;
     margin-left: .07rem;
 }
 #b1 img{
     width: .62rem;
     height: .71rem;
 }
 #b2 img{
     width: .57rem;
     height: .71rem;
 }
 #b3 img{
     width: .55rem;
     height: .71rem;
 }
 #b4 img{
     width: .75rem;
     height: .81rem;
 }
 #b5 img{
     width: .71rem;
     height: .82rem;
 }
 </style>
