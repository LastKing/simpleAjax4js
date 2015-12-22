/**
 * Created by Rain on 2015/12/22.
 */
import express from 'express';
import path from 'path';

import simpleAjax from '../../index';

var app;

export default async function () {
  if (!app) {
    app = express();

    var middleware = await simpleAjax(path.join(__dirname, '../', 'ajax'));
    app.use(middleware);
  }
  return app;
}
