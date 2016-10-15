<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item >大地团队预算工具</el-breadcrumb-item>
</el-breadcrumb>

<el-form class="m-form" ref="form" label-width="150px" @submit.prevent="onSubmit">
  
  <el-form-item label="总业绩 - 非软件">
    <el-input v-model="income_notSortware" number></el-input>
  </el-form-item>
  <el-form-item label="总业绩 - 软件">
    <el-input v-model="income_sortware" number></el-input>
  </el-form-item>

  <el-form-item label="扣税">
  	<span>7%</span>
  </el-form-item>

  <el-form-item label="提成比例">
  	<p>
  		<span>非软件：{{  curPercent_notSortfare*1000/10 + '%' }}</span>
  	</p>
  	<p>
  		<span>软件：{{ curPercent_sortfare*1000/10 + '%' }}</span>
  	</p>
	
  </el-form-item>


  <el-form-item label="毛利润">
  	<p>
  		<span>非软件： {{maoli_notSoftware}}</span>
  	</p>
    <p>
      <span>软件： {{maoli_software}}</span>
    </p>
  	<p>
  		<span>合计： {{maoli}}</span>
  	</p>
	
  </el-form-item>


  <el-form-item label="上月支出成本">
    <el-input v-model="lastmon_output_money" number></el-input>
  </el-form-item>

  <el-form-item label="营业利润">
  	<p>{{ yingli_lirun }}</p>
  </el-form-item>

  <el-form-item label="客服团队提成">
  	<p>{{ ticheng_team }}</p>
  </el-form-item>

	
  <el-form-item label="客服A-非软件总业绩">
    <el-input v-model="income_notSortware_a" number></el-input>
  </el-form-item>
  <el-form-item label="客服A-软件总业绩">
    <el-input v-model="income_sortware_a" number></el-input>
  </el-form-item>

  <el-form-item label="客服A-毛利润">
  	<p>
  		<span>非软件： {{maoli_notSoftware_a}}</span>
  	</p>
    <p>
      <span>软件： {{maoli_software_a}}</span>
    </p>
  	<p>
  		<span>合计 {{maoli}}</span>
  	</p>
  </el-form-item>
	
  
  <el-form-item label="客服A-客服贡献比例">
  	<p>{{ this.maoli_a/this.maoli * 100 + '%' }}</p>
  </el-form-item>
	
	<el-form-item label="客服A提成">
		  	<p>{{ ticheng_a }}</p>
	</el-form-item>
	
	<el-form-item label="合伙人分配利润">
		  	<p>{{ lirun_hehuoren }}</p>
	</el-form-item>
	
	<el-form-item label="运营官分红">
		  	<p>{{ fenhong_yunying }}</p>
	</el-form-item>
	

	<el-form-item label="CTO分红">
		  	<p>{{ fenhong_cto }}</p>
	</el-form-item>

	<el-form-item label="净利润">
		  	<p>{{ lirun_rest }}</p>
	</el-form-item>

	<el-form-item label="下月成本预算">
		  	<p>{{ yusuan_nextmonth }}</p>
	</el-form-item>
</el-form>	
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



const getPercentNotSortware = getPercent(percentNotSortfare)
const getPercentSortware = getPercent(percentSortware)

