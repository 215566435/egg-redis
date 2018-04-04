'use strict'

exports.redis = {
    client: {
        cluster: true,
        nodes: [
            {
                host: '127.0.0.1',
                port: 7000,
                password: '',
                db: '0'
            },
            {
                host: '127.0.0.1',
                port: 7001,
                password: '',
                db: '0'
            },
            {
                host: '127.0.0.1',
                port: 7002,
                password: '',
                db: '0'
            },
            {
                host: '127.0.0.1',
                port: 7003,
                password: '',
                db: '0'
            },
            {
                host: '127.0.0.1',
                port: 7004,
                password: '',
                db: '0'
            },
            {
                host: '127.0.0.1',
                port: 7005,
                password: '',
                db: '0'
            }
        ]
    },
    agent: true
}

exports.keys = 'keys'
