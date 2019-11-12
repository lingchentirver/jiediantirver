<template>
	<div id="">
		
	<div class="enrollcard">
		<div class="card">

			<i class="el-icon-bank-card"></i>
			<p>身份证号</p>
		</div>
		<div class="cardinput">
			<input type="text" placeholder="请输入身份证号" id="logusercard"/>
		</div>
	</div>
	<div class="enrollbutton">
		<div class="">
			<el-radio v-model="radio" class="enrollradio"></el-radio>
			<p>我已阅读并同意<span>《用户协议》</span></p>
		</div>
		<button @click="enrollCheck()">注冊</button>
	</div>
	</div>
</template>
<script>
	export default {
		
		methods: {
			enrollCheck: function() {
				var card = document.getElementById('logusercard').value;

				if(!(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(card))) {
					alert("身份证不合格，身份证号（18位）");
					return;
				}

				var name = document.getElementById('logusername').value;
				if(!(/^[a-z][a-zA-Z0-9\-]{8,16}$/.test(name))) {
					alert("用户名不合格，请输入8到16位（开头为字母） ");
					return;

				}
				var pass = document.getElementById('loguserpass').value;
				if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(pass))) {
					alert("密码不合格，密码至少包含 数字和英文，长度6-20 ");
					return;
				}

			}

		}
	}
</script>

<style>
	.el-icon-bank-card {
		width: 9%;
		font-size: .2rem;
		line-height: .3rem;
		text-align: left;
		color: #008287;
	}
	
	.card {
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
	
	.cardinput {
		display: flex;
		height: .5rem;
		align-items: center;
		border-bottom: 3px solid #d6e0e1;
		/*padding-left:.15rem ;*/
	}
	
	.cardinput p {
		font-size: .15rem;
	}
	
	.cardinput input {
		height: .3rem;
		border: 0;
		float: left;
		font-size: .15rem;
		outline: none;
	}
	
	.enrollbutton div {
		display: flex;
		margin-top: .2rem;
	}
	
	.enrollbutton div p {
		font-size: .14rem;
	}
	
	.enrollbutton div p span {
		color: #008287;
	}
	
	.enrollbutton button {
		width: 100%;
		height: .5rem;
		border-radius: 1.2rem;
		background: #119599;
		margin-top: .5rem;
		border: 0;
		color: white;
	}
	
	.enrollradio {
		margin-right: 0;
	}
</style>