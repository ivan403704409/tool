<template>
<div>
<el-breadcrumb separator="/">
  <el-breadcrumb-item >全团队预算工具</el-breadcrumb-item>
</el-breadcrumb>

<el-form ref="form" label-width="150px" @submit.prevent="onSubmit">
  
  <div class="m-form">
    <div class="head">
      全团队总业绩
    </div>
      <div class="ctn">
        <el-row>
          <el-col :span="8">
            <el-form-item label="非软件总业绩">
                <el-input v-model="income_notSortware" placeholder="全团队非软件总业绩"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="软件总业绩">
                <el-input v-model="income_sortware" placeholder="全团队软件总业绩"></el-input>
            </el-form-item>
          </el-col>        
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="扣税">
                <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="非软件提成比例">
                <el-input :value="curPercent_notSortfare*1000/10 + '%'" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="软件提成比例">
                <el-input :value="curPercent_sortfare*1000/10 + '%'" disabled></el-input>
            </el-form-item>
          </el-col>        
        </el-row>

        
        <el-row>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="非软件毛利润">
                <el-input :value="maoli_notSoftware" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="软件毛利润">
                <el-input :value="maoli_software" disabled></el-input>
            </el-form-item>
          </el-col> 
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="maoli" disabled></el-input>
            </el-form-item>
          </el-col>        
        </el-row>

      </div>
  </div>
  
  <!-- 123123 -->
  
  <div class="m-form">
    <div class="head">
      <el-row>
        <el-col :span="6">
          <el-input v-model="tuiguang_name" placeholder="请入推广名"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="head">
      {{tuiguang_name}}团队总业绩
    </div>

    <div class="ctn">
      <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="上旬 -- 非软件">
                <el-input v-model="tuandui_shangxun_fei_ruanjian_yeji" placeholder="上旬非软件业绩"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="上旬 -- 软件">
                <el-input v-model="tuandui_shangxun_ruanjian_yeji" placeholder="上旬软件业绩"></el-input>
            </el-form-item>
          </el-col>
      </el-row>

      <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="下旬 -- 非软件">
                <el-input v-model="tuandui_xiaxun_fei_ruanjian_yeji" placeholder="下旬非软件业绩"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="下旬 -- 软件">
                <el-input v-model="tuandui_xiaxun_ruanjian_yeji" placeholder="下旬软件业绩"></el-input>
            </el-form-item>
          </el-col>
      </el-row>


      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item class="m-input-disabeld" label="扣税">
              <el-input value="7%" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item class="m-input-disabeld" label="非软件提成比例">
              <el-input :value="tuandui_fei_ruanjian_ticheng_bili*1000/10 + '%'" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="m-input-disabeld" label="软件提成比例">
              <el-input :value="tuandui_ruanjian_ticheng_bili*1000/10 + '%'" disabled></el-input>
          </el-form-item>
        </el-col>        
      </el-row>
        
      <!-- 上旬毛利润 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="上旬 -- 非软件毛利润">
                <el-input :value="tuandui_shangxun_fei_ruanjian_maoli" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="上旬 -- 软件毛利润">
                <el-input v-model="tuandui_shangxun_ruanjian_maoli" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计" >
                <el-input :value="tuandui_shangxun_maoli" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /上旬毛利润 -->

      <!-- 下旬毛利润 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="下旬 -- 非软件毛利润">
                <el-input :value="tuandui_xiaxun_fei_ruanjian_maoli" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="下旬 -- 软件毛利润">
                <el-input v-model="tuandui_xiaxun_ruanjian_maoli" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="tuandui_xiaxun_maoli" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /下旬毛利润 -->


      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item class="m-input-disabeld" label="税后全月总计毛利润">
              <el-input :value="tuandui_shangxun_maoli + tuandui_xiaxun_maoli" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>


      
      <!-- 上旬成本 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="上旬 -- 工资成本">
                <el-input v-model="tuandui_shangxun_gongzi" placeholder="团队上旬工资成本"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="上旬 -- 其它开支">
                <el-input v-model="tuandui_shangxun_qita_kaizi" placeholder="团队上旬其它开支"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="+tuandui_shangxun_gongzi + +tuandui_shangxun_qita_kaizi" disabled></el-input>
            </el-form-item>
          </el-col>
       </el-row>
     <!-- 上旬成本-end -->
      
      <!-- 下旬成本 -->
       <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="下旬 -- 工资成本">
                <el-input v-model="tuandui_xiaxun_gongzi" placeholder="团队下旬工资成本"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="下旬 -- 其它开支">
                <el-input v-model="tuandui_xiaxun_qita_kaizi" placeholder="团队下旬其它开支"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="+tuandui_xiaxun_gongzi + (+tuandui_xiaxun_qita_kaizi)" disabled></el-input>
            </el-form-item>
          </el-col>
      </el-row>
      <!-- 下旬成本-end -->
      

      <!-- 营业利润 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="上旬营业利润">
                <el-input v-model="tuandui_shangxun_yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="下旬营业利润">
                <el-input v-model="tuandui_xiaxun_yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="+tuandui_shangxun_yingli_lirun + +tuandui_xiaxun_yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /营业利润-end -->
        
        <!-- 推广瓜分比例 -->            
        <el-form-item label="推广瓜分比例">
          <el-input v-model="tuandui_tuiguang_guafen_bili" ></el-input>
        </el-form-item>
        <!-- /推广瓜分比例 -->
        
        <!-- 推广提成 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="上旬推广提成">
                <el-input :value="tuandui_shangxun_yingli_lirun * tuandui_tuiguang_guafen_bili" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="下旬推广提成">
                <el-input :value="tuandui_xiaxun_yingli_lirun * tuandui_tuiguang_guafen_bili" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="tuandui_shangxun_yingli_lirun * tuandui_tuiguang_guafen_bili + tuandui_xiaxun_yingli_lirun * tuandui_tuiguang_guafen_bili" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- /推广提成 -->

    </div>
    <!-- /content -->

    <div class="head">
      {{tuiguang_name}}旗下所有客服
    </div>
    <div class="head">
        <el-row>
          <el-col :span="8">
            <el-input v-model="tuiguang_name" placeholder="请输入客服名"></el-input>
          </el-col>
        </el-row>
    </div>
    <div class="ctn">        
      <!--  -->
        <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="上旬 -- 非软件">
                  <el-input v-model="tuiguang_name" placeholder="上旬非软件业绩"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="上旬 -- 软件">
                  <el-input v-model="tuiguang_name" placeholder="上旬软件业绩"></el-input>
              </el-form-item>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="下旬 -- 非软件">
                  <el-input v-model="tuiguang_name" placeholder="下旬软件业绩"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="下旬 -- 软件">
                  <el-input v-model="tuiguang_name" placeholder="下旬软件业绩"></el-input>
              </el-form-item>
            </el-col>
        </el-row>
        
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="扣税点">
                <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        
      <!-- 上旬个人毛利润 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="上旬 -- 非软件毛利润">
              <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="上旬 -- 软件毛利润">
              <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
              <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /上旬个人毛利润 -->
        
      <!-- 下旬个人毛利润 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="下旬 -- 非软件毛利润">
              <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="下旬 -- 软件毛利润">
              <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
              <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /下旬个人毛利润 -->
        
      <!-- 所在推广团队的贡献比率 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="上旬 -- 所在推广团队的贡献比率">
              <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="下旬 -- 所在推广团队的贡献比率">
              <el-input value="7%" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /所在推广团队的贡献比率 -->
      
      <!-- 上旬成本 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="上旬 -- 工资成本">
                <el-input v-model="shangxun_gongzi_cb" placeholder="上旬非软件业绩"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="下旬 -- 工资成本">
                <el-input v-model="shangxun_qita_cb" placeholder="上旬软件业绩"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="+shangxun_gongzi_cb + +shangxun_qita_cb" disabled></el-input>
            </el-form-item>
          </el-col>
       </el-row>
      <!-- 上旬成本-end -->

      <!-- 营业利润 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="上旬 -- 营业利润">
                <el-input v-model="shangxun_yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="下旬 -- 营业利润">
                <el-input v-model="xiaxun_yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="+shangxun_yingli_lirun + +xiaxun_yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /营业利润-end -->
      
      <el-form-item label="所在推广团队分配比率">
          <el-input v-model="tuiguang_name" ></el-input>
      </el-form-item>

      
      <!-- 营业利润 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="上旬 -- 提成">
                <el-input v-model="shangxun_yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="下旬 -- 提成">
                <el-input v-model="xiaxun_yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="+shangxun_yingli_lirun + +xiaxun_yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /营业利润-end -->      

    </div>
    <!-- /content -->


