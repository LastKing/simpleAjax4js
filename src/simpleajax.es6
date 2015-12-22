/**
 * Created by Rain on 2015/12/22.
 */
import express from 'express';
import path from 'path';

import container from './container';

var router = express.Router();

/**
 * 根据路径和配置,初始化eazyajax环境
 * 并返回express的中间件
 *
 * export default 默认值函数，后面的值空缺，马上赋值为默认值
 */
export default async function (ajaxModuleRoot = path.join(process.cwd(), 'ajax')) {
  //加载和扫描模块
  await container.load(ajaxModuleRoot);
  console.log('模块加载完毕');


  return router;
};
