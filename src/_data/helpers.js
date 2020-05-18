module.exports = {
    'environment': process.env.ELEVENTY_ENV,
    'assetSuffix': process.env.ELEVENTY_ENV === 'production' ? '?' + Date.now() : ''
};
