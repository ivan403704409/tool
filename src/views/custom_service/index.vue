<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item >客服提成计算工具</el-breadcrumb-item>
</el-breadcrumb>

<el-form class="m-form" ref="form" label-width="150px" @submit.prevent="onSubmit">
  
  <el-form-item label="客服A所在团队总业绩 - 非软件">
    <el-input v-model="income_notSortware" number></el-input>
  </el-form-item>
  <el-form-item label="客服A所在团队总业绩 - 软件">
    <el-input v-model="income_sortware" number></el-input>
  </el-form-item>

  <el-form-item label="扣税">
    <span>7%</span>
  </el-form-item>

  <el-form-item label="提成比例">
    <p>
      <span>非软件</span>14% 
    </p>
    <p>
      <span>软件</span>14%
    </p>
  
  </el-form-item>


  <el-form-item label="团队毛利润">
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

 
  <el-form-item label="客服工资成本">
    <el-input v-model="salary_kefu" number></el-input>
  </el-form-item>
  <el-form-item label="推广工资成本">
    <el-input v-model="salary_tuiguang" number></el-input>
  </el-form-item>

  

  <el-form-item label="客服团队瓜分比例">
    <p>30%</p>
  </el-form-item>

  <el-form-item label="客服团队营业利润">
    <p>{{ lirun_team }}</p>
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
  </el-form-item>


  <el-form-item label="扣税">
    <span>7%</span>
  </el-form-item>

  
  <el-form-item label="客服A-合计毛利润">
    <p>{{ maoli }}</p>
  </el-form-item>
  
  <el-form-item label="客服A-客服贡献比例">
    <p>{{ this.maoli_a/this.maoli * 100 + '%' }}</p>
  </el-form-item>
  
  <el-form-item label="客服A提成">
        <p>{{ ticheng_a }}</p>
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

  export default {
    data() {
      return {
        maoli: 0,
        maoli_a: 0,
        maoli_notSoftware_a: 0,
        maoli_software_a: 0,

        maoli_notSoftware: 0,
        maoli_software: 0,

        income_notSortware: 0,
        income_sortware: 0,

        // 客服团队提成
        ticheng_team: 0,
        ticheng_a: 0,

        income_notSortware_a: 0,
        income_sortware_a: 0,

        lirun_hehuoren: 0,
        fenhong_yunying: 0,
        fenhong_cto: 0,
        lirun_rest: 0,
        yusuan_nextmonth: 0,

        percent_a: 0,
        lastmon_output_money: '',

        salary_kefu: '',
        salary_tuiguang: '',
      }
    },
    computed:{
      //        非软件毛利润 = 非软件总业绩*比例（根据软件总业绩去判断是多少提成比例）- 扣税（（非软件总业绩*比例-非软件总业绩*比例*7%）*7%）
      maoli_notSoftware(){
        let num = (+this.income_notSortware) * getPercentNotSortware(+this.income_notSortware)
        return num - (num - num*0.07)*0.07
      },
      
      // 软件毛利润=软件总业绩*比例（根据软件总业绩去判断是多少提成比例）- 扣税（（软件总业绩*比例-软件总业绩*比例*7%）*7%）
      maoli_software(){
        let num = (+this.income_sortware) * getPercentNotSortware(+this.income_sortware)
        return num - (num - num*0.07)*0.07
      },  
      
      // 合计毛利润=非软件毛利润 + 软件毛利润
      maoli(){
        return this.maoli_notSoftware + this.maoli_software
      },

      // 客服团队营业利润 =（ 团队毛利润 - 团队工资成本） * 30%
      lirun_team(){
        return (this.maoli - this.salary_tuiguang - this.salary_kefu) * 0.3
      },

      // 客服团队提=（团队毛利润-团队工资成本）*30%
      ticheng_team(){
        return (this.lirun_team - this.salary_tuiguang - this.salary_kefu) * 0.3
      },

      // 客服A非软件毛利润=客服A非软件总业绩*比例（和第三个提成比例一样）- 扣税（（客服A非软件总业绩*比例（和第三个提成比例一样）-非软件总业绩*比例（和第三个提成比例一样）*7%）*7%）
      maoli_notSoftware_a(){
        // 非软件总业绩*比例（根据软件总业绩去判断是多少提成比例）- 扣税（（非软件总业绩*比例-非软件总业绩*比例*7%）*7%）
        let num = (+this.income_notSortware_a) * getPercentNotSortware(+this.income_notSortware_a)
        return num - (num - num*0.07)*0.07
      },

      // 客服A软件毛利润=客服A软件总业绩*比例（和第三个提成比例一样）- 扣税（（客服A软件总业绩*比例（和第三个提成比例一样）-客服A软件总业绩*比例（和第三个提成比例一样）*7%）*7%）
      maoli_software_a(){
        // 软件毛利润=软件总业绩*比例（根据软件总业绩去判断是多少提成比例）- 扣税（（软件总业绩*比例-软件总业绩*比例*7%）*7%）
        let num = (+this.income_sortware_a) * getPercentNotSortware(+this.income_sortware_a)
        return num - (num - num*0.07)*0.07
      },
      
      // 客服A合计毛利润=客服A非软件毛利润+客服A软件毛利润
      maoli_a(){
        return this.maoli_notSoftware_a + this.maoli_software_a
      },  


      // 客服A贡献比例=客服A合计毛利润/合计毛利润
      percent_a(){
        let res = this.maoli_a/this.maoli
        return res===res ? res : 0
      },

      // 客服A提成=客服团队提成*客服A贡献比例
      ticheng_a(){
        return this.ticheng_team * this.percent_a
      },

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>