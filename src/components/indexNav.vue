<template>
	<div class="nav">
			<ul class="nav1_ul">
				<li><img src="../assets/img/programme_shangye.png" />
					<p>旅行</p>
				</li>
				<li><img src="../assets/img/programme_shangcheng.png" />
					<p>商城</p>
				</li>
				<li><img src="../assets/img/programme_shangye.png" />
					<p>门票</p>
				</li>
				<li><img src="../assets/img/programme_shangye.png" />
					<p>游记</p>
				</li>
			</ul>

			<ul class="nav2_ul">
				<li><img src="../assets/img/transl_video.png" />
					<p>视频</p>
				</li>
				<li><img src="../assets/img/transl_market.png" />
					<p>故事</p>

				</li>
				<li><img class="firstimg" src="../assets/img/first_push.png" />
					<p>达人IP</p>
				</li>
				<li><img src="../assets/img/programme_aa.png" />
					<p>AA</p>
				</li>
				<li><img src="../assets/img/programme_gongyi.png" />
					<p>公益</p>
				</li>
			</ul>
			<ul class="nav2_ul">
				<li><img src="../assets/img/programme_jieban.png" />
					<p>结伴</p>
				</li>
				<li><img src="../assets/img/transl_huati.png" />
					<p>问达</p>

				</li>
				<li><img class="firstimg" src="../assets/img/transl_mission.png" />
					<p>任务</p>
				</li>
				<li><img src="../assets/img/travel_hotel.png" />
					<p>酒店</p>
				</li>
				<li><img src="../assets/img/travel_traffic.png" />
					<p>交通</p>
				</li>
			</ul>
		</div>
</template>

<script>
</script>

<style>
	.nav {
		z-index: 10;
		width: 90%;
		background: white;
		border-radius: .1rem;
		position: absolute;
		top: 1.5rem;
		margin-left: 5%;
	}
	
	.nav .nav1_ul {
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin-bottom: .29rem;
		padding-top: .15rem;
	}
	
	.nav .nav1_ul li {
		font-size: .13rem;
		width: 25%;
	}
	
	.nav1_ul img {
		width: .5rem;
		height: .5rem;
	}
	
	.nav2_ul {
		display: flex;
		justify-content: space-around;
		text-align: center;
		padding-bottom: .1rem;
	}
	
	.nav2_ul li {
		font-size: .13rem;
		width: 20%;
	}
	
	.nav2_ul li img {
		width: .28rem;
		height: .28rem;
	}
	
</style>