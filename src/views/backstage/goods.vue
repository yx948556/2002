<template>
    <div>
        <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="goods1"
          class="el-menu-vertical-demo"
         router
        >
          <el-menu-item index="/goods1">
            <i class="el-icon-setting"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="/goods2">
            <i class="el-icon-setting"></i>
            <span slot="title">分类列表</span>
          </el-menu-item>
          <el-menu-item index="/goods3">
            <i class="el-icon-setting"></i>
            <span slot="title">商品规格</span>
          </el-menu-item>
          <el-menu-item index="/goods4">
            <i class="el-icon-setting"></i>
            <span slot="title">商品类型</span>
          </el-menu-item>
          <el-menu-item index="/goods5">
            <i class="el-icon-setting"></i>
            <span slot="title">商品评论</span>
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
