<template>
<div>
  <!-- <top-nav></top-nav> -->
  <sidebar></sidebar>
  <div class="m-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
  
</div>
</template>

<script>
import topNav from 'src/components/topNav.vue'
import sidebar from 'src/components/sidebar.vue'
export default{
  components: {
    topNav,
    sidebar,
  },
}
</script>

<style scoped>
.m-content{
  margin: 20px 20px 20px 240px;
}
</style>

<style>
.demo-enter-active, .demo-leave-active {
  position: fixed;
  left: 0; 
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .3s linear;
}
.demo-enter {
  transform: translateY(100%);
}
.demo-leave-active {
  transform: translateY(-100%);
}

*{ margin: 0; }
</style>