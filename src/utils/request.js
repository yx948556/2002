// 先导入axios对象
import axios from "axios"

// 创建axios对象
const Server = axios.create({
  baseUrl: "", //基础url地址
  timeout: 5000, //超时时间
})

// ////////////////////////////////////////////////////////////////////////////
// 配置请求拦截器
Server.interceptors.request.use((config) => {

// //1.获取本地存储的token值
let token = sessionStorage.getItem('login_token')
// 添加到head头中去
config.headers['Authorization']=token;

// // 退出登录的token
// let bdtoken = sessionStorage.getItem("bd_token")
// // 添加到header头中
// config.headers['token1']= bdtoken;

  return config;
}, (error) => {
  return Promise.reject(error)
})
// 配置响应拦截器
Server.interceptors.response.use((response) => {
  console.log(response)
  if (response.status == 200) {
    return response.data
  }
  return response
}, (error) => {
  // console.log(error.response)
  // 模拟token值失效的效果
  // if(error.response.data.errorCode == 20000){
  //   sessionStorage.removeItem("bd_token")
  //   this.$router.push("/day14/login");
  // }
  return Promise.reject(error)
})

// 抛出对象接口（拦截器）
export default Server