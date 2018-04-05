'use strict'

exports.redis = {
    client:{
        sentinels: [{ host: 'localhost', port: 26379 }, { host: 'localhost', port: 26380 }],
        name: 'mymaster'
      },
    agent:true
}

exports.keys = 'keys'
