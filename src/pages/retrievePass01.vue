<template>
	<div class="retrieveBox">

		<div class="retheader">
			<img src="../assets/img/sy_sdk_left.png" @click="back()" />
			<h1>重置密码</h1>
		</div>
		<div class="retCenter">
			<img src="../assets/img/icon_forget_pwd_protect.png" />
			<h1>第一步</h1>
			<p>请填写你要重置密码的账户相对应的身份证号</p>

		</div>
		<div class="enrollcard">
			<div class="card">

				<i class="el-icon-bank-card"></i>
				<p>身份证号</p>
			</div>
			<div class="cardinput">
				<input v-model="idcard" @blur="cardCheck" type="text" placeholder="请输入身份证号" id="logusercard" />

			</div>
			<p>{{cardmsg}}</p>
		</div>
		<button @click="enrollCheck">下一步</button>
	</div>
</template>

<script>
	import enrollcar from '../components/enrollcar';

	export default {
		name: 'login',
		data() {
			//			
			return {
				idcard: "",
				cardmsg: ""
			}
		},
		components: {
			enrollcar
		},
		methods: {
			back() {
				this.$router.go(-1);

			},
			cardCheck: function() {
				var card = document.getElementById('logusercard').value;

				if(!(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(card))) {
					this.cardmsg = "身份证不合格，身份证号（18位）"
					//					alert("身份证不合格，身份证号（18位）");
					return;
				} else {

					this.cardmsg = ""
				}
			},
			enrollCheck: function(){
				this.$router.push({
								path: 'retrievePass02'
							})
			}
			//			axios.post('', {
			//						this.idcard
			//					})
			//					.then(res => {
			//						if(res == 1) {
			//							this.cardmsg = "";

			//				this.$router.push({
			//					path: 'retrievePass02'
			//				})
			//						} else if(res == 0) {
			//
			//							this.cardmsg = "身份证不正确";
			//						}
			//					})
			//					.catch(err => {
			//							console.log(err);
			//
			//						}
			//
			//					}
			//				this.$router.push({
			//					path: 'index'
			//				})

		}
	}
</script>

<style >
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
	
	.retrieveBox {
		width: 85%;
		margin: 0 auto;
	}
	
	.retheader {
		margin-top: .2rem;
		width: 100%;
		display: flex;
	}
	
	.retheader img {
		width: .3rem;
		height: .3rem;
	}
	
	.retheader h1 {
		width: 80%;
		font-size: .2rem;
		line-height: .3rem;
		text-align: center;
	}
	
	.retCenter {}
	
	.retCenter img {
		margin-top: .5rem;
		width: .32rem;
		height: .32rem;
	}
	
	.retCenter h1 {
		font-weight: 400;
		margin-top: .25rem;
		font-size: .25rem;
	}
	
	.retCenter p {
		margin-top: .1rem;
		font-size: .12rem;
		color: #9a9a9a;
	}
	
	.retrieveBox button {
		border: 0;
		height: .5rem;
		width: 100%;
		border-radius: .25rem;
		margin-top: .5rem;
	}
</style>