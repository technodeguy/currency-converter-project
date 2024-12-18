export default () => ({
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        ttl: 60 * 1000,
    },
    monobankApiUrl: 'https://api.monobank.ua/bank/currency',
});