/**
 * Ajax方法调用类
 *
 * Created by Rain on 2015/12/22.
 */

export default function (req, res, next) {
  try {
    var context = req.simpleajax;
    var args = context.args;

    //调用 请求对应的方法
    let returnValue = context.method.apply(context, args);

    /**
     * 根据 返回值
     * 返回不同的参数
     */
    if (returnValue === undefined) {
      res.sendReturnValue(undefined);
    } else if (returnValue === null) {
      res.sendReturnValue(null);
    } else {
      //判断是否为Promise，是则异步 等待结果完成再输出
      if (returnValue.then) {
        returnValue.then((value)=> {
          res.sendReturnValue(value);
        }).catch((error)=> {
          if (error.code == null)
            error.code = -5;
          if (error.message == null || error.message == '')
            error.message = '未知错误';
          res.sendError(error.code, error.message);
        });
      } else {
        res.sendReturnValue(returnValue);
      }
    }

  } catch (error) {
    if (error.code == null)
      error.code = -5;
    if (error.message == null || error.message == '')
      error.message = '未知错误';
    res.sendError(error.code, error.message);
  }
}
