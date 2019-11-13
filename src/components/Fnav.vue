<!--
 * @Author: your name
 * @Date: 2019-11-10 16:41:42
 * @LastEditTime: 2019-11-12 11:20:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Onav.vue
 -->
<template>
    <div class="box">
        <div class="firstBox">
            <div class="box-main">
                <!-- 标题 -->
                <div class="title">
                    填写订单
                    <img src="../assets/img/sy_sdk_left.png" @click="back()">
                </div>
                <!-- 订单项目 -->
                <div class="order-item">
                    醉美太白|康养太白·养生温泉+住星级酒店+品"段不老"山珍药膳一票畅玩~
                </div>
                <!-- 订单时间 -->
                <div class="order-time">
                    2019-11-11 西安市出发 2天1夜行程 1成人
                </div>
            </div>
        </div>
        <div class="block-line">
        </div>
    </div>
</template>
<script>
export default {
  name: 'Fnav',
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
    height:1.73rem;
}
.firstBox{
	width: 100%;
	height: 1.66rem;
	padding-top: 0.19rem;
}
.box-main{
	width: 3.45rem;
	margin: 0 auto;
}
/* 标题 */
.title{
	width: 100%;
	height: 0.21rem;
	font-weight: 900;
	line-height: 0.2rem;
	text-align: center;
	position: relative;
}
.title img{
	width: 0.14rem;
	height: 0.2rem;
	position: absolute;
	top: 0;
	left: 0.08rem;
}

/* 订单项目 */
.order-item{
	width: 100%;
	height: 0.45rem;
	/* background-color: aqua; */
	font-size: .17rem;
	margin-top: .34rem;
}

/* 订单时间 */
.order-time{
	width: 2.5rem;
	font-size: .12rem;
	color: #1b989d;
	background: #f4fafa;
	text-indent: 0.07rem;
	border-radius: .03rem;
	margin-top: .24rem;
}

/* 分快线 */
.block-line{
	width: 100%;
	height: 0.06rem;
	background: #f7f7f7;
}
</style>