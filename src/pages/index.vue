<template>
	<div class="box">
		<indexHearde></indexHearde>
		<div class="center">
		<indexLunbo1></indexLunbo1>
		<indexNav></indexNav>
		<indexMianfei></indexMianfei>
		<indexLunbo2></indexLunbo2>
		<indexWenda></indexWenda>
		<indexTabs></indexTabs>
		</div>
		<indexFooter></indexFooter>
	</div>
</template>

<script>
import indexHearde from '../components/indexHearde';
import indexMianfei from '../components/indexMianfei';
import indexFooter from '../components/indexFooter';
import indexLunbo1 from '../components/indexLunbo1';
import indexNav from '../components/indexNav';
import indexWenda from '../components/indexWenda';
import indexTabs from '../components/indexTabs';
import indexLunbo2 from '../components/indexLunbo2';
 export default {
  name: 'indexHearder',
  data () {
    return {
      
    }
  },
  components:{
      indexHearde,indexMianfei,indexFooter,indexLunbo1,indexNav,indexWenda,indexTabs,
      indexLunbo2
  }, 
  mounted: function () {
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
      },
      methods: {
        handleScroll: function () {
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;  
            // 设备/屏幕高度
            let scrollObj = document.getElementsByTagName("indexHearde"); // 滚动区域
            let scrollTop = scrollObj.scrollTop; // center 到头部的距离
            console.log(scrollObj.scrollTop)
            let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
            //滚动条到底部的条件
            if(scrollTop+clientHeight == scrollHeight){
                // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
            }  
        }
      },
}
</script>

<style>
	body {
	display: flex;
	flex-direction: column;
	font-size: .08rem;
	background: #f7f7f7;

}

html {
	font-size: 26.67vw;
	height: 100%;
	flex-direction: column;
	
}

* {
	margin: 0;
	padding: 0;
}

body a:link {
	text-decoration: none;
}

body a:visited {
	text-decoration: none;
}

body a:hover {
	text-decoration: none;
}

li {
	list-style: none;
}
.center{
  overflow-y: auto;
	margin-bottom: .45rem;
}
</style>