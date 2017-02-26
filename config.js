const mode  = process.env.NODE_ENV;
const generalConfig = {
    app_name: 'React / NodeJS'
};

const devConfig = {
    paths: new function () {
        this.mongoDB = `mongodb://localhost:27017`;
        this.url = 'http://localhost:8000';
    },
    port: 8000,

};
const productionConfig = {};


const config = (mode == 'development') ? devConfig : productionConfig;
Object.assign(config, generalConfig);

module.exports = config;
