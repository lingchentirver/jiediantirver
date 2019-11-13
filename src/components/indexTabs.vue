<template>
	<div class="indexTabs">
		
	<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="精选" name="jingxuan">精选
    <p>用户管理</p>
    <p>用户管理</p>
    <p>用户管理</p>
    <p>用户管理</p>
    <p>用户管理</p>
    <p>用户管理</p>
    </el-tab-pane>
    <el-tab-pane label="旅行" name="lvxing">旅行</el-tab-pane>
    <el-tab-pane label="商城" name="changcheng">商城</el-tab-pane>
    <el-tab-pane label="票务" name="piaowu">票务</el-tab-pane>
    <el-tab-pane label="游记" name="youji">游记</el-tab-pane>
  </el-tabs>
  
	</div>
</template>

<script>
	  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
	.el-tabs__item {
		padding: 0 33px;
	}
</style>