const Hapi = require('hapi');

const server = new Hapi.Server();
const Joi = require('joi')
const routeHelloHapi = require('./routes/hello-hapi')
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const config = require('./config/index')
const routeShop = require('./routes/shops')
const routeOrders = require('./routes/orders')

// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  // 路由应该分离出去
  await server.register([
    ...pluginHapiSwagger
  ]);
  server.route([
    ...routeHelloHapi,
    ...routeShop,
    ...routeOrders
    //   // 创建一个简单的 hello hapi 接口
    //   {
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, reply) => {
    //       reply('hello hapi');
    //     },
    //   },
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();