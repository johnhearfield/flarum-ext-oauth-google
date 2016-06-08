var gulp = require('flarum-gulp');

gulp({
  modules: {
    'johnhearfield/auth-google': [
      'src/**/*.js'
    ]
  }
});
