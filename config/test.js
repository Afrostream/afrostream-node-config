'use strict';

module.exports = {
  ip: process.env.IP,
  port: process.env.PORT,

  basicAuth: {
    user: 'test',
    password: 'test'
  },

  pf: {
    baseUrl: 'http://p-afsmsch-001.afrostream.dev'
  },

  backend: {
    sequelize: {
      uri: 'postgres://postgres:root@localhost:5432/afrostream',
      options: {
        logging: false,
        storage: 'dev.postgres',
        define: {
          timestamps: false
        }
      }
    }
  }
};