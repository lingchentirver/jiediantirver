<!--
 * @Author: 李太白
 * @Date: 2019-11-05 00:12:16
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-09 14:54:16
 * @Description: 
 -->

<template>
    <div class="topBox">
        <div class="img"><img src="../assets/img/1.png"></div>
        <div class="topBox1">
            
            <div class="leftBox">
                <p>6</p>
                <span>可用金额(TNW)</span>
            </div>
            <div class="rightBox">
                <p>0.00</p>
                <span>昨天收益(TNW)</span>
            </div>
        </div>
        <div class="bottomBox">
            <div class="bottomBox_a">
                <p><b>0.00</b></p>
                <span>平台总收益(TNW)</span>
             </div>
             <div class="bottomBox_a">
                <p><b>0.00</b></p>
                <span>已分配(TNW)</span>
             </div>
             <div class="bottomBox_a">
                <p><b>0.00</b></p>
                <span>即将分配(TNW)</span>
             </div>
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
      height:2rem;
  }
    .img{
      width: 100%;
      height: .21rem;
      margin-top: .13rem;
      margin-bottom: .18rem;
  }
  .img img{
      width: .21rem;
      height: .21rem;
      margin-right: .16rem;
  }
  .topBox1{
      width: 100%;
      height:.47rem;
      border-bottom: 1px solid rgb(254, 254, 254);
      position: relative;
  }
  .topBox1 span{
      width: 100%;
      height: .17rem;
      color: rgb(115, 115, 115);
      font-size: 11px;
  }
  .leftBox{
      float: left;
      width: .9rem;
      height: .47rem;    
      margin-left: .16rem;
  }
  .leftBox p{
      width: 100%;
      font-size: .19rem;
      float: left;
      margin-bottom: .11rem;
      color: #e85955;
  }
  .rightBox{
      float: right;
      width: .9rem;
      height: .47rem; 
      margin-right: .16rem;
  }
  .rightBox p{
      width: 100%;
      font-size:.15rem;
      float: right;
      margin-bottom: .11rem;
      margin-top: .06rem;
      color: #000000;
  }
  .bottomBox{
      width: 100%;
      height:1.32rem;
      background-color: rgb(255, 255, 255);
      display: flex;
      justify-content: space-around;
  }
  .bottomBox_a{
      font-size: 10px;
      color: rgb(115, 115, 115);
      margin-top: .44rem;
  }
  .bottomBox_a p{
      font-size: .15rem;
      margin-bottom: .1rem;
  }
  .bottomBox_a span{
       width: 100%;
       height: .13rem;
  }
</style>