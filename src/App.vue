<template>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
body{
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}
.content-container {
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  min-width: 1200px;
  display: inline-block;
  width: 90%;
}
.input-field {
  max-height: 40px;
}
.input-tip {
  margin: 0 10px;
  line-height: 40px;
}
.content-row {
  margin-bottom: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
