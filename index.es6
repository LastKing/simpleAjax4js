/**
 * Created by Rain on 2015/12/22.
 */
import simpleAjax from './src/simpleajax'
import util from 'util';

module.exports = function (path, option, callback) {
  if (util.isFunction(path)) {
    callback = path;
    path = undefined;
  }
  if (util.isObject(option)) {
    option = path;
    path = undefined;
  }
  if (util.isFunction(option)) {
    callback = option;
    option = undefined;
  }

  if (callback) {
    (async function () {
      try {
        var middleware = await simpleAjax(path, option);
        callback(null, middleware);
      } catch (error) {
        callback(error, null);
      }
    }());
  } else {
    return simpleAjax(path, option);
  }

};
