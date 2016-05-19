'use strict';

module.exports = {
  // SELF
  ip: process.env.IP,
  port: process.env.PORT,
  basicAuth: {
    user: 'dev',
    password: 'dev'
  },

  // THIRD-PARTY
  "afrostream-front-end": {
    baseUrl: 'http://localhost:3000'
  },

  "afrostream-back-end": {
    baseUrl: "http://localhost:9000",

    sequelize: {
      uri: 'postgres://postgres:root@localhost:5432/afrostream',
      options: {
        logging: console.log,
        storage: 'dev.postgres',
        define: {
          timestamps: false
        }
      }
    },

    mq: {
      endPoint: 'amqp://localhost',
      exchangeName: 'afrostream-backend',
      autoReconnect: true,
      displayErrors: true
    }
  },

  amazon: {
    key: 'AKIAIJ7BEEEIYX3CZDOQ',
    secret: '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',
    region: 'eu-west-1',
    baseUrl: 'https://s3-eu-west-1.amazonaws.com'
  },

  pf: {
    baseUrl: 'http://p-afsmsch-001.afrostream.dev'
  },

  "proxy-out": {
    baseUrl: "FIXME: should be a mock http://p-afsmsch-001.afrostream.tv:4001"
  }
};