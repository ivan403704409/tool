<!-- 侧边导航 -->
<template>
<div class="m-sidebar">
	<el-menu default-active="all_team" theme="dark" class="el-menu-vertical-demo" router>

	    <el-menu-item index="all_team"><i class="el-icon-setting"></i>全团队预算工具</el-menu-item>
	    <el-menu-item index="index"><i class="el-icon-menu"></i>推广提成计算工具</el-menu-item>
	    <el-menu-item index="custom_service"><i class="el-icon-message"></i>客服提成计算工具</el-menu-item>
	    <el-menu-item index="team"><i class="el-icon-setting"></i>大地团队预算工具</el-menu-item>
	 </el-menu>
</div>
</template>


<script>
	
</script>


<style scoped>
.m-sidebar{
	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	width: 220px;
	height: 100%;
	background-color: #324057;
}
</style>