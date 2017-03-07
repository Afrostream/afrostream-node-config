'use strict';

module.exports = {
  // SELF
  env: 'staging',
  ip: process.env.IP,
  port: process.env.PORT,
  portssl: process.env.PORTSSL,
  basicAuth: {
    user: process.env.BASIC_AUTH_USER || 'afrostream',
    password: process.env.BASIC_AUTH_PASSWORD || 'afrostream77'
  },

  cookies: {
    secret: '2342REJIEJIZJO29J9JGZF',
    test: {
      name: 'test',
      domain: '.afrostream.tv'
    },
    netsize: {
      name: 'netsize',
      domain: '.afrostream.tv'
    }
  },

  // THIRD-PARTY
  "afrostream-front-end": {
    baseUrl: process.env.AFROSTREAM_FRONT_END_BASEURL || 'https://staging.afrostream.tv'
  },

  "afrostream-back-end": {
    baseUrl: process.env.AFROSTREAM_BACK_END_BASEURL || "https://afr-back-end-staging.herokuapp.com",

    sequelize: {
      uri: 'postgres://u4fp4ad34q8qvi:pt7eht3e9v3lnehhh27m7sfeol@ec2-79-125-120-32.eu-west-1.compute.amazonaws.com:5542/d71on7act83b7i',
      options: {
        logging: console.log,
        storage: 'afrostream.postgres',
        define: {
          timestamps: false
        },
        // allowing to run staging conf on local dev env :)
        dialect: 'postgres',
        dialectOptions: {
          ssl: true
        }
      }
    },

    mq: {
      endPoint: 'amqp://yvkmghav:Uu-J25iHVqXV7C0_60e1V2JSgb0sEQ-3@chicken.rmq.cloudamqp.com/yvkmghav',
      exchangeName: 'afrostream-backend'
    }
  },

  "afrostream-admin": {
    baseUrl: process.env.AFROSTREAM_ADMIN_BASEURL || "http://afr-admin-staging.herokuapp.com",
    host: process.env.AFROSTREAM_ADMIN_HOST || "afr-admin-staging.herokuapp.com",
    authority: process.env.AFROSTREAM_ADMIN_AUTHORITY || "afr-admin-staging.herokuapp.com"
  },

  algolia: {
    apiKey: '47d48040a13e973aca2ea9f492eca17e',
    appId: '3OKNPL7ZVA'
  },

  amazon: {
    key: 'AKIAIJ7BEEEIYX3CZDOQ',
    secret: '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',
    region: 'eu-west-1',
    baseUrl: 'https://s3-eu-west-1.amazonaws.com'
  },

  pf: {
    baseUrl: 'http://p-afsmsch-001.afrostream.tv:4000'
  },

  "proxy-out": {
    baseUrl: "FIXME: should be a mock http://p-afsmsch-001.afrostream.tv:4001"
  }
};
