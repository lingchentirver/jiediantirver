<!--
 * @Author: your name
 * @Date: 2019-11-11 17:29:00
 * @LastEditTime: 2019-11-12 11:22:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Anav.vue
 -->
<template>
    <div class="box">
        <div class="top">
            <img src="../assets/img/sy_sdk_left.png" @click="back()">
            <div clss="top1">
                <p>新增出行人信息</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Anav',
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
    height:0.65rem;
}
.top{
    width:3.4rem;
    height:0.3rem;
    margin:0 auto;
    margin-top:0.18rem;
    display:flex;
    justify-content: space-between;
}
.top img{
    width:0.16rem;
    height:0.28rem;
}
.top p{
    width:3rem;
    height:0.28;
    font-size:0.16rem;
    font-weight:600;
    text-align:center;
    line-height:0.28rem;
}
</style>

