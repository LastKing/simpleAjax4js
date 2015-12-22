/**
 * Created by Rain on 2015/12/22.
 */

/**
 * 没有返回值
 */
export function getNull() {
  return new Promise((resolve)=> {
    setTimeout(()=>resolve(), 20);
  });
}

