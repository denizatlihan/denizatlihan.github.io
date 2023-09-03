const { config } = require('process')

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    serverRuntimeConfig:{
        PROJECT_ROOT: __dirname
    },
    webpack: (config,{isServer}) => {
        if(!isServer){
            config.node = {
                fs: 'empty'
            }
        }
    }
}

module.exports = nextConfig
