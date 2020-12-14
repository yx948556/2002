<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
         router
        >
          <el-menu-item index="/ec">
            <i class="el-icon-setting"></i>
            <span slot="title">用户首页</span>
          </el-menu-item>
          <el-menu-item index="/xc">
            <i class="el-icon-setting"></i>
            <span slot="title">相册管理</span>
          </el-menu-item>
          <el-menu-item index="/good">
            <i class="el-icon-setting"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  components: {}
};
</script>

<style scoped>
</style>
