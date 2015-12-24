/**
 * Ajax调用检查器
 * 包括:
 *      模块/方法存在检查
 *
 * 赋值：
 *    将context上的moduleName和methodName
 *    赋值成为真正的require(模块)和方法
 * Created by toonew on 15/12/24
 */

import  util from 'util';

import container from '../container'

export default function (req, res, next) {
  //获得所有模块和方法的 map
  var modules = container.getModules();
  //获得当前请求的 各项参数
  var context = req.simpleajax;

  //监测模块是否存在
  if (!modules.has(context.moduleName)) {
    res.sendError(-2, `模块 ${context.moduleName} 找不到`);
    return false;
  }

  //监测方法是否存在
  if (!util.isFunction(modules.get(context.moduleName)[context.methodName])) {
    res.sendError(-2, `方法 ${context.moduleName}.${context.methodName} 找不到`);
    return false;
  }

  //通过模块名 get 到相应的模块的 require
  context.module = modules.get(context.moduleName);
  //将method 赋值成为真正的方法
  context.method = context.module[context.methodName];

  return next();
}