/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'trappe-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'script-src': "'self' 'unsafe-inline'", },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.firebase= 'https://trappeapp-test.firebaseio.com';
  }

  if (environment === 'production') {
      ENV.firebase= 'https://trappeapp.firebaseio.com';
  }

  return ENV;
};
