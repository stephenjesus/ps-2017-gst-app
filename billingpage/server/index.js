'use strict';

const Hapi = require('Hapi');
const mysql = require('mysql');
const connection = require('./db.js');

const server = new Hapi.Server();
server.connection({host: 'localhost', port: 2500, routes: {cors: true}});

//fetch
server.route({
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    },
    method: 'GET',
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

//search
server.route({
    method: 'GET',
    path: '/searchdb',
    handler: function(request, reply){
      //  console.log(request.query); 
    connection.query(`SELECT * FROM products_entry WHERE product_code=?`,request.query,function(err,result){
          if(err){
              console.log(err); 
          }else{
              if(result && result.length > 0){
                     reply(result)
              }
              else{
                  reply("Not found");
              }  
            }
      })
            }
});



server.start(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Port number: 2500")
    }
});
