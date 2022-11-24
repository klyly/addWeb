<template>
  <div class="content-container" direction="vertical">
    <div>
      <el-container class="content-row">
        <div class="input-tip">
          用户状态：
        </div>
        <div class="input-field">
          <el-input v-model="queryParams.state"></el-input>
        </div>
        <div class="input-tip">
          用户信息:
        </div>
        <div class="input-field">
          <el-input v-model="queryParams.name"></el-input>
        </div>
      </el-container>
    </div>
      <el-container class="content-row">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="primary" @click="clear">清除搜索条件</el-button>
      </el-container>
      <div>
        <el-table
            :data="managerReqList"
            tooltip-effect="dark"
            style="width: 100%">
          <el-table-column
              label="用户信息"
              width="200"
              prop="name">
          </el-table-column>
          <el-table-column
            label="状态"
            width="100">
            <template #default="scope">
              <el-tag size="medium" :type="scope.row.state ? 'success' : 'danger'">
                {{ scope.row.state ? '待审核' : '通过' }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
              label="更新时间"
              width="200"
              prop="updateTime">
          </el-table-column>
          <el-table-column
              label="添加时间"
              width="200"
              prop="addTime">
          </el-table-column>
          <el-table-column
              label="操作"
              width="100"
              prop="name">
            <template #default="scope">
              <el-button @click="operate(scope.row)" :type="scope.row.state?'danger':'success'">
                {{scope.row.state ? '通过':'下线'}}</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
import Mock from "../../mock/Mock"
export default {
  data(){
    return{
      queryParams:{
        state:"",
        name:""
      },
      managerReqList:[]
    }
  },
  mounted() {
    this.managerReqList = Mock.getManagerReqList();
  },
  methods: {
    operate(item) {
      item.state = !item.state;
    }
  }
}
</script>

<style scoped>

</style>