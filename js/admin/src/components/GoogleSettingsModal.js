import SettingsModal from 'flarum/components/SettingsModal';

export default class GoogleSettingsModal extends SettingsModal {
  className() {
    return 'GoogleSettingsModal Modal--small';
  }

  title() {
    return "Google Settings";
  }

  form() {
    return [
      <div className="Form-group">
        <label>Client ID</label>
        <input className="FormControl" bidi={this.setting('johnhearfield-auth-google.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>Client Secret</label>
        <input className="FormControl" bidi={this.setting('johnhearfield-auth-google.app_secret')}/>
      </div>,

      <div className="Form-group">
        <label>Hosted Domain</label>
        <input className="FormControl" bidi={this.setting('johnhearfield-auth-google.app_domain')}/>
      </div>
    ];
  }
}
