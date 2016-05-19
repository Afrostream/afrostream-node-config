'use strict';

module.exports = {
  basicAuth: {
    user: 'dev',
    password: 'dev'
  },

  pf: {
    baseUrl: 'http://p-afsmsch-001.afrostream.dev'
  },

  backend: {
    sequelize: {
      uri: 'postgres://postgres:root@localhost:5432/afrostream',
      options: {
        logging: console.log,
        storage: 'dev.postgres',
        define: {
          timestamps: false
        }
      }
    }
  }
};