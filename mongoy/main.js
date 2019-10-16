const express = require('express');
const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

mongoClient.connect(url, (err, client) => {
  console.log('Connected to MongoDB');
  let db = client.db('module9');
  let collection = db.collection('people');
  collection.find({name:'Squirb'}).toArray((err, documents) => {
    console.log('Found the following documents:')
    console.log(documents)
  });
});