/**
 * context 强化处理
 *
 * 主要为 simpleAjax 挂钩上 各种参数
 *
 * Created by Rain on 2015/12/22.
 */

export default  function (req, res, next) {

  //发送ajax调用的结果
  res.sendReturnValue = function (returnValue) {
    //时间序列化器
    var ajaxReturnValueString = JSON.stringify({returnValue});
    res.contentType('application/json');
    res.send(ajaxReturnValueString);
  };

  //发送异常信息
  res.sendError = function (code, message = "未知错误") {
    message = message === '' ? '未知错误' : message;
    res.contentType('application/json');
    res.send(JSON.stringify({error: {code, message}}));
  };

  //发送ajax 调用请求的结果

  try {

    var moduleName = req.params.moduleName;
    var methodName = req.params.methodName;
    var httpParams = Object.assign({}, req.query, req.body);

    var args = null;

    //if(httpParams==)
    //args = JSON.parse(httpParams.args);

    //初始化simpleajax调用的context到req对象上
    req.simpleajax = {req, res, session: req.session, moduleName, methodName, args};

  } catch (error) {
    res.sendError(-1, error.message);
    return false;
  }
  return next();
}

