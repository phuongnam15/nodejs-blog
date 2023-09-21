import morgan from 'morgan';
import path from 'path';
import ejs from 'ejs';
import express from 'express';

const configViewEngine = (app) => {
    //HTTP logger
    app.use(morgan('combined'));

    //Config Template engine
    app.set('views', path.join('./src/', 'views'));
    app.set('view engine', 'ejs');

    //Config static files
    app.use(express.static(path.join('./src', 'public')));
}
module.exports = configViewEngine;