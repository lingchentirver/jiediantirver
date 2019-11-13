<template>
	<div class="header">
		<div class="headerImg">
			<img src="../assets/img/sy_sdk_left.png" @click="back()"/>
		</div>
		<h1>节点旅行登录</h1>
	</div>
</template>

<script>
	export default {
		
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	.header{
		display: flex;
		margin: .2rem .1rem;
		height: .25rem;
	}
	.header h1{
		font-size: .2rem;
		margin-left: .1rem;
		line-height: .25rem;
		text-align: center;
		width: 80%;
		
	}
</style>