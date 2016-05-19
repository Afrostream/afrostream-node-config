'use strict';

module.exports = {
  basicAuth: {
    user: 'afrostream',
    password: 'afrostream77'
  },

  pf: {
    baseUrl: 'http://p-afsmsch-001.afrostream.tv:4000'
  },

  backend: {
    sequelize: {
      uri: 'postgres://u4fp4ad34q8qvi:pt7eht3e9v3lnehhh27m7sfeol@ec2-54-228-194-210.eu-west-1.compute.amazonaws.com:5522/d71on7act83b7i',
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
    }
  }
};