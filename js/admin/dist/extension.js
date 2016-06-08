'use strict';

System.register('johnhearfield/auth-google/components/GoogleSettingsModal', ['flarum/components/SettingsModal', 'flarum/app'], function (_export, _context) {
  "use strict";

  var SettingsModal, app, GoogleSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }],
    execute: function () {
      GoogleSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(GoogleSettingsModal, _SettingsModal);

        function GoogleSettingsModal() {
          babelHelpers.classCallCheck(this, GoogleSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(GoogleSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(GoogleSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'GoogleSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('johnhearfield-oauth-google.admin.google_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('johnhearfield-oauth-google.admin.google_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('johnhearfield-oauth-google.app_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('johnhearfield-oauth-google.admin.google_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('johnhearfield-oauth-google.app_secret') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('johnhearfield-oauth-google.admin.google_settings.hosted_domain_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('johnhearfield-oauth-google.app_domain') })
            )];
          }
        }]);
        return GoogleSettingsModal;
      }(SettingsModal);

      _export('default', GoogleSettingsModal);
    }
  };
});;
'use strict';

System.register('johnhearfield/auth-google/main', ['flarum/extend', 'flarum/app', 'johnhearfield/auth-google/components/GoogleSettingsModal'], function (_export, _context) {
  "use strict";

  var extend, app, GoogleSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_johnhearfieldAuthGoogleComponentsGoogleSettingsModal) {
      GoogleSettingsModal = _johnhearfieldAuthGoogleComponentsGoogleSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('johnhearfield/auth-google', function (app) {
        app.extensionSettings['johnhearfield-oauth-google'] = function () {
          return app.modal.show(new GoogleSettingsModal());
        };
      });
    }
  };
});