module.exports = {
    content: [
        "./src/index.html",
        "./src/**/*.svelte",
        "./src/**/**/*.svelte",
        
    ],
    whitelistPatterns: [/svelte-/],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};
