<template>
	<div id="">
		<div class="logincenter">
			<div class="username">
				<div class="name1">
					<img src="../assets/img/icon_phone.png" />
					<p>用户名</p>
				</div>
				<div class="nameinput">
					<input v-model="username" type="text" placeholder="请输入用户名" id="logusername" />

				</div>

			</div>
			<div class="userpass">
				<div class="pass1">
					<img src="../assets/img/icon_pwd.png" />
					<p>密码</p>
				</div>
				<div class="passinput">
					<input v-model="userpass" type="password" placeholder="请输入密码" id="loguserpass" />
				</div>

			</div>

		</div>
		<p>{{loginmsg}}</p>
		<div class="loginbutBox">

			<div class="loginBottom">
				<p>
					<router-link to="/enroll">注册</router-link>
				</p>
				<p>
					<router-link to="/retrievePass01">忘记密码</router-link>
				</p>
			</div>
			<p class="butmsg">{{butmsg}}</p>
			
			<button @click="loginCheck()">登陆</button>

		</div>

	</div>
</template>

<script>
	export default {
		name: 'loginCenter',
		data() {
			//			
			return {
				username: "",
				userpass: "",
				loginmsg: "",
				butmsg:""
			}
		},
		methods: {
			loginCheck: function() {
				console.log(this.username)
				if(this.username==""||this.userpass==""){
					this.butmsg="用户名或密码不能为空"
				}else {
					this.butmsg=""
					
				}
				
				//				axios.post('', {
				//						this.username,
				//						this.userpass
				//					})
				//					.then(res => {
				//						if(res == 1) {
				//							this.butmsg = "登錄成功";
				//						} else if(res == 0) {
				//
				//							this.butmsg = "用戶名或密碼不正確";
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
	}
</script>

<style >
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
	.butmsg{
		color: red;
		font-size:.1rem ;
	}
</style>