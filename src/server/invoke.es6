/**
 * Created by Rain on 2015/12/22.
 */

export default function (req, res, next) {

  var error = new Error();
  res.sendReturnValue(undefined);

  return next();
}
