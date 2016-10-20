<!-- 输出结果显示所有团队的推广客服的提成 -->
<template>
<div>
	<el-row>
		<el-col :span="4">
			<el-button type="primary" icon="menu">上旬</el-button>	
		</el-col>
	</el-row>

	<!-- 上旬业绩 -->
    <el-row>
      <el-col :span="8" offset="2">
        <el-form-item class="m-input-disabeld" label="团队推广提成">
            <el-input v-model="shangxun_fei_ruanjian_yeji" disabled></el-input>
        </el-form-item>
      </el-col>  
   	</el-row>

	<el-row>
	  <el-col :span="8" offset="2">
	    <el-form-item class="m-input-disabeld" label="客服A提成">
	        <el-input v-model="shangxun_ruanjian_yeji" disabled></el-input>
	    </el-form-item>
	  </el-col>
	</el-row>

	<el-row>
	  <el-col :span="8" offset="2">
	    <el-form-item class="m-input-disabeld" label="客服b提成">
	        <el-input v-model="shangxun_ruanjian_yeji" disabled></el-input>
	    </el-form-item>
	  </el-col>  
	</el-row>
<!-- /上旬业绩 -->

</div>
</template>


<script>
export default {
	props:{

	},
	data(){
		return {

		}
	},
}
</script>