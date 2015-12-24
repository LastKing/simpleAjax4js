/**
 * 承诺测试
 *
 * Created by Rain on 2015/12/24.
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

describe('承诺测试', () => {
  it('没有返回值', (done)=> {
    request(app)
        .get('/simpleAjax/promise/getNone.ac')
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

  it('返回空值', (done)=> {
    request(app)
        .get('/simpleAjax/promise/getNull.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse(res.text);
          result.should.not.property('error');
          result.should.property('returnValue', null);
          done();
        });
  });

  it('返回值为布尔', (done)=> {
    request(app)
        .get('/simpleAjax/promise/getBoolean.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse((res.text));
          result.should.not.property('error');
          result.should.property('returnValue', false);
          done();
        });
  });

  it('返回值为数字', (done)=> {
    request(app)
        .get('/simpleAjax/promise/getNumber.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse((res.text));
          result.should.not.property('error');
          result.should.property('returnValue', 3.14);
          done();
        });
  });

  it('返回值为字符串', (done)=> {
    request(app)
        .get('/simpleAjax/promise/getString.ac')
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
        .get('/simpleAjax/promise/getArray.ac')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res)=> {
          if (err)done(err);

          var result = JSON.parse((res.text));
          result.should.not.property('error');
          result.should.property('returnValue');
          var returnValue = result.returnValue;
          returnValue.should.be.a.Array
          returnValue.should.eql([1, 2, 3, 4, 'five', null]);

          done();
        });
  });

  it('返回值为对象', (done)=> {
    request(app)
        .get('/simpleAjax/promise/getObject.ac')
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














