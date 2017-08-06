'use strict';

const Hapi = require('Hapi');
const mysql = require('mysql');
const connection = require('./db.js');

const server = new Hapi.Server();
/*server.connection({host: 'localhost', port: 2500, routes: {cors: true}});
server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method: 'POST',
    path: '/fetchallproductdetails',
    handler: function(request, reply){
      //  console.log(request.query);
    

      connection.query(`SELECT * FROM products_entry`,request.query,function(err,result){
          if(err){
              console.log(err); 
          }else{
              reply(result);
          }
      })

    }
});
*/



//server.start();
