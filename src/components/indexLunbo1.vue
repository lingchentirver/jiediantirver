<template>
	<div class="block">
		<span class="demonstration"></span>
		<el-carousel trigger="click" class="carousel01">
			<el-carousel-item v-for="item in 5" :key="item">
				<!--<h3 class="small">{{ item }}</h3>-->
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
</script>

<style>
	.block {
		margin-top: -.6rem;
	}
	
	.block .el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	
	.block .el-carousel__item {
		/*height: 3rem;*/
	}
	
	.block .el-carousel__item:nth-child(2n) {
		background: url(../assets/img/banner02.jpg);
	}
	
	.block .el-carousel__item:nth-child(2n+1) {
		background: url(../assets/img/banner01.jpg);
	}
	
	.block .el-carousel__arrow--right {
		display: none;
	}
	
	.block .el-carousel__arrow--left {
		display: none;
	}
	
	.block .el-carousel__indicators {
		display: none;
	}
</style>