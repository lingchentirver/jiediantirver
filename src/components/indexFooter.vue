<!--
 * @Author: 李太白
 * @Date: 2019-11-13 15:50:05
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-13 18:05:06
 * @Description: 
 -->
<template>
	<footer>
			<ul>
				<router-link to="index">
				<li><img src="../assets/img/travel_normal.png" />
					<p>首页</p>
				</li>
				</router-link>
				<router-link to="Travel">
				<li><img src="../assets/img/gift_normal.png" />
					<p>旅游</p>
				</li>
				</router-link>
				<li><img class="jiahao" src="../assets/img/travel_fabu.png" /></li>
				<router-link to="sweet">
				<li><img src="../assets/img/sweet_normal.png" />
					<p>糖果</p>
				</li>
				</router-link>
				<router-link to="myself">
				<li><img src="../assets/img/topic_author.png" />
					<p>我的</p>
				</li>
				</router-link >
			</ul>
		</footer>
</template>

<script>
</script>

<style>
	
footer{
	width: 100%;
	position: fixed;
	bottom: 0;
	display: flex;
	height: .45rem;
	background: white;
	z-index: 100;
}
footer ul{
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin: .05rem 0;
	
}

footer ul li img{
	height: .20rem;
	width: .20rem;
	margin-right: .02rem;
}
footer ul li .jiahao{
	margin-top: -.15rem;
	height: .5rem;
	width: .5rem;
	
}
footer ul li p{
	text-align: center;
	font-size: .12rem;
}
</style>