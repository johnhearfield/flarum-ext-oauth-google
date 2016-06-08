import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('johnhearfield/auth-google', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('google',
      <LogInButton
        className="Button LogInButton--google"
        icon="google"
        path="/auth/google">
        {app.translator.trans('johnhearfield-oauth-google.forum.log_in.with_google_button')}
      </LogInButton>
    );
  });
});
