/**
 * Created by Rain on 2015/12/22.
 */
import express from 'express';
import session from 'express-session';
import path from 'path';

import simpleajax from '../../index';

var app;

export default async function () {
  if (!app) {
    app = express();

    //服务器启动挂在session
    app.use(session({
      secret: 'simpleajax',
      resave: false,
      saveUninitialized: true
    }));

    var middleware = await simpleajax(path.join(__dirname, '../', 'ajax'));
    app.use(middleware);
  }
  return app;
}
