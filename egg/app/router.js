'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app; 

  //用户注册接口
  router.post('/api/user/register',controller.user.register);
  //用户登陆接口
  router.post('/api/user/login',controller.user.login);
  //用户详情
  router.get('/api/user/detail',controller.user.detail);
  //退出登录
  router.get('/api/user/logout',controller.user.logout);
};
