<template>
  <div class="yx_box">
    <!-- 登录 -->
    <div class="yx_head">UNI-ADMIN</div>
    <el-form :model="ruleForm" :rules="rules" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button style="width:100%" type="primary" @click="doLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录的数据
      ruleForm: {
        username: "admin",
        password: "admin"
      },
      // 验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "change" }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    //   请求登录的接口
    doLogin() {
      this.$axios
        .post("/admin/login", this.ruleForm)
        .then(res => {

          if (res.data.status == 1) {
             
            sessionStorage.setItem("yx_token", res.data.token);
            this.$message.success("登录成功");
            this.$router.push("/home");
          }
        })
        .catch((error) => {
            console.log(error)
          this.$message.error("登录失败");
        });
    }
  },
  computed: {},
  components: {}
};
</script>

<style lang="scss" scoped>
.yx_box {
  width: 500px;
  height: 300px;
  padding: 30px;
  margin: 50px auto;
  background: #eee;
  box-sizing: border-box;
  .yx_head {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 1px solid #ddd;
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
