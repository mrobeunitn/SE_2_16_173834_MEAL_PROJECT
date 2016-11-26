var pg = require('pg');
var express = require("express");


var conString = "postgres://postgres:postgres@localhost:5433/MealProject";

exports.connect = pg.connect(conString, function(err, client, done) {

  if (err) {
    return console.error('error fetching client from pool', err);
  }
    init(client);
    done();
    if (err) {
      return console.error('error running query', err);
    }
  });



//funziIone per inizializzare il database 

function init(client){
    var query = "CREATE TABLE IF NOT EXISTS Users(name VARCHAR(255) NOT NULL,surname VARCHAR(255) NOT NULL,address VARCHAR(255) NOT NULL, passwOrd VARCHAR(255) NOT NULL,bdate DATE NOT NULL);";
    
    client.query(query);
    
    query = "INSERT INTO Users VALUES('marco','roberti','Vicolo Grilli 2 Isorella','marco.roberti','16-09-1995');";
    
    client.query(query);
    
    console.log("rip");
}


//CREATE DATABASE IF NOT EXISTS MealProject;
