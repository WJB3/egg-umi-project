'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async index() {
    const { ctx } = this;

    ctx.body = 'user index';
  }

  async add(){
    const { ctx }=this;
    console.log(ctx.request.body);

    const rule={
      name:{type:'string'},
      age:{type:'string'}
    }
    ctx.validate(rule);
  }

  async lists() {
    const { ctx } = this;

    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });

    ctx.body = [{ id: 123 }];
  }

  async detail(){
    const {ctx}=this;

    ctx.body='detail'
  }

}

module.exports = UserController;
