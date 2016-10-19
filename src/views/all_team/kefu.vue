<!-- 客服 -->
<template>
<div>
<!-- 上旬业绩 -->
    <el-row>
      <el-col :span="8">
        <el-form-item label="上旬 -- 非软件业绩">
            <el-input v-model="shangxun_fei_ruanjian_yeji"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="上旬 -- 软件业绩">
            <el-input v-model="shangxun_ruanjian_yeji"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="合计">
            <el-input :value="+shangxun_fei_ruanjian_yeji + +shangxun_ruanjian_yeji" disabled></el-input>
        </el-form-item>
      </el-col>
    </el-row>
<!-- /上旬业绩 -->
	
<!-- 下旬业绩 -->
    <el-row>
      <el-col :span="8">
        <el-form-item label="下旬 -- 非软件业绩">
            <el-input v-model="xiaxun_fei_ruanjian_yeji"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="下旬 -- 软件业绩">
            <el-input v-model="xiaxun_ruanjian_yeji"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="合计">
            <el-input :value="+xiaxun_fei_ruanjian_yeji + +xiaxun_ruanjian_yeji" disabled></el-input>
        </el-form-item>
      </el-col>
    </el-row>
<!-- /下旬业绩 -->

	<el-row>
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="扣税">
            <el-input value="7%" disabled></el-input>
        </el-form-item>
      </el-col>
    </el-row>

<!-- 上旬毛利润 -->
	<el-row>
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="上旬 - 非软件毛利润">
            <el-input :value="shangxun_fei_ruanjian_maoli" disabled></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="上旬 - 软件毛利润">
            <el-input :value="shangxun_ruanjian_maoli" disabled></el-input>
        </el-form-item>
      </el-col> 
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="合计">
            <el-input :value="shangxun_maoli" disabled></el-input>
        </el-form-item>
      </el-col>        
    </el-row>
<!-- /上旬毛利润 -->

<!-- 下旬毛利润 -->
	<el-row>
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="下旬 - 非软件毛利润">
            <el-input :value="xiaxun_fei_ruanjian_maoli" disabled></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="下旬 - 软件毛利润">
            <el-input :value="xiaxun_ruanjian_maoli" disabled></el-input>
        </el-form-item>
      </el-col> 
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="合计">
            <el-input :value="xiaxun_maoli" disabled></el-input>
        </el-form-item>
      </el-col>        
    </el-row>
<!-- /下旬毛利润 -->

<!-- 所在推广团队的贡献比率 -->
	<el-row>
      <el-col :span="24">
        <el-form-item class="m-input-disabeld" label="上旬贡献比率">
            <el-input :value="shangxun_gongxian_bili*1000/10 + '%'" disabled></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item class="m-input-disabeld" label="下旬贡献比率">
            <el-input :value="xiaxun_gongxian_bili*1000/10 + '%'" disabled></el-input>
        </el-form-item>
      </el-col> 
    </el-row>
<!-- /所在推广团队的贡献比率 -->


<!-- 所在团队成本 -->
    <el-row>
      <el-col :span="8">
        <el-form-item label="上旬 -- 所在团队成本">
            <el-input v-model="shangxun_chengben"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="下旬 -- 所在团队成本">
            <el-input v-model="xiaxun_chengben"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="合计">
            <el-input :value="+shangxun_chengben + +xiaxun_chengben" disabled></el-input>
        </el-form-item>
      </el-col>
    </el-row>
<!-- /所在团队成本 -->

<!-- 营业利润 -->
    <el-row>
      <el-col :span="8">
        <el-form-item label="上旬 -- 营业利润">
            <el-input v-model="shangxun_yingli_lirun"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="下旬 -- 营业利润">
            <el-input v-model="xiaxun_yingli_lirun"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item class="m-input-disabeld" label="合计">
            <el-input :value="+shangxun_yingli_lirun + +xiaxun_yingli_lirun" disabled></el-input>
        </el-form-item>
      </el-col>
    </el-row>
<!-- /营业利润 -->

	<el-row>
      <el-col :span="8">
        <el-form-item label="分配比率">
            <el-input v-model="fenpei_bili"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

<!-- 提成 -->
	<el-row>
	  <el-col :span="8">
	    <el-form-item class="m-input-disabeld" label="上旬提成">
	        <el-input :value="shangxun_ticheng" disabled></el-input>
	    </el-form-item>
	  </el-col>

	  <el-col :span="8">
	    <el-form-item class="m-input-disabeld" label="下旬提成">
	        <el-input :value="xiaxun_ticheng" disabled></el-input>
	    </el-form-item>
	  </el-col>

	  <el-col :span="8">
	    <el-form-item class="m-input-disabeld" label="合计">
	        <el-input :value="+shangxun_ticheng + +xiaxun_ticheng" disabled></el-input>
	    </el-form-item>
	  </el-col>
	</el-row>
<!-- /提成 -->
</div>
</template>


<script>
import getPercent from 'src/util/percent.js'
// 软件提成比例
var  percentNotSortfare = [
	{ value: 5999,  percent: 10,  },
	{ value: 11999, percent: 12,  },
	{ value: 17999, percent: 14,  },
	{ value: 23999, percent: 16,  },
	{ value: 29999, percent: 18,  },
	{ value: 49999, percent: 20,  },
	{ value: 79999, percent: 22,  },
	{ value: 80000, percent: 24,  }
]

