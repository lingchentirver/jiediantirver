<template>
	<div class="login">

		<div class="logBox">

			<loginheader></loginheader>
			<loginTit></loginTit>
			<loginCenter></loginCenter>
			<!--<loginButton></loginButton>-->
		</div>
	</div>
</template>

<script>
	import loginheader from '../components/loginheader';
	import loginTit from '../components/loginTit';
	import loginCenter from '../components/loginCenter';
//	import loginButton from '../components/loginButton';

	export default {
		name: 'login',

		components: {
			loginheader,
			loginTit,
			loginCenter
//			loginButton
		}

	}
</script>

<style >
	body {
		font-size: .08rem;
		background: #ffffff;
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
	.login{
		width: 100%;
	}
	.logBox {
		width: 85%;
		margin: 0 auto;
	}
</style>