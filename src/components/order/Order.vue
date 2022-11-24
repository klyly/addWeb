<template>
<div class="content-container" direction = "vertical">
  <div>
    <el-container class="content-row">
      <div class="input-tip">
        商品名称:
      </div>
      <div class="input-field">
        <el-input v-model="queryParam.good"></el-input>
      </div>
      <div class="input-tip">
        收货人:
      </div>
      <div class="input-field">
        <el-input v-model="queryParam.consignee"></el-input>
      </div>
      <div class="input-tip">
        支付时间:
      </div>
      <div class="input-field">
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          v-model="queryParam.payTime">
        </el-date-picker>
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">
        用户名称:
      </div>
      <div class="input-field">
        <el-input v-model="queryParam.name"></el-input>
      </div>
      <div class="input-tip">
        手机号:
      </div>
      <div class="input-field">
        <el-input v-model="queryParam.phase"></el-input>
      </div>
      <div class="input-tip">
        发货时间:
      </div>
      <div class="input-field">
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          v-model="queryParam.sendTime">
        </el-date-picker>
      </div>
    </el-container>
  </div>
  <div class="content=row">
  <el-container>
      <el-button type="primary" @click="requestData">筛选</el-button>
      <el-button type="danger" @click="clear">清空筛选</el-button>
    <el-button type="primary" @click="exportData">导出</el-button>
    <el-button type="primary" @click="dispatchGoods">批量发货</el-button>
    <el-button type="primary" @click="exportDispatchGoods">下载批量发货样单</el-button>
  </el-container>
  </div>
  <div>
    <el-tabs type="card" @tab-click="handleClick">
      <el-tab-pane label="全部"></el-tab-pane>
      <el-tab-pane label="未支付"></el-tab-pane>
      <el-tab-pane label="已支付"></el-tab-pane>
      <el-tab-pane label="待发货"></el-tab-pane>
      <el-tab-pane label="已发货"></el-tab-pane>
      <el-tab-pane label="支付超时"></el-tab-pane>
    </el-tabs>
    <el-table
      ref="multipleTable"
      :data="orderList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="商品"
        width="100"
        prop="name">
      </el-table-column>
      <el-table-column
        label="总价/数量"
        width="100"
        prop="price">
      </el-table-column>
      <el-table-column
          label="买家信息"
          width="100"
          prop="buyer">
      </el-table-column>
      <el-table-column
          label="交易时间"
          width="200"
          prop="time">
      </el-table-column>
      <el-table-column
          label="分销信息"
          width="100">
        <template #default ="scope">
          <el-tag size="medium" :type="scope.row.role ? '' : 'info'">
            {{ scope.row.role ? '经理' : '分销员' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        width="100">
        <template #default="scope">
          <el-tag size="medium" :type="scope.row.state ? 'success' : 'danger'">
          {{ scope.row.state ? '已完成' : '未完成' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="200">
        <template #default="scope">
          <el-button size="mini" type="danger" @click="deleteItem(scope.$index)">删除</el-button>
          <el-button size="mini" type="primary" @click="callUser(scope.row)">联系客户</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="支付方式"
        width="100">
        <template #default="scope">
          <el-tag size="medium">{{scope.row.payType ? '微信' : '支付宝'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          label="来源"
          width="200"
          prop="source">
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
import Mock from '../../mock/Mock'
import Tools from '../../tools/Tools'
export default {
  data() {
    return {
      orderList: [],
      queryParam: {
        good: "",
        consignee: "",
        phone: "",
        name: "",
        payTime: "",
        sendTime: ""
      },
      multipleSelection: []
    }
  },
  mounted() {
    this.orderList = Mock.getOrder(this.$route.params.type);
  },
  beforeRouteUpdate(to) {
    this.orderList = Mock.getOrder(to.params.type);
  },
  methods: {
    requestData() {
      this.$message({
        type: 'success',
        message: '筛选请求参数：' + JSON.stringify(this.queryParam)
      })
      this.orderList = Mock.getOrder(this.$route.params.type);
    },
    handleClick(tab) {
      this.$message({
        type: 'success',
        message: '切换tab刷新数据：' + tab.props.label
      })
      this.orderList = Mock.getOrder(this.$route.params.type)
    },
    clear() {
      this.queryParam = {
        good: "",
        consignee: "",
        phone: "",
        name: "",
        payTime: "",
        sendTime: ""
      }
      this.orderList = Mock.getOrder(this.$route.params.type);
    },
    exportData() {
      Tools.exportJson('订单.json', JSON.stringify(this.orderList));
    },
    exportDispatchGoods(){
      Tools.exportJson('订单.json',JSON.stringify(this.multipleSelection));
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    dispatchGoods() {
      this.$message({
        type: 'success',
        message: '发货商品：' + JSON.stringify(this.multipleSelection)
      })
    },
    deleteItem(item) {
      this.orderList.splice(item, 1)
    },
    callUser(item) {
      console.log(item)
      this.$message({
        type: "success",
        message: "联系客户：" + item.phone
      })
    }
  }
}
</script>



