/**
 * Ajax方法调用类
 *
 * Created by Rain on 2015/12/22.
 */

export default function (req, res, next) {
  try {
    var context = req.simpleajax;
    var args = context.args;

    //调用 上下文中的方法
    let returnValue = context.method.apply(context, args);

    //判断调用值
    if (returnValue === undefined) {
      res.sendReturnValue(undefined);
    } else if (returnValue === null) {
      res.sendReturnValue(null);
    }

  } catch (error) {
    if (error.code == null)
      error.code = -5;
    if (error.message == null || error.message == '')
      error.message = '未知错误';
    res.sendError(error.code, error.message);
  }
}
