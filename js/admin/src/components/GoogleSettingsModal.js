import SettingsModal from 'flarum/components/SettingsModal';
import app from 'flarum/app';

export default class GoogleSettingsModal extends SettingsModal {
  className() {
    return 'GoogleSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('johnhearfield-oauth-google.admin.google_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('johnhearfield-oauth-google.admin.google_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('johnhearfield-oauth-google.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('johnhearfield-oauth-google.admin.google_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('johnhearfield-oauth-google.app_secret')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('johnhearfield-oauth-google.admin.google_settings.hosted_domain_label')}</label>
        <input className="FormControl" bidi={this.setting('johnhearfield-oauth-google.app_domain')}/>
      </div>
    ];
  }
}
