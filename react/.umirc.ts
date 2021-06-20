import { defineConfig } from 'umi';
const path=require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { 
      path: '/', 
      component: '@/layout',
      routes:[
        {
          path:'/',
          component:'@/pages/home/index',
          title:'首页'
        },
        {
          path:'/order',
          component:'@/pages/order/index',
          title:'订单'
        },
        {
          path:'/user',
          component:'@/pages/user/index',
          title:'用户'
        }
      ]
    },
  ],
  fastRefresh: {},
  sass: {
    // resource: path.resolve(__dirname, '..', 'src/assets/imports.scss')
  },
  chainWebpack:(config)=>{
    const oneOfsMap = config.module.rule('sass').oneOfs.values();
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/assets/import.scss',
        })
        .end();
    });
  }
});
