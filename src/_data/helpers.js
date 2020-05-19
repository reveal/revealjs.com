module.exports = {
    'environment': process.env.ELEVENTY_ENV === 'development' ? 'development' : 'production',
    'assetSuffix': process.env.ELEVENTY_ENV === 'production' ? '?' + Date.now() : ''
};
