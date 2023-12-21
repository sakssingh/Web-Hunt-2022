const {PORT, MONGO_URL} = process.env;

module.exports = {
    mongoURL: MONGO_URL,
    port: PORT,
};