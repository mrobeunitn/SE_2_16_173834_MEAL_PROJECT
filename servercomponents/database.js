var pg = require('pg');
var express = require("express");


var conString = "postgres://postgres:postgres@localhost:5433/MealProject";

exports.connect = pg.connect(conString, function(err, client, done) {

  if (err) {
    return console.error('error fetching client from pool', err);
  }
 // client.query('SELECT $1::int AS number', ['1'], function(err, result) {
    done();
    if (err) {
      return console.error('error running query', err);
    }
  });

//result.rows[0].number

/*const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5433/MealProject';

const client = new pg.Client(connectionString);
exports.connect = client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });*/
