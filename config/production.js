'use strict';

module.exports = {
  basicAuth: {
    user: 'afrostream',
    password: 'afrostream77'
  },

  pf: {
    baseUrl: 'http://p-afsmsch-001.afrostream.tv:4000'
  },

  algolia: {
    apiKey: '47d48040a13e973aca2ea9f492eca17e',
    appId: '3OKNPL7ZVA'
  },

  aws: {
    accessKeyId: 'AKIAIJ7BEEEIYX3CZDOQ',
    accessKeySecret: '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'
  },

  backend: {
    amqpUrl: 'amqp://bjkjcuac:AZXv0QBokSQpjM545tlFXTMER2QN9F9K@chicken.rmq.cloudamqp.com/bjkjcuac',

    sequelize: {
      uri: 'postgres://u9u17sot1un0hr:p6o70uurl15iblacuu0g042e742@ec2-54-217-234-109.eu-west-1.compute.amazonaws.com:5552/d8kcdisl77do4k',
      options: {
        logging: false,
        storage: 'afrostream.postgres',
        define: {
          timestamps: false
        }
      }
    }
  }
};