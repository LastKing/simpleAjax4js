/**
 * Created by Rain on 2015/12/22.
 */

import request from 'supertest';
import should  from 'should';

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
    request(app)
        .get('/simpleajax/basic/getNone.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse(res.text);
          result.should.not.property('error');
          result.should.not.property('returnValue');
          done();
        });
  });

  it("返回空值", (done)=> {
    request(app)
        .get('/simpleajax/basic/getNull.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse(res.text);
          result.should.not.property('error');
          result.should.property('returnValue', null);
          done();
        })
  })


});


