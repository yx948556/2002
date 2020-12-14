<template>
    <div>
      <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
         router
        >
          <el-menu-item index="/ding1">
            <i class="el-icon-setting"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/ding2">
            <i class="el-icon-setting"></i>
            <span slot="title">发票管理</span>
          </el-menu-item>
          <el-menu-item index="/ding3">
            <i class="el-icon-setting"></i>
            <span slot="title">售后服务</span>
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
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    computed:{

    },
    components:{

    }
};
</script>

<style scoped>

</style>
