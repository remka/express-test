// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '2069429233286764', // your App ID
        'clientSecret'  : '73c2919681703c1eee90090ec453aac3', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'emails', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'jF3zGXjfxvgNExNcy7ElM8zXT',
        'consumerSecret'    : 'pFn3prkCSR7Ln3QQUM81eDnWBpFRciLhllGfTJG6Fv74GZ3B7k',
        'callbackURL'       : 'http://127.0.0.1:8080/auth/twitter/callback'
    },

    // https://support.google.com/googleapi/answer/6158849?authuser=1
    'googleAuth' : {
        'clientID'      : '215088546809-81j7cubtpe1it7igi6of9cq0o860gga0.apps.googleusercontent.com',
        'clientSecret'  : 'clK9ZRTLfQ6P2DTvFmvWrXEp',
        'callbackURL'   : 'http://127.0.0.1:8080/auth/google/callback'
    }

};
