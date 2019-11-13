<!--
 * @Author: your name
 * @Date: 2019-11-10 16:41:42
 * @LastEditTime: 2019-11-12 11:23:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Onav.vue
 -->
<template>
   <div class="box">
       <div class="top">
           <img src="../assets/img/sy_sdk_left.png" @click="back()">
           <div clss="top1">
               <select name="" id="">
                   <option value="" selected>全部订单</option>
                   <option value="">待付款</option>
                   <option value="">待处理</option>
                   <option value="">评论</option>
               </select>
                <!-- <el-dropdown>
                <span class="el-dropdown-link">
                    全部订单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>全部</el-dropdown-item>
                    <el-dropdown-item>待付款</el-dropdown-item>
                    <el-dropdown-item>待处理</el-dropdown-item>
                    <el-dropdown-item disabled>评论</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown> -->
           </div>
           <button>我是商家</button>
       </div>
       <div class="bottom">
           <ul>
               <li>全部</li>
               <li>待付款</li>
               <li>待处理</li>
               <li>待评论</li>
           </ul>
       </div>
    </div> 
</template>
<script>
export default {
  name: 'Onav',
  data () {
    return {
      
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>
<style scoped>
.box{
    width:3.4rem;
    height:0.95rem;
    margin:0 auto;
}
.top{
    width:100%;
    height:0.2rem;
    padding-top:0.17rem;
    display:flex;
    justify-content: space-between;
    align-items: cneter;
}
.top img{
    width:0.14rem;
    height:0.2rem;
    margin-right:0.2rem;
}
.top1{
    width:0.92rem;
    height:0.2rem;
    font-size:0.19rem;
    
} 
.top button{
    width:0.63rem;
    height:0.2rem;
    background:white;
    font-size:0.14rem;
    color:#5db3a1;
    border:none;
}
.bottom{
    width:3.4rem;
    height:0.54rem;
    margin:0 auto;
}
.bottom ul{
    width:3.2rem;
    height:0.54rem;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
}
.bottom li{
    width:0.53rem;
    height:0.54rem;
    line-height:0.7rem;
    text-align:center;
    font-size:0.15rem;
    font-weight:600;
    
}
.bottom li:first-child{
    border-bottom:4px solid #129599;
    color:#129599;
}
</style>