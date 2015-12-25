/**
 * 使用例子演示
 * Created by demon on 15-12-18.
 */
import http from 'http';
import express from 'express';
import path from 'path';


import simpleAjax from '../index';

(async function () {
  try {
    //初始化express
    var app = express();

    //设定静态映射
    app.use(express.static('web'));

    //初始化eazyajax
    app.use(simpleAjax());

    //初始化服务
    var port = 3000;
    var server = http.createServer(app);
    //服务器开始监听
    server.listen(port);

    server.on('error', error=> console.error(error));
    server.on('listening', ()=> console.log(`服务器监听 ${server.address().port} 端口`));
  } catch (error) {
    console.error(error.message);
  }
})();