/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    serverRuntimeConfig:{
        PROJECT_ROOT: __dirname
    }
}

module.exports = nextConfig
