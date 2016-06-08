# Flarum Google Authenticator
Allows users to login using their Google Account.

## Installation
To install, use composer:
```
composer require johnhearfield/flarum-ext-oauth-google
```
## Usage
* Install extension via Composer / Packagist
* Enable extension in the admin/extensions of Flarum
* Fill in the settings field for the extension

### Setting up Google OAuth 2.0
Follow these instruction to generate your applications *Client ID* and *Client Secret*

https://support.google.com/cloud/answer/6158849?hl=en

**Optional** *Hosted domain*

The *hd* paramater limits sign-in to a particular Google Apps hosted domain.

https://developers.google.com/identity/protocols/OpenIDConnect#authenticationuriparameters
