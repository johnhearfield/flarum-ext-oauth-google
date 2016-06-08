import { extend } from 'flarum/extend';
import app from 'flarum/app';

import GoogleSettingsModal from 'johnhearfield/auth-google/components/GoogleSettingsModal';

app.initializers.add('johnhearfield-auth-google', app => {
  app.extensionSettings['johnhearfield-auth-google'] = () => app.modal.show(new GoogleSettingsModal());
});