/**
 * 通用JS生成器
 * Created by demon on 15-12-19.
 */

import handlebars from 'handlebars';
import bluebird from 'bluebird';
import path from 'path';
import util from 'util';

import {getModules} from '../../container';

var fs = bluebird.promisifyAll(require('fs'));

export default async function (simpleajaxRoot) {
  //加载第三方文件
  var assetsLoadPromises = ['es5-shim', 'promise', 'json', 'ajax'].map((assetsName)=> {
    return fs.readFileAsync(path.join(__dirname, '../assets', `${assetsName}.jsfile`));
  });

  //将加载的文件存入到变量中
  var [es5ShimContent,promiseContent,jsonContent,ajaxContent] = (await Promise.all(assetsLoadPromises)).map(fileBuffer=>fileBuffer.toString());

  //从容器中读取已经加载的模块
  var modulesCache = getModules();
  //模块存根
  var moduleStubs = [];

}






