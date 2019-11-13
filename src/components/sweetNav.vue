<!--
 * @Author: 李太白
 * @Date: 2019-11-08 20:59:12
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-09 15:20:40
 * @Description: 
 -->
<template>
    <div class="sweetNavBox">
       <div class="sweetBox1">
          <h1>节点锁仓</h1>
          <div class="banner">
              <h1>奖励锁仓</h1>
              <p>单笔消费满1000CNY即可获得锁仓奖励</p>
              <span>去查看</span>
          </div>
          <div class="bannerbottom">
             <h1>节点生息</h1>
             <h3>更多内容<span> ></span></h3> 
          </div>
          <div class="banner">
              <h1>CEEO</h1>
              <p>预计年化收益</p>
              <h2>15%</h2>
              <div class="span_a">立即体验</div>
          </div>
       </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.sweetNavBox{
    width: 100%;
    /* height: 3.47rem; */
    background-color: #f8f8f8;
    padding-bottom: .54rem;
}
.sweetBox1{
     width: 3.44rem;
     height: 3.47rem;
     margin:0 auto;
} 
.sweetBox1 h1{
    display: block;
    width: .9rem;
    height: .25rem;
    font-size:.22rem;
    margin-bottom: .17rem;
}
.banner{
    width: 100%;
    height: .71rem;
    background-color:#ffffff;
    box-shadow: 0px 0px 10px 10px #e6e4e4;
    margin-bottom: .38rem;
}
.banner h1{
    width: .9rem;
    font-size:.22rem;
    padding-top: .1rem;
    margin: 0rem 0rem .1rem .18rem;
}
.banner p{
    float: left;
    margin-left: .22rem;
    font-size: 12px;
    color: #9d9d9d  ;
}
.banner span{
    width: .77rem;
    height: .27rem;
    border-radius: .3rem;
    border: 1px solid #ca915e;
    font-size: 13px;
    color: #ca915e;
    text-align: center;
    line-height: .27rem;
    float:right;
    margin-top: -.25rem;
    margin-right: .15rem;
}
.bannerbottom{
    width: 100%;
    height: .25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .17rem;
}
.bannerbottom h1{
    font-size:.22rem;
    margin: 0px;
}
.bannerbottom h3{
    font-size: 13px;
    float: right;
    color: #9f9f9f;
}
.banner h2{
    float: left;
    font-size: .45rem;
    color: #0994a6;
    margin-left: .14rem;
    margin-top: -.3rem;
}
.span_a{
    width: 1rem;
    height: .34rem;
    float: right;
    background-color: #eb8837;
    border-radius: .3rem;
    font-size: 14px;
    color: white;
    margin-top: -.25rem;
    margin-right: .2rem;
    line-height: .34rem;
}
</style>