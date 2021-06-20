/* eslint valid-jsdoc: "off" */

'use strict';
const path=require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1624028299709_9226';

  // add your middleware config here
  config.middleware = ['httpLog'];

  config.security={
    csrf:{
      enable:false
    }
  }

  config.view={
    mapping:{
      ".html":"ejs"
    },
    root:path.join(appInfo.baseDir,'app/html')
  }

  config.ejs={
    delimiter:'%'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt:'mock'
  };

  config.auth={
    exclude:['/home','/user','/login','/logout']
  }

  config.mysql={
    app:true,
    agent:false,
    client:{
      host:'127.0.0.1',
      port:'3306',
      user:'root',
      password:'123456789',
      database:'egg'
    }
  }

  config.sequelize={
    dialect:'mysql',
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456789',
    database:'egg_house',
    define:{
      timestamps:false,
      freezeTableName:true
    }
  }

  config.jwt={
    secret:'mukes'
  };

  return {
    ...config,
    ...userConfig,
  };
};
