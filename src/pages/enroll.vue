<template>

		<div class="enroll">
			<enrollHeader></enrollHeader>
			<loginTit></loginTit>
			<!--<enrollcar></enrollcar>-->
			<!--<loginCenter></loginCenter>-->
			<enrollButton></enrollButton>
		</div>
</template>

<script>
//	import enrollcar from '../components/enrollcar';
	import loginTit from '../components/loginTit';
	import enrollHeader from '../components/enrollHeader';
//	import loginCenter from '../components/loginCenter';
	import enrollButton from '../components/enrollButton';

	export default {
		name: 'enroll',

		components: {
//			enrollcar,
			loginTit,enrollHeader,enrollButton
		}

	}
</script>

<style>
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
	.enroll{
		width: 85%;
		margin: 0 auto;
	}
</style>