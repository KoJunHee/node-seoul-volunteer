/*
* posts Model
* Created by junhee on 2018.09.10..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

module.exports = {
    tableName: 'posts',                   // lower case collection or table name
    connection: 'mongoConnection',      // database connection
    attributes: {
        gu: {
            type: 'string',
            required: true
        },
        title: {
            type: 'string',
            required: true
        },
        deadline: {
            type: 'date',
            required: true
        },
        title: {
            type: 'string',
            required: true
        },
        title: {
            type: 'string',
            required: true
        },
        title: {
            type: 'string',
            required: true
        },

    },
     beforeCreate: (item, next) => {
         next();
     }
};
