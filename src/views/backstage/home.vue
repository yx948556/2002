<template>
  <div>
    <div class="yx_box">
      <div class="yx_box-txt">UNI-ADMIN</div>
      <div class="yx_box-nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#000"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home1">首页</el-menu-item>

          <el-menu-item index="/goods">商品</el-menu-item>

          <el-menu-item index="/ding">订单</el-menu-item>
          <el-menu-item index="/hui">会员</el-menu-item>
          <el-menu-item index="/she">设置</el-menu-item>

          <el-submenu>
            <template slot="title">admin</template>
            <el-menu-item>注册</el-menu-item>
            <el-menu-item @click="goLogin">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <el-card>
      <router-view></router-view>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    //   退出登录
    goLogin() {
      // this.$axios.post("/admin/logout").then(res=>{
      sessionStorage.removeItem("yx_token");
      this.$router.push("/login");
      // })
    }
  },
  computed: {},
  components: {}
};
</script>

<style lang="scss" scoped>
.yx_box {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 0 30px;
  background: #000;
  display: flex;
  justify-content: space-between;
  .yx_box-txt {
    line-height: 60px;
    color: #fff;
    font-size: 26px;
    font-weight: 600;
  }
  .yx_box-nav {
    background: #000;
    height: 100%;
    .el-menu {
      background: #000;
      height: 100%;
    }
  }
}
.el-menu-item {
  color: #fff;
}
.el-submenu {
  color: #fff;
  .template {
    color: #fff;
    .el-menu-item{
      color: #fff;
    }
  }
}
.el-card {
  height: 100%;
}
</style>
