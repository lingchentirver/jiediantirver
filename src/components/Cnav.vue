<!--
 * @Author: your name
 * @Date: 2019-11-10 16:41:42
 * @LastEditTime: 2019-11-12 11:16:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Onav.vue
 -->
<template>
   <div class="box">
       <div class="top">
           <img src="../assets/img/sy_sdk_left.png" @click="back()">
           <div clss="top1">
               <p>选择出行人</p>
           </div>
           <button>完成</button>
       </div>
       <div class="bottom">
           <button><router-link to="../Add">+&nbsp;&nbsp;添加新证件</router-link></button>
       </div>
    </div> 
</template>
<script>
export default {
  name: 'Cnav',
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
    width:100%;
    height:0.58rem;
}
.top{
    width:3.4rem;
    height:0.26rem;
    margin:0 auto;
    margin-top:0.18rem;
    display:flex;
    justify-content: space-between;
    align-items: cneter;
}
.top img{
    width:0.14rem;
    height:0.26rem;
    margin-right:0.4rem;
}
.top p{
    font-size:0.16rem;
    font-weight:600;
}
.top button{
    width:.4rem;
    height:0.26rem;
    font-size:0.15rem;
    font-weight:700;
    border:none;
    background:white;
    margin-right:0.2rem;
    color:#129599;
    text-align:center;
 }
.bottom{
    margin-top:0.14rem;
    width:3.4rem;
    height:0.93rem;
    margin:0 auto;
}
.bottom button{
    width:1.61rem;
    height:0.41rwm;
    margin-top:0.25rem;
    margin-left: 0.82rem;
    font-size:0.14rem;
    text-align:center;
    line-height:0.41rem;
    color:white;
    font-weight:600;
    border:none;
    border-radius:0.2rem;
    background:#129599;
}
</style>