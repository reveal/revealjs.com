module.exports = {
  environment: process.env.NODE_ENV,
  assetSuffix: process.env.NODE_ENV == 'production' ? '?' + Date.now() : '',
};
