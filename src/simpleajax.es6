/**
 * http context增强处理器
 * Created by Rain on 2015/12/22.
 */
import express from 'express';
import path from 'path';

import container from './container';

import contextInit from './server/contextInit';
import invoke    from './server/invoke'
import invokecheck from './server/invoke_check';

var router = express.Router();

/**
 * 根据路径和配置,初始化simpleajax环境
 * 并返回express的中间件
 *
 * export default 默认值函数，后面的值空缺，马上赋值为默认值
 */
export default async function (ajaxModuleRoot = path.join(process.cwd(), 'ajax'), {root}= {root: 'simpleajax'}) {
  //加载和扫描模块
  await container.load(ajaxModuleRoot);
  console.log('模块加载完毕');

  //注册ajax调用处理器    截获  /xxxx/xxx/xxx.ac 的请求
  router.use(
      `/${root}/:moduleName/:methodName.ac`,
      contextInit,
      invokecheck,
      invoke
  );

  //返回一个express中间件
  return router;
};
