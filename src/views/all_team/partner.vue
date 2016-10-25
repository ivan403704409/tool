<!-- 合伙人 -->
<template>
<el-row :gutter="20">
  <el-col :span="4" style="margin-bottom: 20px; padding-right: 12px;">
    <el-input class="text-right" v-model="data.name" placeholder="合伙人"></el-input>
  </el-col>
  <el-col :span="16" style="padding-left: 0; padding-right: 10px;">
	<el-input :value="fenhong" disabled></el-input>
  </el-col>
  <el-col :span="1">
    <el-popover
      ref="popover1"
      placement="top"
      width="160"
      v-model="visible">
      <p>是否删除此合伙人？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click.native="visible = false">取消</el-button>
        <el-button type="primary" size="mini" @click.native="onDeletePartner">确定</el-button>
      </div>
    </el-popover>
    <el-tooltip class="item" effect="dark" content="删除合伙人" placement="right">
      <el-button type="danger" icon="delete" v-popover:popover1></el-button>
    </el-tooltip>
  </el-col>
</el-row>
</template>

<script>
export default {
  components:{
  },
  props: {
  	index: Number,
    data: Object,
    fenhong: [Number, String]
  },
  data() {
      return {
       	visible: false,
      }
    },
    watch: {
      
    },
    computed: {

      yeji(){
        return +this.fei_ruanjian_yeji + +this.ruanjian_yeji
      },

      // 团队非软件的比例
      fei_ruanjian_ticheng_bili(){
        return getPercentNotSortware(+this.fei_ruanjian_yeji)
      },

      // 团队软件的比例
      ruanjian_ticheng_bili(){
        return getPercentSortware(+this.ruanjian_yeji)
      },

      // 团队软件毛利
      ruanjian_maoli(){
        let num = (+this.ruanjian_yeji) * getPercentNotSortware(+this.ruanjian_yeji)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 团队非软件毛利
      fei_ruanjian_maoli(){
        let num = (+this.fei_ruanjian_yeji) * getPercentNotSortware(+this.fei_ruanjian_yeji)
        return num - (num - num * this.kousui) * this.kousui
      },

      // 团队毛利
      maoli(){
        return +this.fei_ruanjian_maoli + +this.ruanjian_maoli
      },

      // 成本
      chengben(){
        return +this.gongzi_chengben + +this.qita_chengben
      },

      // 团队营利利润
      yingli_lirun(){
        return +this.maoli - +this.chengben
      },

      // 客服团队提成=营业利润*30%
      ticheng() {
        return this.yingli_lirun * this.ticheng_bili
      },

    },
    methods: {
      onDeletePartner(){
      	this.visible = false
      	this.$emit('on-delete-partner', this.index)
      },
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
.text-right input{
   	text-align: right;
}
.m-input-disabeld{
     .el-input__inner{
    border: 0;
  }
  input[disabled]{
    cursor: initial!important;
    color: #193F7D!important;
  }
}
input[disabled]{
	cursor: initial!important;
	color: #193F7D!important;
}
</style>