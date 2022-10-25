<template>
<div class="title">
  <div style="line-height: 35px;margin-left: 20px">价格设置</div>
</div>
  <el-container class="content-row">
    <div class="input-tip">
      市场价：
    </div>
    <div class="input-field">
      <el-input v-model="queryParams.maketPrice"></el-input>
    </div>
  </el-container>
  <el-container class="content-row">
    <div class="input-tip">
      展示价：
    </div>
    <div class="input-field">
      <el-input v-model="queryParams.showPrice"></el-input>
    </div>
  </el-container>
  <el-container class="content-row">
    <div class="input-tip">
      积分数：
    </div>
    <div class="input-field">
      <el-input v-model="queryParams.coin"></el-input>
    </div>
  </el-container>
  <el-container class="content-row">
    <div class="input-tip">
      成本价：
    </div>
    <div class="input-field">
      <el-input v-model="queryParams.price"></el-input>
    </div>
  </el-container>
  <el-container class="content-row">
    <div class="input-tip">
      限购数：
    </div>
    <div class="input-field">
      <el-input v-model="queryParams.limit"></el-input>
    </div>
  </el-container>
  <div class="title">
    <div style="line-height: 35px;margin-left: 20px">库存数量</div>
  </div>
  <el-container class="content-row">
    <div class="input-tip">
      库存数量：
    </div>
    <div class="input-field">
      <el-input v-model="queryParams.count"></el-input>
    </div>
  </el-container>
  <el-container class="content-row">
    <div class="input-tip">
      基础数量：
    </div>
    <div class="input-field">
      <el-input v-model="queryParams.sellCount"></el-input>
    </div>
  </el-container>
  <el-container class="content-row">
    <div class="input-tip">
      浏览数量：
    </div>
    <div class="input-field">
      <el-input v-model="queryParams.viewCount"></el-input>
    </div>
  </el-container>
  <el-container class="content-row">
    <el-button type="success" plain @click="submit">提交</el-button>
    <div style="margin-left: 40px"></div>
    <el-button type="warning" plain @click="cancel">取消</el-button>
  </el-container>
</template>

<script>
export default {
  data(){
    return{
      queryParams:{
        maketPrice:0,
        showPrice:0,
        coin:0,
        price:0,
        limit:0,
        count:0,
        sellCount:0,
        viewCount:0
      }
    }
  },
  methods:{
    cancel(){
      this.$router.go(-1);
    },
    submit(){
      this.$message({
        type:'success',
        message:'设置价格与库存：'+JSON.stringify(this.queryParams)
      })
    }
  }
}
</script>

<style scoped>
.title{
  background-color: #e1e1e1;
  height: 35px;
  margin-bottom: 15px;
}
</style>