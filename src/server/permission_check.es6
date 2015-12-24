/**
 * Ajax权限检查
 * Created by toonew on 15/12/20.
 */

import util from 'util';

export default async function (req, res, next) {
  try {
    var module = req.simpleajax.module;
    var method = req.simpleajax.method;

    var permissions = [];


    return next();
  } catch (err) {
    res.sendError(-1, error.message);
  }
}




