<template>
    <div>
       <el-container>
      <el-aside width="200px">
        <el-menu default-active="4" class="el-menu-vertical-demo" router>
          <el-menu-item index="/she1">
            <i class="el-icon-setting"></i>
            <span slot="title">基础设置</span>
          </el-menu-item>
          <el-menu-item index="/she2">
            <i class="el-icon-setting"></i>
            <span slot="title">物流设置</span>
          </el-menu-item>
          <el-menu-item index="/she3">
            <i class="el-icon-setting"></i>
            <span slot="title">管理员管理</span>
          </el-menu-item>
          <el-menu-item index="/she4">
            <i class="el-icon-setting"></i>
            <span slot="title">交易设置</span>
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
