<template>
	<div id="">
		<div class="logincenter">
			<div class="username">
				<div class="name1">
					<img src="../assets/img/icon_phone.png" />
					<p>用户名</p>
				</div>
				<div class="nameinput">
					<input v-model="username" type="text" placeholder="请输入用户名" id="logusername" @blur="nameCheck()" />

				</div>
				<p>{{namemsg}}</p>

			</div>
			<div class="userpass">
				<div class="pass1">
					<img src="../assets/img/icon_pwd.png" />
					<p>密码</p>
				</div>
				<div class="passinput">
					<input v-model="userpass" @blur="passCheck()" type="password" placeholder="请输入密码" id="loguserpass" />

				</div>
				<p>{{passmsg}}</p>

			</div>

		</div>
		<div class="enrollcard">
			<div class="card">

				<i class="el-icon-bank-card"></i>
				<p>身份证号</p>
			</div>
			<div class="cardinput">
				<input v-model="usercard" @blur="cardCheck()" type="text" placeholder="请输入身份证号" id="logusercard" />
			</div>
			<p>{{cardmsg}}</p>

		</div>
		<div class="enrollbutton">
			<div class="">
				<input type="radio" name="" id="" value="" />
				<p>我已阅读并同意<span>《用户协议》</span></p>
			</div>
			<button @click="enrollCheck()">注冊</button>
			<!--<p>{{msg}}</p>-->
		</div>
	</div>
</template>
<script>
	export default {
		name: 'enrollButton',
		data() {
			//					
			return {
				username: "",
				userpass: "",
				usercard: "",
				namemsg: "",
				passmsg: "",
				cardmsg: ""
			}
		},
		methods: {
			nameCheck: function() {
				var name = document.getElementById('logusername').value;
				if(!(/^[a-z][a-zA-Z0-9\-]{8,16}$/.test(name))) {
					//					alert("用。。。户名不合格，请输入8到16位（开头为字母） ");
					this.namemsg = "用户名不合格，请输入8到16位（开头为字母）"
					return;

				}
				this.namemsg = "用户名合格"

			},
			passCheck: function() {

				var pass = document.getElementById('loguserpass').value;
				if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(pass))) {
					this.passmsg = "密码不合格，密码至少包含 数字和英文，长度6-20"
					//					
					//					alert("密码不合格，密码至少包含 数字和英文，长度6-20 ");
					return;

				}
				this.passmsg = "密码合格"

			},
			cardCheck: function() {
				var card = document.getElementById('logusercard').value;

				if(!(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(card))) {
					this.cardmsg = "身份证不合格，身份证号（18位）"
					//					alert("身份证不合格，身份证号（18位）");
					return;

				}
				this.cardmsg = "身份证合格"

			},
			enrollCheck: function() {
				this.$router.push({
					path: 'login'
				})

			}
			//				axios.post('', {username:this.username,userpass:this.userpass,usercard:this.usercard})
			//					.then(res => {
			//						if(res == 1) {
			//							msg = "注冊成功";
			//							this.$router.push({path:'/login'})
			//						} else if(res == 0) {
			//
			//							msg = "注冊失敗請重新注冊";
			//						}
			//					})
			//					.catch(err => {
			//							console.log(err);
			//
			//						}

		}
	}
</script>

<style >
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
	
	.loginBottom {
		display: flex;
		justify-content: space-between;
		padding: 0 .1rem;
		font-size: .12rem;
		color: #008287;
		margin-top: .2rem;
	}
	
	.loginbutBox button {
		width: 100%;
		height: .5rem;
		border-radius: 1.2rem;
		background: #119599;
		margin-top: .5rem;
		border: 0;
	}
	
	.name1,
	.pass1 {
		display: flex;
		height: .3rem;
		margin-top: .2rem;
		margin-left: .05rem;
	}
	
	.name1 img,
	.pass1 img {
		height: 90%;
		margin-right: .1rem;
	}
	
	.name1 p,
	.pass1 p {
		width: 20%;
		font-size: .15rem;
		line-height: .3rem;
	}
	
	.nameinput,
	.passinput {
		display: flex;
		height: .5rem;
		align-items: center;
		border-bottom: 3px solid #d6e0e1;
		/*padding-left:.15rem ;*/
	}
	
	.nameinput p,
	.passinput p {
		font-size: .15rem;
	}
	
	.nameinput input,
	.passinput input {
		height: .3rem;
		border: 0;
		float: left;
		font-size: .15rem;
		outline: none;
	}
</style>