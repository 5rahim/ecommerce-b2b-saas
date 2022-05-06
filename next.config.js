const {i18n} = require('./next-i18next.config')
const withTM = require("next-transpile-modules")(['@googlemaps/react-wrapper', '@googlemaps/typescript-guards'])

let consolewarn = console.warn
console.warn = (...args) => {
    if (args.length > 1 && args[1].startsWith("You should not access 'res' after getServerSideProps")) {
        // ignore message until this is fixed: https://github.com/auth0/nextjs-auth0/issues/524
    } else {
        consolewarn(...args)
    }
}


module.exports = withTM({
    images: {
        domains: ['media.discordapp.net', 'images.unsplash.com'],
    },
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: [
            "en",
            "fr",
        ],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: "fr",
        localeDetection: false,
    },
})
