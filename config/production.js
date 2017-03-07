'use strict';

module.exports = {
  // SELF
  env: 'production',
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
    baseUrl: process.env.AFROSTREAM_FRONT_END_BASEURL || 'https://afrostream.tv'
  },

  "afrostream-back-end": {
    baseUrl: process.env.AFROSTREAM_BACK_END_BASEURL || "https://afrostream-backend.herokuapp.com",

    sequelize: {
      uri: process.env.DATABASE_URL || 'postgres://u9u17sot1un0hr:p6o70uurl15iblacuu0g042e742@ec2-54-217-206-146.eu-west-1.compute.amazonaws.com:5492/d8kcdisl77do4k',
      options: {
        logging: false,
        storage: 'afrostream.postgres',
        define: {
          timestamps: false
        }
      }
    },

    mq: {
      endPoint: 'amqp://bjkjcuac:AZXv0QBokSQpjM545tlFXTMER2QN9F9K@chicken.rmq.cloudamqp.com/bjkjcuac',
      exchangeName: 'afrostream-backend'
    }
  },

  "afrostream-admin": {
    baseUrl: process.env.AFROSTREAM_ADMIN_BASEURL || "http://admin.afrostream.tv",
    host: process.env.AFROSTREAM_ADMIN_HOST || "admin.afrostream.tv",
    authority: process.env.AFROSTREAM_ADMIN_AUTHORITY || "admin.afrostream.tv"
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
    baseUrl: "http://p-afsmsch-001.afrostream.tv:4001"
  }
};
