/**
 * 客户端 JS Handler
 * Created by demon on 15-12-19.
 */

import path  from 'path';
import normalJSGenerator from './normal/js_generator';


export default async function (res, req, next) {

  //拿到文件名,用来做区别分发
  var fileName = path.basename(req.baseUrl);
  var simpleajaxRoot = req.baseUrl.substring(0, req.baseUrl.lastIndexOf('/') + 1);

  try {
    //客户端JS请求的分发
    switch (fileName) {
      case 'angular-simleajax.js':
        res.contentType('text/javascript');
        res.send(await angularJSGenerator(simpleajaxRoot));
        break;

      case 'normal.js':
        res.contentType('text/javascript');
        res.send(await normalJSGenerator(simpleajaxRoot));
        break;

      default:
        throw new Error('错误请求');
    }
  } catch (error) {
    res.statusCode = 502;
    res.send(`获取客户端JS时发生错误: ${error.message}`);
  }

}




