/**
 * Created by Rain on 2015/12/22.
 */

import request from 'supertest';

import serverInit from '../lib/server-init';

var app;
//先启动服务器
before(async(done)=> {
  try {
    app = await serverInit();
    done();
  } catch (err) {
    done(err);
  }
});


describe('基准测试', ()=> {
  it('没有返回值', (done)=> {


    done();
  });
});


