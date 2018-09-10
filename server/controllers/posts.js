/*
* posts Controller
* Created by junhee on 2018.09.10..
* Copyright (c) 2018 junhee. All rights reserved.
*/

'use strict';

const Boom = require('boom'),
    Joi = require('joi');

exports.findAll = {
    description: '전체 조회',
    notes: ' ',
    tags: ['api'],
    auth: false,
    handler: (request, reply) => {
        // 전체 조회
        Posts.find()
            .exec((err, posts) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(posts);
        });
    }
};

// find data
exports.find = {
    description: '조회',
    notes: ' ',
    tags: ['api'],
    validate: {
        params: {
            postsId: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 조회
        Posts.findOne({id: request.params.postsId})
            .exec((err, posts) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(posts);
        });
    }
};

// create new data
exports.create = {
    description: '생성',
    notes: ' ',
    tags: ['api'],
    validate: {
        payload: {
            attr1: Joi.string().required(),
            attr2: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 생성
        Posts.create(request.payload)
            .exec((err, posts) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(posts);
        });
    }
};

// update data
exports.update = {
    description: '수정',
    notes: ' ',
    tags: ['api'],
    validate: {
        params: {
            postsId: Joi.string().required()
        },
        payload: {
            attr1: Joi.string().required(),
            attr2: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 수정
        Posts.update({id: request.params.postsId}, request.payload)
            .exec((err, posts) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply(posts[0]);
            });
    }
};

// delete data
exports.destroy = {
    description: '삭제',
    notes: ' ',
    tags: ['api'],
    validate: {
        params: {
            postsId: Joi.string().required()
        }
    },
    auth: false,
    handler: (request, reply) => {
        // 삭제
        Posts.destroy({id: request.params.postsId})
            .exec((err) => {
                // 결과
                if (err) {
                    return reply(Boom.badImplementation(err));
                }
                reply({result: true});
            });
    }
};