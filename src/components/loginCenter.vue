<template>
	<div class="logincenter">
		<div class="username">
			<div class="name1">
				<img src="../assets/img/icon_phone.png" />
				<p>用户名</p>
			</div>
			<div class="nameinput">
				<input type="text" placeholder="请输入用户名" id="logusername" />

			</div>
			<span id="lognamets"></span>
			
		</div>
		<div class="userpass">
			<div class="pass1">
				<img src="../assets/img/icon_pwd.png" />
				<p>密码</p>
			</div>
			<div class="passinput">
				<input type="password" placeholder="请输入密码"  id="loguserpass" />
			</div>
			<span id="logpassts"></span>
			
		</div>

	</div>

</template>

<script>
	
</script>

<style>
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