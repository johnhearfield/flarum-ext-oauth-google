'use strict';

System.register('johnhearfield/auth-google/components/GoogleSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, GoogleSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
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
            return "Google Settings";
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
                'Client ID'
              ),
              m('input', { className: 'FormControl', bidi: this.setting('johnhearfield-auth-google.app_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Client Secret'
              ),
              m('input', { className: 'FormControl', bidi: this.setting('johnhearfield-auth-google.app_secret') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Hosted Domain'
              ),
              m('input', { className: 'FormControl', bidi: this.setting('johnhearfield-auth-google.app_domain') })
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

      app.initializers.add('johnhearfield-auth-google', function (app) {
        app.extensionSettings['johnhearfield-auth-google'] = function () {
          return app.modal.show(new GoogleSettingsModal());
        };
      });
    }
  };
});