/**
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


  } catch (error) {
    res.sendError(-1, error.message);
    return false;
  }
  return next();
}

