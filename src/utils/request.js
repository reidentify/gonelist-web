import axios from "axios"

// 创建实例时设置配置的默认值
var service = axios.create({
  baseURL: 'http://www.cugxuan.cn:8000',
  timeout: 15000 
});
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    console.log(res);
    if(res.code == 200) {
      console.log("请求成功");
      return res;
    } else if (res.code == 400) {
      window.location.href = "http://www.cugxuan.cn:8000/login"
    } else {
      alert("请求失败");
    }
  },
  error => {
    alert("请求失败")
    console.log('err' + error);// for debug
  }
);
export default service;