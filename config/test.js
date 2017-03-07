'use strict';

module.exports = {
  // SELF
  env: 'test',
  ip: process.env.IP,
  port: process.env.PORT,
  portssl: process.env.PORTSSL,
  basicAuth: {
    user: process.env.BASIC_AUTH_USER || 'test',
    password: process.env.BASIC_AUTH_PASSWORD || 'test'
  },

  cookies: {
    secret: '2342REJIEJIZJO29J9JGZF',
    test: {
      name: 'test',
      domain: '.afrostream.dev'
    },
    netsize: {
      name: 'netsize',
      domain: '.afrostream.dev'
    }
  },

  // THIRD-PARTY
  "afrostream-front-end": {
    baseUrl: process.env.AFROSTREAM_FRONT_END_BASEURL || 'http://localhost:3000'
  },

  "afrostream-back-end": {
    baseUrl: process.env.AFROSTREAM_BACK_END_BASEURL || "http://localhost:9000",

    sequelize: {
      uri: 'postgres://postgres:root@localhost:5432/afrostream',
      options: {
        logging: false,
        storage: 'dev.postgres',
        define: {
          timestamps: false
        }
      }
    },

    mq: {
      endPoint: 'amqp://localhost',
      exchangeName: 'afrostream-backend',
      autoReconnect: false,
      displayErrors: false
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
