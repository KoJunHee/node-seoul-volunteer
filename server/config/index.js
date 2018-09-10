var config = {
    name: 'API',
    server: {
        host: '0.0.0.0',
        port: 8000,
        labels: ['api'],
        routes: {
            cors: { credentials: 'true' }
        }
    },
    database: {
        // mongo:
        // {
        //     host: 'ds151382.mlab.com',
        //     username: 'junhee.ko',
        //     password: 'qq1212qq1212!',
        //     port: '51382',
        //     database: 'seoul-volunteer'
        // }
    }
};


module.exports = config;