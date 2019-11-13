<template>
	<div class="header">
			<div class="header_top">
				<span id="">
				西安市 
			</span><img src="../assets/img/to_down_black.png" /><input type="text" placeholder="网红打卡城市" />
				<img src="../assets/img/transl_massage.png" />
			</div>

		</div>
</template>

<script>
</script>

<style>
	.header {
	width: 100%;
	/*height: 1.4rem;*/
	/*background: white;*/
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
}

.header_top {
	display: flex;
	height: .35rem;
	align-items: center;
	position: relative;
	margin-top: 10px;
	margin-bottom: 10px;
}
.header_top img{
	width: .16rem;
}
.header span {
	font-size: .13rem;
	height: .35rem;
	line-height: .25rem;
	margin-left: .07rem;
	margin-top: 14px;
	display: block;
	margin-right: .1rem;
}

.header input {
	border: 0;
	width: 60%;
	font-size: .15rem;
	height: .35rem;
	border-radius: 50px;
	padding-left: .2rem;
	margin: 0 .1rem;
	outline: none;
}
</style>