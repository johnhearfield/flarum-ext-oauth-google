'use strict';

System.register('johnhearfield/auth-google/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('johnhearfield/auth-google', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('google', m(
            LogInButton,
            {
              className: 'Button LogInButton--google',
              icon: 'google',
              path: '/auth/google' },
            app.translator.trans('johnhearfield-oauth-google.forum.log_in.with_google_button')
          ));
        });
      });
    }
  };
});