</div>

 <!--  <el-form-item label="上月支出成本">
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
  		<span>合计： {{maoli_a}}</span>
  	</p>
  </el-form-item>
	
  
  <el-form-item label="客服A-客服贡献比例">
  	<p>{{ percent_a * 1000/10 + '%' }}</p>
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
	</el-form-item> -->
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
        tuiguang_name: '',  //推广名

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

        // 团队
        tuandui_shangxun_ruanjian_yeji: '',  //上旬软件业绩
        tuandui_shangxun_fei_ruanjian_yeji: '',  //上旬非软件业绩
        tuandui_xiaxun_ruanjian_yeji: '',  //下旬软件业绩
        tuandui_xiaxun_fei_ruanjian_yeji: '',  //下旬非软件业绩

        tuandui_ruanjian_ticheng_bili: '',  //团队软件提成比例
        tuandui_fei_ruanjian_ticheng_bili: '',  //团队非软件提成比例

        tuandui_shangxun_ruanjian_maoli: '',  //团队上旬软件毛利
        tuandui_shangxun_fei_ruanjian_maoli: '',  //团队上旬非软件毛利
        tuandui_xiaxun_ruanjian_maoli: '',  //团队下旬软件毛利
        tuandui_xiaxun_fei_ruanjian_maoli: '',  //团队下旬非软件毛利


        tuandui_shangxun_yingli_lirun: '',  //团队上旬营业利润
        tuandui_xiaxun_yingli_lirun: '',    //团队下旬营业利润

        tuandui_shangxun_gongzi: '',    //团队上旬工资成本
        tuandui_shangxun_qita_kaizi: '',  //团队上旬其它成本
        tuandui_xiaxun_gongzi: '',
        tuandui_xiaxun_qita_kaizi: '',

        tuandui_shangxun_maoli: '',   //团队上旬毛利
        tuandui_xiaxun_maoli: '',     //团队下旬毛利

        // -团队

        shangxun_gongzi_cb: '', //上旬工资成本
        shangxun_qita_cb: '',   //上旬其它成本
        xiaxun_gongzi_cb: '',   //下旬工资成本
        xiaxun_qita_cb: '',     //下旬其它成本

        shangxun_yingli_lirun: '', //上旬营业利润
        xiaxun_yingli_lirun: '',   //下旬营业利润

        shangxun_tuiguang_ticheng: '', //上旬推广提成
        xiaxun_tuiguang_ticheng: '',   //下旬推广提成

        tuandui_tuiguang_guafen_bili: 0.4,   //团队推广瓜分比例
      }
    },
    computed: {
      // 团队非软件的比例
      tuandui_fei_ruanjian_ticheng_bili(){
        return getPercentNotSortware(+this.tuandui_shangxun_fei_ruanjian_yeji + +this.tuandui_xiaxun_fei_ruanjian_yeji)
      },

      // 团队软件的比例
      tuandui_ruanjian_ticheng_bili(){
        return getPercentSortware(+this.tuandui_shangxun_ruanjian_yeji + +this.tuandui_xiaxun_ruanjian_yeji)
      },

      // 团队上旬软件毛利
      tuandui_shangxun_ruanjian_maoli(){
        let num = (+this.tuandui_shangxun_ruanjian_yeji) * getPercentNotSortware(+this.income_sortware)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 团队上旬非软件毛利
      tuandui_shangxun_fei_ruanjian_maoli(){
        let num = (+this.tuandui_shangxun_fei_ruanjian_yeji) * getPercentNotSortware(+this.income_notSortware)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 团队下旬非软件毛利
      tuandui_xiaxun_fei_ruanjian_maoli(){
        let num = (+this.tuandui_xiaxun_fei_ruanjian_yeji) * getPercentNotSortware(+this.income_notSortware)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 团队下旬软件毛利
      tuandui_xiaxun_ruanjian_maoli(){
        let num = (+this.tuandui_xiaxun_ruanjian_yeji) * getPercentNotSortware(+this.income_sortware)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 团队上旬毛得
      tuandui_shangxun_maoli(){
        return +this.tuandui_shangxun_fei_ruanjian_maoli + +this.tuandui_shangxun_ruanjian_maoli
      },

      // 团队上旬毛得
      tuandui_xiaxun_maoli(){
        return +this.tuandui_xiaxun_fei_ruanjian_maoli + +this.tuandui_xiaxun_ruanjian_maoli
      },

      // 团队上旬营利利润
      tuandui_shangxun_yingli_lirun(){
        return +this.tuandui_shangxun_fei_ruanjian_maoli + 
               +this.tuandui_shangxun_ruanjian_maoli
               - this.tuandui_shangxun_gongzi
               - this.tuandui_shangxun_qita_kaizi
      },
      // 团队下旬营利利润
      tuandui_xiaxun_yingli_lirun(){
        return +this.tuandui_xiaxun_fei_ruanjian_maoli +
               +this.tuandui_xiaxun_ruanjian_maoli
               - this.tuandui_xiaxun_gongzi
               - this.tuandui_xiaxun_qita_kaizi
      },

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
        // 客服A非软件总业绩*比例（和第三个提成比例一样
        let num = (+this.income_notSortware_a) * getPercentNotSortware(+this.income_notSortware)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 客服A软件毛利润=客服A软件总业绩*比例（和第三个提成比例一样）- 扣税（（客服A软件总业绩*比例（和第三个提成比例一样）-客服A软件总业绩*比例（和第三个提成比例一样）*7%）*7%）
      maoli_software_a() {
        // 客服A软件总业绩*比例（和第三个提成比例一样）
        let num = (+this.income_sortware_a) * getPercentNotSortware(+this.income_sortware)
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

<style>
.m-form{
  margin-bottom: 40px;
  border: 1px solid #ddd;
  padding: 0 10px;
  border-radius: 4px;
  .head{
    line-height: 50px;
    padding: 10px;
    color: #324057;
    border-bottom: 1px solid #ddd;
  }
  .ctn{
    padding: 40px 20px;
  }
}
.m-input{
  vertical-align: middle;
  font-size: 14px;
  color: #5e6d82;
  line-height: 1;
  padding: 11px 12px 11px 0;
  box-sizing: border-box;
}
</style>
<style>
.m-input-disabeld{
  .el-input__inner{
    border: 0;
  }
  input[disabled]{
    cursor: initial!important;
    color: #193F7D!important;
  }
}
</style>