// 扣税
const kousui = 0.07
export default {
  data() {
      return {
        kousui,


        income_notSortware: '', //非软件总业绩，  手动输入
        income_sortware: '',  //软件总业绩，  手动输入

        maoli: '',    //总毛利
        maoli_notSoftware: '',  //非软件毛利
        maoli_software: '',     //软件毛利

        lastmon_output_money: '', //上月支出成本
        yingli_lirun: '', //营业利润

        ticheng_team: '', // 客服团队提成

        maoli_a: '',  //客服a总毛利
        maoli_notSoftware_a: '',  //客服a非软件毛利
        maoli_software_a: '',     //客服a软件毛利
        percent_a: '',  //客服A贡献比例
        ticheng_a: '',  //客服a提成

        income_notSortware_a: '',   //客服a-非软件总业绩，手动输入
        income_sortware_a: '',    //客服a-软件总业绩，手动输入

        lirun_hehuoren: '',
        fenhong_yunying: '',
        fenhong_cto: '',
        lirun_rest: '',
        yusuan_nextmonth: '',
        
        curPercent_notSortfare: '',
        curPercent_sortfare: '',
      }
    },
    computed: {
      // 当前非软件的比例
      curPercent_notSortfare() {
        return getPercentNotSortware(+this.income_notSortware)
      },
      // 当前软件的比例
      curPercent_sortfare() {
        return getPercentSortware(+this.income_sortware)
      },
      //        非软件毛利润 = 非软件总业绩*比例（根据软件总业绩去判断是多少提成比例）- 扣税（（非软件总业绩*比例-非软件总业绩*比例*7%）*7%）
      maoli_notSoftware() {
        let num = (+this.income_notSortware) * this.curPercent_notSortfare
        return num - (num - num * this.kousui) * this.kousui
      },

      // 软件毛利润=软件总业绩*比例（根据软件总业绩去判断是多少提成比例）- 扣税（（软件总业绩*比例-软件总业绩*比例*7%）*7%）
      maoli_software() {
        let num = (+this.income_sortware) * this.curPercent_sortfare
        return num - (num - num * this.kousui) * this.kousui
      },

      // 合计毛利润=非软件毛利润 + 软件毛利润
      maoli() {
        return this.maoli_notSoftware + this.maoli_software
      },

      // 营业利润=合计毛利润-上月支出成本
      yingli_lirun() {
        return this.maoli - this.lastmon_output_money
      },

      // 客服团队提成=营业利润*30%
      ticheng_team() {
        return this.yingli_lirun * 0.3
      },

      // 客服A非软件毛利润=客服A非软件总业绩*比例（和第三个提成比例一样）- 扣税（（客服A非软件总业绩*比例（和第三个提成比例一样）-非软件总业绩*比例（和第三个提成比例一样）*7%）*7%）
      maoli_notSoftware_a() {
        // 非软件总业绩*比例（根据软件总业绩去判断是多少提成比例）- 扣税（（非软件总业绩*比例-非软件总业绩*比例*7%）*7%）
        let num = (+this.income_notSortware_a) * getPercentNotSortware(+this.income_notSortware_a)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 客服A软件毛利润=客服A软件总业绩*比例（和第三个提成比例一样）- 扣税（（客服A软件总业绩*比例（和第三个提成比例一样）-客服A软件总业绩*比例（和第三个提成比例一样）*7%）*7%）
      maoli_software_a() {
        // 软件毛利润=软件总业绩*比例（根据软件总业绩去判断是多少提成比例）- 扣税（（软件总业绩*比例-软件总业绩*比例*7%）*7%）
        let num = (+this.income_sortware_a) * getPercentNotSortware(+this.income_sortware_a)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 客服A合计毛利润=客服A非软件毛利润+客服A软件毛利润
      maoli_a() {
        return this.maoli_notSoftware_a + this.maoli_software_a
      },


      // 客服A贡献比例=客服A合计毛利润/合计毛利润
      percent_a() {
        let res = this.maoli_a / this.maoli
        return res === res ? res : 0
      },

      // 客服A提成=客服团队提成*客服A贡献比例
      ticheng_a() {
        return this.ticheng_team * this.percent_a
      },


      // 合伙人分配利润=营业利润*70%
      lirun_hehuoren() {
        return this.yingli_lirun * 0.7
      },

      // 运营官分红=营业利润*70%*10%
      fenhong_yunying() {
        return this.yingli_lirun * 0.7 * 0.1
      },

      // CTO分红=营业利润*70%*10%
      fenhong_cto() {
        return this.yingli_lirun * 0.7 * 0.1
      },

      // 净利润=合伙人分配利润-（运营官分红+CTO分红）
      lirun_rest() {
        return this.lirun_hehuoren - (this.fenhong_yunying + this.fenhong_cto)
      },

      // 下月成本预算=净利润*40%
      yusuan_nextmonth() {
        return this.lirun_rest * 0.4
      },
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>