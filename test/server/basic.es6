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
  });

  it("返回boolean", (done)=> {
    request(app)
        .get('/simpleajax/basic/getBoolean.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse(res.text);
          result.should.not.property('error');
          result.should.property('returnValue', false);
          done();
        })
  });

  it('返回值为数字', (done)=> {
    request(app)
        .get('/simpleajax/basic/getNumber.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse((res.text));
          result.should.not.property('error');
          result.should.be.not.NaN(result.returnValue);
          done();
        });
  });

  it('返回值为字符串', (done)=> {
    request(app)
        .get('/simpleajax/basic/getString.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse((res.text));
          result.should.not.property('error');
          result.should.property('returnValue', 'eazyajax');
          done();
        });
  });


  it('返回值为数组', (done)=> {
    request(app)
        .get('/simpleajax/basic/getArray.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse((res.text));
          result.should.not.property('error');
          result.should.property('returnValue');

          var returnValue = result.returnValue;
          returnValue.should.be.a.Array;
          returnValue.should.eql([1, 2, 3, 4, 'five', null]);

          done();
        });
  });

  it('返回值为对象', (done)=> {
    request(app)
        .get('/simpleajax/basic/getObject.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse((res.text));
          result.should.not.property('error');
          result.should.property('returnValue');

          var returnValue = result.returnValue;
          returnValue.should.be.a.Object;
          returnValue.should.eql({
            name: 'eazyajax',
            author: 'danwi'
          });

          done();
        });
  });

});


