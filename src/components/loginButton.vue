<template>
	<div class="loginbutBox">

		<div class="loginBottom">
			<p>
				<router-link to="/enroll">注册</router-link>
			</p>
			<p>
				<router-link to="/retrievePass01">忘记密码</router-link>
			</p>
		</div>
		<button @click="loginCheck()">登陆</button>
	</div>
</template>

<script>
	export default {
		name: 'login',

		methods: {
			loginCheck: function() {
				var name = document.getElementById('logusername').value;
				if(!(/^[a-z][a-zA-Z0-9\-]{8,16}$/.test(name))) {
					alert("用户名不合格，请输入8到16位（开头为字母） ");
					return;
					var pass = document.getElementById('loguserpass').value;

				}
				if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(pass))) {
					alert("密码不合格，密码至少包含 数字和英文，长度6-20 ");
					return;
				}
			}

		}
	}
</script>

<style>
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
</style>