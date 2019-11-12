<template>
	<div class="enrollcard">
		<div class="card">

			<i class="el-icon-bank-card"></i>
			<p>身份证号</p>
		</div>
		<div class="cardinput">
			<input type="text" placeholder="请输入身份证号" />
		</div>
	</div>
</template>

<script>
</script>

<style>
	.el-icon-bank-card {
		width: 9%;
		font-size: .2rem;
		line-height: .3rem;
		text-align: left;
		color: #008287;
	}
	.card{
		display: flex;
		height: .3rem;
		margin-top: .2rem;
		margin-left: .05rem;
		
	}
	.card p {
		width: 20%;
		font-size: .15rem;
		line-height: .3rem;
	}
	.cardinput{
		display: flex;
		height: .5rem;
		align-items: center;
		border-bottom: 3px solid #d6e0e1;
		/*padding-left:.15rem ;*/
	}
	 .cardinput p{
		font-size: .15rem;
	}
	 .cardinput input{
		height: .3rem;
		border: 0;
		float: left;
		font-size: .15rem;
		outline: none;
	}
	
</style>