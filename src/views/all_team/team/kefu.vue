<template>
<div>
<el-form ref="form" label-width="150px" @submit.prevent="onSubmit">
  
    <div class="m-form">
      <el-row style="margin-top: 20px;">
        <el-col :span="6">
          <el-input placeholder="请入客服名" v-model="data.name">
			  <template slot="prepend">客服</template>
			</el-input>
        </el-col>
        <el-col :span="1" :offset="14">
        	<el-popover
			  ref="popover5"
			  placement="top"
			  width="160"
			  v-model="visible2">
			  <p>是否删除此客服？</p>
			  <div style="text-align: right; margin: 0">
			    <el-button size="mini" type="text" @click.native="visible2 = false">取消</el-button>
			    <el-button type="primary" size="mini" @click.native="onDelete">确定</el-button>
			  </div>
			</el-popover>
          <el-tooltip class="item" effect="dark" content="删除客服" placement="bottom"  v-show="kefuLen>1">
          	<el-button type="danger" icon="delete" v-popover:popover5></el-button>
		    </el-tooltip>
        </el-col>
        <el-col :span="1" :offset="kefuLen>1 ? 1 : 16">
        	<el-tooltip class="item" effect="dark" content="添加客服" placement="bottom">
        		<el-button type="primary" icon="plus" @click.native="addKefu"></el-button>
		    </el-tooltip>
        </el-col>
      </el-row>
      <hr>
    <div class="ctn">
      <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="非软件业绩">
                <el-input v-model="data.fei_ruanjian_yeji" placeholder="非软件业绩"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="软件业绩">
                <el-input v-model="data.ruanjian_yeji" placeholder="软件业绩"></el-input>
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
              <el-input :value="fei_ruanjian_ticheng_bili*1000/10 + '%'" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="m-input-disabeld" label="软件提成比例">
              <el-input :value="ruanjian_ticheng_bili*1000/10 + '%'" disabled></el-input>
          </el-form-item>
        </el-col>        
      </el-row>
        
      <!-- 上旬毛利润 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="非软件毛利润">
                <el-input :value="fei_ruanjian_maoli" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="软件毛利润">
                <el-input :value="ruanjian_maoli" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计" >
                <el-input :value="maoli" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /上旬毛利润 -->
	
		<el-row :gutter="20">
          <el-col :span="24">
            <el-form-item class="m-input-disabeld" label="所在推广团队的贡献比率">
                <el-input :value="gongxian_bili*1000/10 + '%'" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
	
      
      <!-- 上旬成本 -->
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="工资成本">
                <el-input v-model="data.gongzi_chengben" placeholder="团队上旬工资成本"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="其它开支">
                <el-input v-model="data.qita_chengben" placeholder="团队上旬其它开支"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item class="m-input-disabeld" label="合计">
                <el-input :value="chengben" disabled></el-input>
            </el-form-item>
          </el-col>
       </el-row>
     <!-- 上旬成本-end -->
      
      <!-- 营业利润 -->
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item class="m-input-disabeld" label="营业利润">
                <el-input :value="yingli_lirun" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      <!-- /营业利润-end -->
        
        <!-- 推广瓜分比例 -->     
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="推广提成比例">
                <el-input v-model="data.ticheng_bili" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item class="m-input-disabeld" label="提成">
                <el-input :value="ticheng" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- /推广瓜分比例 -->


    </div>
    <!-- /content -->

</div>

</el-form>	
</div>

</template>

<script>
import { getPercentSortware, getPercentNotSortware } from 'src/views/get_percent.js'


// 扣税
const kousui = 0.07
export default {
  props: {
  	index: Number,
  	data: Object,
  	kefuLen: Number,
  },
  data() {
      return {
      	 visible2: false,

         // 团队名
          // name: '',

          // 扣税点
          kousui: 0.07,

          // 业绩
          fei_ruanjian_yeji: '',
          ruanjian_yeji: '',
          yeji: '',

          // 提成比例
          ruanjian_ticheng_bili: '',
          fei_ruanjian_ticheng_bili: '',


          // 毛利（税后毛得润）
          
          fei_ruanjian_maoli: '',
          ruanjian_maoli: '',
          maoli: '',  //一个月的总毛利

          gongxian_bili: '',	//所在推广团队的贡献比率

          // 成本
          gongzi_chengben: '',
          qita_chengben: '',
          chengben: '', //一个月的总成本


          // 营业利润          yingli_lirun: '', //一个月的营业利润

          // 提成
          // ticheng_bili: 0.3,
          ticheng: '',  //一个月的提成

      }
    },
    watch: {
      ticheng(newVal){
      	this.$emit('on-update', newVal, this.index)
      }
    },
    computed: {

      yeji(){
        return +this.data.fei_ruanjian_yeji + +this.data.ruanjian_yeji
      },

      // 团队非软件的比例
      fei_ruanjian_ticheng_bili(){
        return getPercentNotSortware(+this.data.fei_ruanjian_yeji)
      },

      // 团队软件的比例
      ruanjian_ticheng_bili(){
        return getPercentSortware(+this.data.ruanjian_yeji)
      },

      // 团队软件毛利
      ruanjian_maoli(){
        let num = (+this.data.ruanjian_yeji) * getPercentNotSortware(+this.data.ruanjian_yeji)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 团队非软件毛利
      fei_ruanjian_maoli(){
        let num = (+this.data.fei_ruanjian_yeji) * getPercentNotSortware(+this.data.fei_ruanjian_yeji)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 团队毛利
      maoli(){
        return +this.fei_ruanjian_maoli + +this.ruanjian_maoli
      },

      // 所在推广团队的贡献比率
      gongxian_bili(){
      	let res = this.maoli / this.$parent.$parent.maoli
      	return res === res ? res : 0
      },

      // 成本
      chengben(){
        return +this.data.gongzi_chengben + +this.data.qita_chengben
      },

      // 团队营利利润
      yingli_lirun(){
        return +this.maoli - +this.chengben
      },

      // 客服团队提成=营业利润*30%
      ticheng() {
        return this.data.ticheng_bili * this.gongxian_bili
      },

    },
    methods: {
      onDelete(){
      	this.$emit('on-delete', this.index)
      	this.visible2 = false
      },
      addKefu(){
      	this.$emit('on-add')
      },
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