// 非软件提成比例
const percentSortware = [
	{ value: 9999,   percent: 10 },
	{ value: 19999,  percent: 12 },
	{ value: 29999,  percent: 14 },
	{ value: 39999,  percent: 16 },
	{ value: 49999,  percent: 18 },
	{ value: 79999,  percent: 20 },
	{ value: 119999, percent: 22 },
  { value: 120000, percent: 24 }
]

// 扣税
const kousui = 0.07

const getPercentNotSortware = getPercent(percentNotSortfare)
const getPercentSortware = getPercent(percentSortware)

export default {
	props: [
		'tuandui_shangxun_maoli', 
		'tuandui_xiaxun_maoli', 
		'tuandui_shangxun_yingli_lirun', 
		'tuandui_xiaxun_yingli_lirun',
		'tuandui_shangxun_yeji',
		'tuandui_xiaxun_yeji'
	],
	data(){
		return {
			kousui: '', //扣税

			// 输入
			shangxun_fei_ruanjian_yeji: '',//上旬非软件业绩
			shangxun_ruanjian_yeji: '',	   //上旬软件业绩
			xiaxun_fei_ruanjian_yeji: '',  //下旬非软件业绩
			xiaxun_ruanjian_yeji: '',	   //下旬软件业绩


			// 计算
			// 毛利
			shangxun_fei_ruanjian_maoli: '',
			shangxun_ruanjian_maoli: '',
			shangxun_maoli: '',
			xiaxun_fei_ruanjian_maoli: '',
			xiaxun_ruanjian_maoli: '',
			xiaxun_maoli: '',

			// 贡献比率
			shangxun_gongxian_bili: '',	//上旬贡献比率
			xiaxun_gongxian_bili: '',	//下旬贡献比率

			// 成本
			shangxun_chengben: '',
			xiaxun_chengben: '',

			// 利润
			shangxun_yingli_lirun: '',
			xiaxun_yingli_lirun: '',

			// 客服所在推广团队分配比率
			fenpei_bili: '0.3',

			// 提成
			shangxun_ticheng: '',
			xiaxun_ticheng: '',
		}
	},
	computed:{
		shangxun_fei_ruanjian_maoli(){
	        let num = (+this.shangxun_fei_ruanjian_yeji) * getPercentNotSortware(+this.tuandui_shangxun_yeji)
	        return num - (num - num * this.kousui) * this.kousui
		},
		shangxun_ruanjian_maoli(){
	        let num = (+this.shangxun_ruanjian_yeji) * getPercentSortware(+this.tuandui_xiaxun_yeji)
	        return num - (num - num * this.kousui) * this.kousui
		},
		shangxun_maoli(){
			return this.shangxun_fei_ruanjian_maoli + this.shangxun_ruanjian_maoli
		},
		xiaxun_fei_ruanjian_maoli(){
	        // TODO 后面的shangxun_fei_ruanjian_yeji 最后要改成全团队的总业绩
	        let num = (+this.xiaxun_fei_ruanjian_yeji) * getPercentNotSortware(+this.xiaxun_fei_ruanjian_yeji)
	        return num - (num - num * this.kousui) * this.kousui
		},
		xiaxun_ruanjian_maoli(){
	        // TODO 后面的shangxun_ruanjian_yeji 最后要改成全团队的总业绩
	        let num = (+this.xiaxun_ruanjian_yeji) * getPercentSortware(+this.xiaxun_ruanjian_yeji)
	        return num - (num - num * this.kousui) * this.kousui
		},
		xiaxun_maoli(){
			return this.xiaxun_fei_ruanjian_maoli + this.xiaxun_ruanjian_maoli
		},


		shangxun_gongxian_bili(){
			if( !this.shangxun_maoli || !this.tuandui_shangxun_maoli ){
				return 0
			}
			return this.shangxun_maoli / this.tuandui_shangxun_maoli
		},

		xiaxun_gongxian_bili(){
			if( !this.xiaxun_maoli || !this.tuandui_xiaxun_maoli ){
				return 0
			}
			return this.xiaxun_maoli / this.tuandui_xiaxun_maoli
		},

		shangxun_yingli_lirun(){
			return this.shangxun_maoli - this.shangxun_chengben
		},

		xiaxun_yingli_lirun(){
			return this.xiaxun_maoli - this.xiaxun_chengben
		},

		// 上旬该推广团队营业利润*30%（分配比率）*该客服上旬贡献比率
		shangxun_ticheng(){
			return this.tuandui_shangxun_yingli_lirun * 
					this.fenpei_bili * 
					this.shangxun_gongxian_bili
		},

		// 下旬该推广团队营业利润*30%（分配比率）*该客服下旬贡献比率
		xiaxun_ticheng(){
			return this.tuandui_xiaxun_yingli_lirun * 
					this.fenpei_bili * 
					this.xiaxun_gongxian_bili
		},
	},
}	
</script>


<style>
	
</style>