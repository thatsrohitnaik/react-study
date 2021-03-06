//import React from 'react';
const React = require('react');
const express = require('express')
const path = require('path');
const fs = require('fs');

//import express from 'express';
const ReactDOMServer = require('react-dom/server')

//import ReactDOMServer from 'react-dom/server';

//import App from '../src/App';
const App = require('../src/App')

const PORT = process.env.PORT || 3006;
const appa = express()

appa.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
  
    const indexFile = path.resolve('./dist/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });
  
  appa.use(express.static('./dist'));
  
  appa.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });