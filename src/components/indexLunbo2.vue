<template>
	<div class="indexLunbo2">

		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<div class="left">
					<img src="../assets/img/lunbo1.jpg" />
				</div>
				<div class="rigth">
					<div class="top">
						<p><span>商城</span> 般若/云南易物/高杆古树茶/普洱生茶/专成古法/手工绘制
						</p>

					</div>
					<div class="center">
						<p>357g/饼/一件</p>
					</div>
					<div class="bottom">
						<p><span>0CNY</span><s>原价：888CNY</s></p>
					</div>
				</div>
			</mt-swipe-item>
			<mt-swipe-item>
				<div class="left">
					<img src="../assets/img/lunbo1.jpg" />
				</div>
				<div class="rigth">
					<div class="top">
						<p><span>商城</span> 般若/云南易物/高杆古树茶/普洱生茶/专成古法/手工绘制
						</p>

					</div>
					<div class="center">
						<p>357g/饼/一件</p>
					</div>
					<div class="bottom">
						<p><span>0CNY</span><s>原价：888CNY</s></p>
					</div>
				</div>
			</mt-swipe-item>
			<!--<mt-swipe-item>3</mt-swipe-item>-->
		</mt-swipe>

	</div>
</template>

<script>
</script>

<style>
	.indexLunbo2 .mint-swipe {
		width: 92%;
		height: 1.2rem;
		display: flex;
		padding: 2% 4%;
	}
	
	.indexLunbo2 .mint-swipe-items-wrap {
		/*display: flex;*/
		width: 100%;
	}
	
	.indexLunbo2 .mint-swipe-item {
		/*display: flex;*/
	}
	
	.indexLunbo2 .is-active {
		display: none;
	}
	
	.indexLunbo2 .left {
		width: 35%;
		float: left;
	}
	
	.indexLunbo2 .left img {
		width: 100%;
	}
	
	.indexLunbo2 .rigth {
		width: 63%;
		float: right;
		margin-left: 2%;
	}
	
	.indexLunbo2 .top {
		display: flex;
	}
	
	.indexLunbo2 .top p {
		font-size: 12px;
		padding-top: .05rem;
		text-align: left;
	}
	
	.indexLunbo2 .top span {
		background: #339a99;
		display: block;
		color: white;
		font-size: 10px;
		width: .2rem;
		line-height: 14px;
		height: 14px;
		float: left;
		padding: 0 .05rem;
		border-radius: 2px;
		margin-right: .02rem;
	}
	.indexLunbo2 .center p{
		color: #929292;
		float: left;
		margin-top: .05rem;
	}
	.indexLunbo2 .bottom p{
		text-align: left;
	}
	.indexLunbo2 .bottom span{
		font-size: 14px;
		color: red;
	}
</style>