<template>
	<div class="wenda">
		<div class="wenLeft">
			<h1>旅行问答</h1>
		</div>
		<div class="wenCentre">
			<h2>这app做的还蛮精致的，未来的规划是什莫，可以说说吗</h2>
			<span>最佳答案</span><p>节点旅行未来在吃住行游娱购娱购娱购娱购娱购娱购面</p>
		</div>
		<div class="wenRight">
			<h1>我要提问</h1>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.wenda{
		width: 100%;
		height: .55rem;
		background: #f0f0f0;
		display: flex;
		/*padding: .12rem .1rem;*/
		/*padding-right: ;*/
	}
	.wenLeft{
		width: 11%;
		height: 85%;
		background: #eeb58a;
		border-radius: 15px;
		padding: 2%;
		margin-left: .1rem;
	}
	.wenLeft h1{
		font-size: .18rem;
	}
	.wenCentre{
		width: 61%;
		padding: 0 .06rem;
		
	}
	.wenCentre h2{
		font-size: 14px;
		font-weight: 400;
		text-align: left;

	}
	
	.wenCentre p{
		/*width: 2.2rem;*/
		/*display: flex;*/
		font-size: 10px;
		/*align-items: center;*/
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		float: right;
		width: 80%;
		line-height: 20px;
		
	}
	.wenCentre  span{
		
		display: block;
		background: #4d9ea1;
		border-radius: 8px;
		color: white;
		padding: .02rem;
		margin-right: .02rem;
		float: left;
	}
	.wenRight{
		width: 11%;
		background: #eeb58a;
		/*margin-right: .1rem;*/
		border-radius: 15px;
		padding: 2%;
	}
</style>