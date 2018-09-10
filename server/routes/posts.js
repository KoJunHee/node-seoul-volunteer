/*
* posts Route
* Created by junhee on 2018.09.10..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

const posts = require('../controllers/posts');

module.exports = [
    { method: 'GET', path: '/posts', config: posts.findAll },
    { method: 'GET', path: '/posts/{postsId}', config: posts.find },
    { method: 'POST', path: '/posts', config: posts.create },
    { method: 'PUT', path: '/posts/{postsId}', config: posts.update },
    { method: 'DELETE', path: '/posts/{postsId}', config: posts.destroy }
];