const app = getApp()
import {
  fetch
} from "./ajax.js"   //引入封装的请求

export function homeList(url, parmas) {
  return fetch({
    url: url,   //请求的域名
    data: parmas,         //请求的参数
    method: 'GET',        //请求的方法
    load: 0               //是否需要显示加载中的图标
  })
}

//特殊请求
export function addAdvertisements(url, params) {
  return fetch({
    url: url,
    data: JSON.stringify(params),
    method: 'post',
    load: 0
  })
}