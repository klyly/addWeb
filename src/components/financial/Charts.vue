<template>
<div ref="charts"></div>
</template>

<script>
import * as echarts from "echarts";

export * as  echarts from  'echarts';
export default {
  props:['xData','data'],
  watch:{
    xData(){
      this.refresh()
    },
    data(){
      this.refresh()
    }
  },
  mounted() {
    this.refresh()
  },
  methods:{
    refresh(){
      let chart=echarts.init(this.$refs.charts);
      chart.clear()
      chart.setOption({
        xAxis:{
          data:this.xData
        },
        yAxis:{
          type:'value'
        },
        series:{
          name:this.name,
          type:'line',
          data:this.data
        }
      });
    }
  }
}
</script>

<style scoped>

</style>