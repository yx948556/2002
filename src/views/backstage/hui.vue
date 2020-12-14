<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="3" class="el-menu-vertical-demo" router>
          <el-menu-item index="/hui1">
            <i class="el-icon-setting"></i>
            <span slot="title">会员列表</span>
          </el-menu-item>
          <el-menu-item index="/hui2">
            <i class="el-icon-setting"></i>
            <span slot="title">会员等级</span>
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
