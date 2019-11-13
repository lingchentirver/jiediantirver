<template>
	<div class="retrieveBox">
		<div class="retheader">
			<img src="../assets/img/sy_sdk_left.png" @click="back()" />
			<h1>重置密码</h1>
		</div>
		<div class="retCenter">
			<img src="../assets/img/icon_forget_pwd_protect.png" />
			<h1>第二步</h1>
			<p>请设置新密码</p>
			<div class="retPass">
				<div class="retPasstop">
					<img src="../assets/img/icon_pwd.png" />
					<p>添加新密码</p>
				</div>
				<input v-modle="retpass" type="password" placeholder="设置8到20位的新密码" id="retpass01" @blur="retCheck()" />
				<p class="msgpass">{{msgPass01}}</p>
			</div>
			<div class="retPass">
				<div class="retPasstop">
					<img src="../assets/img/icon_pwd.png" />
					<p>重复密码</p>
				</div>
				<input type="password" placeholder="请再次输入8到20位的新密码" id="retpass02" @blur="retCheck02()" />
				<p class="msgpass">{{msgPass02}}</p>
			</div>

		</div>

		<button @click="retCheakBut">完成</button>
	</div>
</template>

<script>
	export default {
		name: 'retrievepass02',
		data() {
			//			
			return {
				retpass: "",
				msgPass01: "",
				msgPass02: ""
			}
		},
		components: {

		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			retCheck: function() {
				let retpass01 = document.getElementById('retpass01').value;
				if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(retpass01))) {
					this.msgPass01 = "密码不合格，密码至少包含 数字和英文，长度6-20 ";
					return;
				}
					this.msgPass01 = "";
				
			},
			retCheck02: function() {
				if(retpass01 != retpass02) {
					//					alert("两次密码不一样请重新输入 ");
					console.log(retpass01);
					console.log(retpass02);
					this.msgPass02 = "两次密码不一样请重新输入";
					return;

				}
					this.msgPass02 = "";
				
			},
			retCheakBut: function(){
//				this.$router.push({
//					path: 'login'
//				})
			}
		}

	}
</script>

<style>
	body {
		font-size: .08rem;
		background: #f7f7f7;
	}
	
	html {
		font-size: 26.67vw;
		height: 100%;
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
	
	.retrieveBox {
		width: 85%;
		margin: 0 auto;
	}
	
	.retheader {
		margin-top: .2rem;
		margin-bottom: .2rem;
		width: 100%;
		display: flex;
	}
	
	.retheader img {
		width: .3rem;
		height: .3rem;
	}
	.retrieveBox  .msgpass{
		font-size: .1rem;
	}
	.retheader h1 {
		width: 80%;
		font-size: .2rem;
		line-height: .3rem;
		text-align: center;
	}
	

	
	.retCenter img {
		width: .32rem;
		height: .32rem;
		margin-top: 0;
	}
	
	.retCenter h1 {
		font-weight: 400;
		margin-top: .25rem;
		font-size: .25rem;
	}
	
	.retCenter p {
		font-size: .12rem;
		color: #9a9a9a;
	}
	
	.retrieveBox button {
		border: 0;
		height: .5rem;
		width: 100%;
		border-radius: .25rem;
		background: #119599;
		color: white;
		font-size: .15rem;
		margin-top: .5rem;
	}
	
	.retPasstop {
		display: flex;
	}
	
	.retPass {
		margin-top: .4rem;
	}
	
	.retPass p {
		font-size: .18rem;
	}
	
	.retPass img {
		width: .25rem;
		height: .3rem;
		margin-right: .1rem;
	}
	
	.retPass input {
		outline: none;
		font-size: .18rem;
		width: 100%;
		height: .5rem;
		border: 0;
		border-bottom: 1px solid #d6e0e1;
	}
</style>